"use client";

import { Copy } from "lucide-react";
import { INSTALL_METHODS } from "@/lib/constants";

function InstallCommand({ command, label }: { command: string; label: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-2 group">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 font-mono text-sm border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <span className="text-primary">$</span>
        <code className="flex-1 text-foreground overflow-x-auto">{command}</code>
        <button
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 shrink-0"
          title="Copy to clipboard"
          onClick={handleCopy}
          aria-label={`Copy ${label} command`}
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function InstallationSection() {
  return (
    <section id="install" className="py-20 px-6 bg-card/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Install in seconds
          </h2>
          <p className="text-muted-foreground">
            Choose your preferred installation method
          </p>
        </div>

        <div className="space-y-6">
          {INSTALL_METHODS.map((method) => (
            <InstallCommand
              key={method.label}
              label={method.label}
              command={method.command}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            After installation, run:
          </p>
          <code className="bg-card px-4 py-2 rounded-lg font-mono text-primary border border-border/50">
            mantis
          </code>
        </div>
      </div>
    </section>
  );
}
