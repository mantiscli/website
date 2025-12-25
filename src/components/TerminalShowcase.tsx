"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedTerminal, terminalDemos, TerminalLine } from "./AnimatedTerminal";

interface TerminalCardProps {
  title: string;
  lines: TerminalLine[];
  angle: "left" | "right" | "center" | "flat";
  delay?: number;
  className?: string;
  glow?: boolean;
}

function TerminalCard({ title, lines, angle, delay = 0, className = "", glow = false }: TerminalCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const angleStyles = {
    left: "rotate-y-6 -rotate-z-1 hover:rotate-y-0 hover:rotate-z-0",
    right: "rotate-y--6 rotate-z-1 hover:rotate-y-0 hover:rotate-z-0",
    center: "rotate-x-3 hover:rotate-x-0",
    flat: "",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`perspective-1000 ${className}`}
    >
      <div
        className={`transform-style-3d transition-transform duration-500 ${angleStyles[angle]} ${glow ? "glow-green" : ""}`}
      >
        <AnimatedTerminal
          title={title}
          lines={lines}
          typingSpeed={35}
          loop={true}
          className="shadow-2xl shadow-black/50"
        />
      </div>
    </motion.div>
  );
}

export function TerminalShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="py-24 px-6 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mantis in action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how Mantis unifies your security stack with simple, powerful commands.
            Real-time monitoring, instant profile switching, and complete control.
          </p>
        </motion.div>

        {/* Featured Terminal - Large Center */}
        <div className="mb-16">
          <TerminalCard
            title="mantis status"
            lines={terminalDemos.status}
            angle="center"
            delay={0.1}
            glow={true}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Three-Column Grid with Angled Terminals */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <TerminalCard
            title="Profile Switching"
            lines={terminalDemos.profiles}
            angle="left"
            delay={0.2}
          />
          <TerminalCard
            title="Real-time Monitoring"
            lines={terminalDemos.realtime}
            angle="flat"
            delay={0.3}
            glow={true}
          />
          <TerminalCard
            title="One Command Start"
            lines={terminalDemos.oneCommand}
            angle="right"
            delay={0.4}
          />
        </div>

        {/* Two-Column Layout for Remaining Demos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <TerminalCard
            title="Interactive Mode"
            lines={terminalDemos.interactive}
            angle="left"
            delay={0.5}
          />
          <TerminalCard
            title="Zero Configuration"
            lines={terminalDemos.zeroConfig}
            angle="right"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

// Floating terminal for hero sections with parallax-like effect
export function FloatingTerminal({
  lines,
  title,
  position = "right",
  size = "medium",
}: {
  lines: TerminalLine[];
  title: string;
  position?: "left" | "right" | "center";
  size?: "small" | "medium" | "large";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const positionStyles = {
    left: "-rotate-6 -translate-x-4",
    right: "rotate-6 translate-x-4",
    center: "rotate-0",
  };

  const sizeStyles = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: position === "left" ? -12 : position === "right" ? 12 : 0 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        rotate: position === "left" ? -6 : position === "right" ? 6 : 0
      } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${sizeStyles[size]} ${positionStyles[position]} transform transition-transform duration-500 hover:rotate-0 hover:scale-105`}
    >
      <AnimatedTerminal
        title={title}
        lines={lines}
        typingSpeed={40}
        loop={true}
        className="shadow-2xl shadow-black/60 glow-green"
      />
    </motion.div>
  );
}

// Stacked terminals for depth effect
export function StackedTerminals() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative h-[500px] perspective-1000">
      {/* Background terminal */}
      <motion.div
        initial={{ opacity: 0, z: -100, y: 50 }}
        animate={isInView ? { opacity: 0.3, z: -100, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0 }}
        className="absolute inset-0 transform translate-z-[-100px] scale-90"
      >
        <div className="terminal opacity-50 blur-[1px]">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
          </div>
          <div className="terminal-body h-48" />
        </div>
      </motion.div>

      {/* Middle terminal */}
      <motion.div
        initial={{ opacity: 0, z: -50, y: 50 }}
        animate={isInView ? { opacity: 0.6, z: -50, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute inset-0 transform translate-z-[-50px] scale-95 translate-y-4"
      >
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
          </div>
          <div className="terminal-body h-48" />
        </div>
      </motion.div>

      {/* Front terminal - animated */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 translate-y-8"
      >
        <AnimatedTerminal
          title="mantis"
          lines={terminalDemos.interactive}
          typingSpeed={40}
          loop={true}
          className="shadow-2xl shadow-black/60 glow-green"
        />
      </motion.div>
    </div>
  );
}
