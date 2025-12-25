"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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

interface ScrollTerminalProps {
  className?: string;
}

export function ScrollTerminal({ className = "" }: ScrollTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to character count
  const charCount = useTransform(scrollYProgress, [0.1, 0.7], [0, TOTAL_CHARS]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
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
            <ScrollText charCount={charCount} lines={MANTIS_OUTPUT} />
          </motion.pre>
        </div>
      </div>
    </div>
  );
}

// Component that renders text based on character count
function ScrollText({
  charCount,
  lines
}: {
  charCount: ReturnType<typeof useTransform<number, number>>;
  lines: typeof MANTIS_OUTPUT;
}) {
  const chars = useTransform(charCount, (count) => Math.floor(count));

  return (
    <motion.span>
      {lines.map((line, lineIndex) => {
        const lineStart = lines
          .slice(0, lineIndex)
          .reduce((acc, l) => acc + l.text.length + 1, 0);

        return (
          <ScrollLine
            key={lineIndex}
            text={line.text}
            color={line.color}
            lineStart={lineStart}
            charCount={chars}
          />
        );
      })}
    </motion.span>
  );
}

// Individual line that reveals based on scroll
function ScrollLine({
  text,
  color,
  lineStart,
  charCount,
}: {
  text: string;
  color: string;
  lineStart: number;
  charCount: ReturnType<typeof useTransform<number, number>>;
}) {
  const visibleText = useTransform(charCount, (count) => {
    const lineEnd = lineStart + text.length;
    if (count <= lineStart) return "";
    if (count >= lineEnd) return text + "\n";
    return text.slice(0, count - lineStart);
  });

  const showCursor = useTransform(charCount, (count) => {
    const lineEnd = lineStart + text.length;
    return count > lineStart && count < lineEnd;
  });

  return (
    <motion.span className={colorClasses[color] || colorClasses.default}>
      <motion.span>{visibleText}</motion.span>
      <motion.span
        className="text-primary"
        style={{ opacity: useTransform(showCursor, (show) => show ? 1 : 0) }}
      >
        █
      </motion.span>
    </motion.span>
  );
}

// Compact version for hero section
export function HeroScrollTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const charCount = useTransform(scrollYProgress, [0, 1], [0, TOTAL_CHARS]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
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
        <motion.pre className="font-mono whitespace-pre">
          <ScrollText charCount={charCount} lines={MANTIS_OUTPUT} />
        </motion.pre>
      </div>
    </motion.div>
  );
}
