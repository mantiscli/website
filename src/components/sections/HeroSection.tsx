"use client";

import { Terminal, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GITHUB_URL, HOMEBREW_COMMAND, VERSION } from "@/lib/constants";

function HeroTerminal() {
  return (
    <div className="terminal glow-green max-w-3xl mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-muted-foreground text-sm ml-3">mantis status</span>
      </div>
      <div className="terminal-body text-sm leading-relaxed">
        <pre className="font-mono text-foreground">
<span className="text-primary">$</span> mantis status

<span className="text-muted-foreground">┌─────────────────────────────────────────────────────────────┐</span>
<span className="text-muted-foreground">│</span>                    <span className="font-bold">MANTIS SECURITY STATUS</span>                    <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">├─────────────────────────────────────────────────────────────┤</span>
<span className="text-muted-foreground">│</span>  Layer 1: DNS Protection                                    <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>    └─ <span className="text-green-400">●</span> WARP: Connected (1.1.1.1 + Malware blocking)       <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>                                                             <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>  Layer 2: Firewall                                          <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>    └─ <span className="text-green-400">●</span> TinyShield: Active (312 rules loaded)              <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>                                                             <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>  Layer 3: Proxy                                             <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>    └─ <span className="text-green-400">●</span> Proxyman: Recording (HTTPS decryption on)          <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>                                                             <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>  Layer 4: Network Monitor                                   <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>    └─ <span className="text-green-400">●</span> Stratoshark: Capturing (en0)                       <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>                                                             <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>  Layer 5: Hosts Blocking                                    <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>    └─ <span className="text-green-400">●</span> Custom hosts: 847 domains blocked                  <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>                                                             <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>  Layer 6: System Proxy                                      <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">│</span>    └─ <span className="text-green-400">●</span> HTTP/HTTPS proxy configured                        <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">├─────────────────────────────────────────────────────────────┤</span>
<span className="text-muted-foreground">│</span>  <span className="text-green-400 font-bold">Protection: 6/6 layers active</span>       Profile: <span className="text-cyan-400">stealth</span>     <span className="text-muted-foreground">│</span>
<span className="text-muted-foreground">└─────────────────────────────────────────────────────────────┘</span>
        </pre>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6 bg-grid">
      <div className="max-w-6xl mx-auto text-center">
        <Badge
          variant="secondary"
          className="mb-6 transition-all duration-300 hover:scale-105 cursor-default"
        >
          v{VERSION} — Now with Security Profiles
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          See every connection.
          <br />
          <span className="text-primary text-glow">Control every layer.</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Mantis unifies your macOS security stack. Monitor Proxyman, WARP,
          TinyShield, and Stratoshark from a single, powerful CLI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="rounded-full glow-green px-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            asChild
          >
            <a href="#install">
              <Terminal className="w-4 h-4 mr-2" />
              {HOMEBREW_COMMAND}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full transition-all duration-300 hover:scale-105 hover:bg-card"
            asChild
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}
