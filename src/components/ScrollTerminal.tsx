"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

// Mantis CLI output with color tokens
const MANTIS_OUTPUT = [
  { text: "$ mantis", color: "command" },
  { text: "", color: "default" },
  { text: "  ╔╦╗╔═╗╔╗╔╔╦╗╦╔═╗", color: "primary" },
  { text: "  ║║║╠═╣║║║ ║ ║╚═╗", color: "primary" },
  { text: "  ╩ ╩╩ ╩╝╚╝ ╩ ╩╚═╝", color: "primary" },
  { text: "  Security Framework v2.1", color: "muted" },
  { text: "", color: "default" },
  { text: "USAGE:", color: "cyan" },
  { text: "  mantis [flags] <command> [options]", color: "default" },
  { text: "", color: "default" },
  { text: "INTERACTIVE:", color: "cyan" },
  { text: "  repl, shell         Start interactive shell", color: "default" },
  { text: "  watch [interval]    Live status updates", color: "default" },
  { text: "  profile [cmd]       Manage security profiles", color: "default" },
  { text: "", color: "default" },
  { text: "STATUS:", color: "cyan" },
  { text: "  status              Show all security tools", color: "default" },
  { text: "  json                Output status as JSON", color: "default" },
  { text: "  logs [type]         View logs", color: "default" },
  { text: "", color: "default" },
  { text: "CONTROL:", color: "cyan" },
  { text: "  start [tool]        Start tool", color: "default" },
  { text: "  stop [tool]         Stop tool", color: "default" },
  { text: "  sync                Sync all tools", color: "default" },
  { text: "", color: "default" },
  { text: "NETWORK:", color: "cyan" },
  { text: "  proxy [on|off]      System proxy", color: "default" },
  { text: "  dns [cloudflare]    Manage DNS", color: "default" },
  { text: "  hosts [install]     Hosts blocking", color: "default" },
  { text: "", color: "default" },
  { text: "AI:", color: "cyan" },
  { text: "  ai analyze          Analyze for threats", color: "default" },
  { text: "  ai query \"...\"      Natural language query", color: "default" },
  { text: "", color: "default" },
  { text: "EXAMPLES:", color: "yellow" },
  { text: "  mantis repl", color: "muted" },
  { text: "  mantis status", color: "muted" },
  { text: "  mantis profile apply stealth", color: "muted" },
  { text: "  mantis start all", color: "muted" },
];

// Calculate total characters for scroll mapping
const TOTAL_CHARS = MANTIS_OUTPUT.reduce((acc, line) => acc + line.text.length + 1, 0);

const colorClasses: Record<string, string> = {
  command: "text-foreground",
  primary: "text-primary",
  cyan: "text-cyan-400",
  yellow: "text-yellow-400",
  muted: "text-muted-foreground",
  default: "text-foreground/80",
};

// Hero terminal with auto-typing animation triggered on view
export function HeroScrollTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-50px" });
  const [charCount, setCharCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  // Start typing when in view
  useEffect(() => {
    if (isInView && !isTyping && charCount < TOTAL_CHARS) {
      setIsTyping(true);
    }
    if (!isInView && charCount > 0) {
      // Reverse when out of view (scrolling up)
      setIsTyping(false);
      const interval = setInterval(() => {
        setCharCount(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 3; // Faster reverse
        });
      }, 5);
      return () => clearInterval(interval);
    }
  }, [isInView, isTyping, charCount]);

  // Typing animation
  useEffect(() => {
    if (!isTyping) return;

    const interval = setInterval(() => {
      setCharCount(prev => {
        if (prev >= TOTAL_CHARS) {
          setIsTyping(false);
          clearInterval(interval);
          return TOTAL_CHARS;
        }
        // Variable speed based on character
        const currentChar = getCharAtPosition(prev);
        const speed = currentChar === '\n' ? 2 : 1;
        return prev + speed;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="terminal glow-green max-w-3xl mx-auto transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-muted-foreground text-sm ml-3 font-medium">
          mantis — bash
        </span>
      </div>
      <div className="terminal-body text-sm leading-relaxed min-h-[380px] overflow-hidden">
        <pre className="font-mono whitespace-pre">
          {renderLines(charCount, showCursor)}
        </pre>
      </div>
    </motion.div>
  );
}

// Get character at a specific position in the output
function getCharAtPosition(pos: number): string {
  let currentPos = 0;
  for (const line of MANTIS_OUTPUT) {
    if (currentPos + line.text.length >= pos) {
      return line.text[pos - currentPos] || '\n';
    }
    currentPos += line.text.length + 1;
  }
  return '';
}

// Render lines up to character count
function renderLines(charCount: number, showCursor: boolean) {
  let currentPos = 0;
  const elements: React.ReactElement[] = [];

  for (let i = 0; i < MANTIS_OUTPUT.length; i++) {
    const line = MANTIS_OUTPUT[i];
    const lineStart = currentPos;
    const lineEnd = lineStart + line.text.length;

    if (charCount <= lineStart) {
      // Haven't reached this line yet
      break;
    }

    const visibleLength = Math.min(charCount - lineStart, line.text.length);
    const visibleText = line.text.slice(0, visibleLength);
    const isCurrentLine = charCount > lineStart && charCount <= lineEnd;

    elements.push(
      <span key={i} className={colorClasses[line.color] || colorClasses.default}>
        {visibleText}
        {isCurrentLine && showCursor && <span className="text-primary font-bold">█</span>}
        {charCount > lineEnd && '\n'}
      </span>
    );

    currentPos = lineEnd + 1;
  }

  // Show cursor at start if nothing typed yet
  if (charCount === 0 && showCursor) {
    elements.unshift(
      <span key="cursor" className="text-primary font-bold">█</span>
    );
  }

  return elements;
}

// Full-page scroll-linked terminal for demo sections
export function ScrollTerminal({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const charCount = useTransform(scrollYProgress, [0.1, 0.7], [0, TOTAL_CHARS]);

  return (
    <div ref={containerRef} className={`relative min-h-[150vh] ${className}`}>
      <div className="terminal glow-green max-w-3xl mx-auto sticky top-24">
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="text-muted-foreground text-sm ml-3 font-medium">
            mantis — bash
          </span>
        </div>
        <div className="terminal-body text-sm leading-relaxed min-h-[400px] max-h-[500px] overflow-hidden">
          <motion.pre className="font-mono whitespace-pre">
            <ScrollLinkedText charCount={charCount} />
          </motion.pre>
        </div>
      </div>
    </div>
  );
}

// Scroll-linked text renderer
function ScrollLinkedText({
  charCount,
}: {
  charCount: ReturnType<typeof useTransform<number, number>>;
}) {
  const [count, setCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Subscribe to motion value
  useEffect(() => {
    const unsubscribe = charCount.on("change", (v) => setCount(Math.floor(v)));
    return unsubscribe;
  }, [charCount]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  return <>{renderLines(count, showCursor)}</>;
}
