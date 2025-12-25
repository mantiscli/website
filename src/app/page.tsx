import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Terminal,
  Layers,
  Zap,
  Eye,
  Settings,
  Github,
  Check,
  X,
  Copy,
  ExternalLink,
  Quote,
  Twitter,
  MessageCircle,
} from "lucide-react";

function HeroTerminal() {
  return (
    <div className="terminal glow-green max-w-3xl mx-auto">
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

function SocialProofQuote() {
  return (
    <div className="py-12 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="w-8 h-8 text-primary/50 mx-auto mb-4" />
        <blockquote className="text-xl md:text-2xl font-medium mb-4">
          &ldquo;Finally, one command to see my entire security stack. No more juggling 5 different apps.&rdquo;
        </blockquote>
        <cite className="text-muted-foreground">
          — Security Engineer, Fortune 500
        </cite>
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function CommandDemo({ command, output }: { command: string; output: string }) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
      </div>
      <div className="terminal-body text-sm">
        <pre className="font-mono">
          <span className="text-primary">$</span> {command}
          {"\n"}
          <span className="text-green-400">{output}</span>
        </pre>
      </div>
    </div>
  );
}

function CompetitorComparison() {
  const competitors = [
    { name: "Little Snitch", limitation: "Firewall only, no unified view" },
    { name: "Lulu", limitation: "macOS firewall, single layer" },
    { name: "Radio Silence", limitation: "App blocking only" },
    { name: "Manual CLI", limitation: "No coordination, no profiles" },
  ];

  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Why Switch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beyond single-layer tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most security tools focus on one layer. Mantis unifies all six.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Compare with:</h3>
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm">
                  {comp.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{comp.name}</div>
                  <div className="text-sm text-muted-foreground">{comp.limitation}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-lg">Mantis</div>
                    <div className="text-sm text-muted-foreground">Unified Security Control</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    "6 protection layers in one view",
                    "One-command control for all tools",
                    "Security profiles (stealth/normal/direct)",
                    "Interactive REPL with tab completion",
                    "Real-time monitoring dashboard",
                    "Free & open source",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Switched from managing 4 separate tools to just running 'mantis'. Game changer for my workflow.",
      author: "@securitydev",
      platform: "twitter",
    },
    {
      quote: "The security profiles feature alone is worth it. One command to go stealth mode.",
      author: "@pentest_pro",
      platform: "twitter",
    },
    {
      quote: "Finally something that ties Proxyman, WARP, and TinyShield together. Been waiting for this.",
      author: "u/macsecguy",
      platform: "reddit",
    },
    {
      quote: "Open source, no telemetry, works offline. This is how security tools should be.",
      author: "u/privacymatters",
      platform: "reddit",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What people are saying
          </h2>
          <p className="text-muted-foreground">
            Join security professionals who&apos;ve simplified their workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {t.platform === "twitter" ? (
                    <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                  ) : (
                    <MessageCircle className="w-4 h-4 text-[#FF4500]" />
                  )}
                  <span className="text-sm text-muted-foreground">{t.author}</span>
                </div>
                <p className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallCommand({ command, label }: { command: string; label: string }) {
  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 font-mono text-sm border border-border/50">
        <span className="text-primary">$</span>
        <code className="flex-1 text-foreground">{command}</code>
        <button
          className="text-muted-foreground hover:text-foreground transition-colors"
          title="Copy to clipboard"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Mantis</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#compare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Compare
            </a>
            <a href="#install" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Install
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gn9nfg2yzj-cyber/mantis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <Button size="sm" className="rounded-full">
              Install Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-grid">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            v2.1.0 — Now with Security Profiles
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
            <Button size="lg" className="rounded-full glow-green px-8">
              <Terminal className="w-4 h-4 mr-2" />
              brew install mantiscli/tap/mantis
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a
                href="https://github.com/gn9nfg2yzj-cyber/mantis"
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

      {/* Social Proof Quote */}
      <SocialProofQuote />

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              6 layers of protection,
              <br />
              <span className="text-primary">1 command to rule them all</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Stop juggling multiple apps. Mantis gives you complete visibility
              and control over your entire security stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Feature
              icon={Layers}
              title="6-Layer Protection"
              description="Visualize your complete security stack from DNS to firewall to proxy, all in one unified view."
            />
            <Feature
              icon={Terminal}
              title="One Command Control"
              description="Start, stop, and sync all your security tools with simple, memorable commands."
            />
            <Feature
              icon={Shield}
              title="Security Profiles"
              description="Switch between stealth, normal, and direct modes with a single command."
            />
            <Feature
              icon={Zap}
              title="Interactive REPL"
              description="Tab completion, command history, and smart suggestions for power users."
            />
            <Feature
              icon={Eye}
              title="Real-time Monitoring"
              description="See what's running, what's blocked, and what needs attention instantly."
            />
            <Feature
              icon={Settings}
              title="Zero Configuration"
              description="Works out of the box on macOS. Auto-detects installed tools."
            />
          </div>

          {/* Quick command demos */}
          <div className="grid md:grid-cols-3 gap-4">
            <CommandDemo command="mantis start all" output="✓ All 6 layers activated" />
            <CommandDemo command="mantis profile stealth" output="✓ Stealth mode enabled" />
            <CommandDemo command="mantis watch" output="● Monitoring connections..." />
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <div id="compare">
        <CompetitorComparison />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Installation Section */}
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
            <InstallCommand
              label="Homebrew (Recommended)"
              command="brew install mantiscli/tap/mantis"
            />
            <InstallCommand
              label="Quick Install"
              command="curl -sSL https://raw.githubusercontent.com/gn9nfg2yzj-cyber/mantis/main/install.sh | bash"
            />
            <InstallCommand
              label="From Source"
              command="git clone https://github.com/gn9nfg2yzj-cyber/mantis.git && cd mantis && ./install.sh"
            />
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-grid">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take control?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Free, open source, privacy-first. No subscriptions. No tracking.
            Just security.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full glow-green px-8">
              <Terminal className="w-4 h-4 mr-2" />
              Install Mantis
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a
                href="https://github.com/gn9nfg2yzj-cyber/mantis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Docs
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">Mantis</span>
              <span className="text-muted-foreground text-sm">v2.1.0</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://github.com/gn9nfg2yzj-cyber/mantis"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://github.com/gn9nfg2yzj-cyber/mantis/releases"
                className="hover:text-foreground transition-colors"
              >
                Releases
              </a>
              <a
                href="https://github.com/gn9nfg2yzj-cyber/mantis/blob/main/LICENSE"
                className="hover:text-foreground transition-colors"
              >
                MIT License
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Made for security professionals
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
