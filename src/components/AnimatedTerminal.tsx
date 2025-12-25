"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface TerminalLine {
  text: string;
  type: "command" | "output" | "success" | "warning" | "info" | "error";
  delay?: number;
}

interface AnimatedTerminalProps {
  title?: string;
  lines: TerminalLine[];
  typingSpeed?: number;
  loop?: boolean;
  className?: string;
  triggerOnView?: boolean;
}

export function AnimatedTerminal({
  title = "Terminal",
  lines,
  typingSpeed = 40,
  loop = true,
  className = "",
  triggerOnView = true,
}: AnimatedTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isActive, setIsActive] = useState(true); // Start immediately, don't wait for scroll
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Typed.js inspired: parse ^1000 pause syntax
  const parseText = useCallback((text: string) => {
    const pauseMatch = text.match(/\^(\d+)/);
    if (pauseMatch) {
      const pauseDuration = parseInt(pauseMatch[1], 10);
      const cleanText = text.replace(/\^\d+/, "");
      return { text: cleanText, pause: pauseDuration };
    }
    return { text, pause: 0 };
  }, []);

  // Animation starts immediately on mount
  useEffect(() => {
    setIsActive(true);
  }, []);

  // Cursor blink effect (Typed.js style)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Main typing animation loop
  useEffect(() => {
    if (!isActive || !lines || lines.length === 0) return;

    if (currentLineIndex >= lines.length) {
      if (loop) {
        const timeout = setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 2500);
        return () => clearTimeout(timeout);
      }
      return;
    }

    const currentLine = lines[currentLineIndex];
    const { text: fullText, pause } = parseText(currentLine.text);

    if (currentLine.type === "command") {
      // Typing effect for commands
      if (currentCharIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[currentLineIndex] = fullText.slice(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, typingSpeed + Math.random() * 20); // slight randomness like real typing
        return () => clearTimeout(timeout);
      } else {
        // Finished typing command, add pause then move to next
        const delay = (currentLine.delay || 400) + pause;
        const timeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else {
      // Instant display for output lines
      const delay = currentLine.delay || 30;
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = fullText;
          return newLines;
        });
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, loop, isActive, parseText]);

  // Auto-scroll terminal
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command": return "text-foreground";
      case "success": return "text-green-400";
      case "warning": return "text-yellow-400";
      case "info": return "text-cyan-400";
      case "error": return "text-red-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div ref={terminalRef} className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-muted-foreground text-sm ml-3 font-medium">{title}</span>
      </div>
      <div
        ref={containerRef}
        className="terminal-body text-sm leading-relaxed min-h-[180px] max-h-[320px] overflow-y-auto"
      >
        <pre className="font-mono whitespace-pre-wrap">
          {displayedLines.map((line, index) => {
            if (!lines || !lines[index]) return null;
            const lineConfig = lines[index];
            const isCurrentCommand =
              index === currentLineIndex && lineConfig.type === "command";

            return (
              <div key={index} className={getLineColor(lineConfig.type)}>
                {lineConfig.type === "command" && (
                  <span className="text-primary font-bold">$ </span>
                )}
                <span>{line}</span>
                {isCurrentCommand && showCursor && (
                  <span className="text-primary font-bold">|</span>
                )}
              </div>
            );
          })}
          {lines && currentLineIndex < lines.length &&
            lines[currentLineIndex]?.type === "command" &&
            !displayedLines[currentLineIndex] && (
              <div className="text-foreground">
                <span className="text-primary font-bold">$ </span>
                <span className="text-primary font-bold">
                  {showCursor ? "|" : " "}
                </span>
              </div>
            )}
        </pre>
      </div>
    </div>
  );
}

// Static terminal window for pre-rendered content
export function TerminalWindow({
  title,
  children,
  className = "",
  glow = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={`terminal ${glow ? "glow-green" : ""} ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-muted-foreground text-sm ml-3 font-medium">{title}</span>
      </div>
      <div className="terminal-body text-sm leading-relaxed">
        <pre className="font-mono text-foreground whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  );
}

// Feature-specific terminal demos
export const terminalDemos = {
  status: [
    { text: "mantis status", type: "command" as const, delay: 600 },
    { text: "", type: "output" as const, delay: 100 },
    { text: "┌─────────────────────────────────────────────┐", type: "output" as const },
    { text: "│         MANTIS SECURITY STATUS              │", type: "output" as const },
    { text: "├─────────────────────────────────────────────┤", type: "output" as const },
    { text: "│  Layer 1: DNS Protection                    │", type: "output" as const },
    { text: "│    └─ ● WARP: Connected (1.1.1.1)           │", type: "success" as const },
    { text: "│  Layer 2: Firewall                          │", type: "output" as const },
    { text: "│    └─ ● TinyShield: Active (312 rules)      │", type: "success" as const },
    { text: "│  Layer 3: Proxy                             │", type: "output" as const },
    { text: "│    └─ ● Proxyman: Recording                 │", type: "success" as const },
    { text: "├─────────────────────────────────────────────┤", type: "output" as const },
    { text: "│  Protection: 6/6 layers    Profile: stealth │", type: "info" as const },
    { text: "└─────────────────────────────────────────────┘", type: "output" as const },
  ],

  profiles: [
    { text: "mantis profile stealth ^500", type: "command" as const, delay: 400 },
    { text: "", type: "output" as const, delay: 50 },
    { text: "Switching to stealth profile...", type: "output" as const },
    { text: "  ✓ WARP: Malware + Adult blocking enabled", type: "success" as const },
    { text: "  ✓ TinyShield: Maximum protection", type: "success" as const },
    { text: "  ✓ Proxyman: Disabled for stealth", type: "success" as const },
    { text: "  ✓ System proxy: Configured", type: "success" as const },
    { text: "", type: "output" as const },
    { text: "Profile 'stealth' activated successfully.", type: "info" as const },
  ],

  interactive: [
    { text: "mantis", type: "command" as const, delay: 500 },
    { text: "", type: "output" as const, delay: 100 },
    { text: "Welcome to Mantis Interactive Mode", type: "info" as const },
    { text: "Type 'help' for commands, 'exit' to quit", type: "output" as const },
    { text: "", type: "output" as const },
    { text: "mantis> status ^300", type: "command" as const, delay: 400 },
    { text: "6/6 protection layers active", type: "success" as const },
    { text: "", type: "output" as const },
    { text: "mantis> warp connect ^300", type: "command" as const, delay: 400 },
    { text: "WARP connected successfully", type: "success" as const },
    { text: "", type: "output" as const },
    { text: "mantis> _", type: "output" as const },
  ],

  oneCommand: [
    { text: "mantis start all ^500", type: "command" as const, delay: 500 },
    { text: "", type: "output" as const, delay: 100 },
    { text: "Starting all security services...", type: "output" as const },
    { text: "  ● WARP         → Connected", type: "success" as const, delay: 150 },
    { text: "  ● TinyShield   → Active", type: "success" as const, delay: 150 },
    { text: "  ● Proxyman     → Recording", type: "success" as const, delay: 150 },
    { text: "  ● Stratoshark  → Capturing", type: "success" as const, delay: 150 },
    { text: "", type: "output" as const },
    { text: "All services started in 2.3s", type: "info" as const },
  ],

  realtime: [
    { text: "mantis watch ^300", type: "command" as const, delay: 500 },
    { text: "", type: "output" as const, delay: 100 },
    { text: "Watching security status (Ctrl+C to stop)...", type: "output" as const },
    { text: "", type: "output" as const },
    { text: "[12:34:01] TinyShield blocked: ads.tracker.com", type: "warning" as const, delay: 800 },
    { text: "[12:34:03] WARP: 1.2ms latency to 1.1.1.1", type: "success" as const, delay: 600 },
    { text: "[12:34:05] Proxyman: 47 requests captured", type: "info" as const, delay: 600 },
    { text: "[12:34:08] TinyShield blocked: malware.bad.net", type: "error" as const, delay: 800 },
    { text: "[12:34:10] All layers: ✓ healthy", type: "success" as const },
  ],

  zeroConfig: [
    { text: "brew install mantiscli/tap/mantis ^500", type: "command" as const, delay: 600 },
    { text: "", type: "output" as const, delay: 200 },
    { text: "==> Downloading mantis-2.1.0.tar.gz", type: "output" as const, delay: 300 },
    { text: "==> Installing mantis", type: "output" as const, delay: 200 },
    { text: "==> Caveats", type: "output" as const },
    { text: "   Run 'mantis' for interactive mode", type: "output" as const },
    { text: "==> Summary", type: "output" as const },
    { text: "   /opt/homebrew/Cellar/mantis/2.1.0", type: "success" as const },
    { text: "", type: "output" as const },
    { text: "mantis --version ^300", type: "command" as const, delay: 500 },
    { text: "Mantis Security Framework v2.1.0", type: "info" as const },
  ],
};
