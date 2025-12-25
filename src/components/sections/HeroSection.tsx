"use client";

import { Terminal, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroScrollTerminal } from "@/components/ScrollTerminal";
import { GITHUB_URL, HOMEBREW_COMMAND, VERSION } from "@/lib/constants";

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

        <HeroScrollTerminal />
      </div>
    </section>
  );
}
