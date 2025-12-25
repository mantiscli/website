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
} from "lucide-react";
import {
  AnimatedTerminal,
  TerminalWindow,
  terminalDemos,
  type TerminalLine,
} from "@/components/AnimatedTerminal";

function HeroTerminal() {
  return (
    <TerminalWindow title="mantis status" glow className="max-w-3xl mx-auto">
      <span className="text-primary">$</span> mantis status
      {"\n\n"}
      <span className="text-muted-foreground">┌─────────────────────────────────────────────────────────────┐</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"                    "}<span className="font-bold">MANTIS SECURITY STATUS</span>{"                    "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">├─────────────────────────────────────────────────────────────┤</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  Layer 1: DNS Protection                                    "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"    └─ "}<span className="text-green-400">●</span>{" WARP: Connected (1.1.1.1 + Malware blocking)       "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"                                                             "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  Layer 2: Firewall                                          "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"    └─ "}<span className="text-green-400">●</span>{" TinyShield: Active (312 rules loaded)              "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"                                                             "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  Layer 3: Proxy                                             "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"    └─ "}<span className="text-green-400">●</span>{" Proxyman: Recording (HTTPS decryption on)          "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"                                                             "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  Layer 4: Network Monitor                                   "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"    └─ "}<span className="text-green-400">●</span>{" Stratoshark: Capturing (en0)                       "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"                                                             "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  Layer 5: Hosts Blocking                                    "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"    └─ "}<span className="text-green-400">●</span>{" Custom hosts: 847 domains blocked                  "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"                                                             "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  Layer 6: System Proxy                                      "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"    └─ "}<span className="text-green-400">●</span>{" HTTP/HTTPS proxy configured                        "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">├─────────────────────────────────────────────────────────────┤</span>
      {"\n"}
      <span className="text-muted-foreground">│</span>{"  "}<span className="text-green-400 font-bold">Protection: 6/6 layers active</span>{"       Profile: "}<span className="text-cyan-400">stealth</span>{"     "}<span className="text-muted-foreground">│</span>
      {"\n"}
      <span className="text-muted-foreground">└─────────────────────────────────────────────────────────────┘</span>
    </TerminalWindow>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  terminalDemo,
  terminalTitle,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  terminalDemo: TerminalLine[];
  terminalTitle: string;
}) {
  return (
    <div className="space-y-4">
      <Card className="bg-card/50 border-border/50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <AnimatedTerminal
        title={terminalTitle}
        lines={terminalDemo}
        typingSpeed={35}
        loop={true}
        triggerOnView={true}
      />
    </div>
  );
}

function InstallCommand({ command, label }: { command: string; label: string }) {
  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-4 py-3 font-mono text-sm">
        <span className="text-muted-foreground">$</span>
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

function ComparisonRow({
  feature,
  mantis,
  manual,
}: {
  feature: string;
  mantis: boolean;
  manual: boolean;
}) {
  return (
    <tr className="border-b border-border/50">
      <td className="py-4 px-6 text-left">{feature}</td>
      <td className="py-4 px-6 text-center">
        {mantis ? (
          <Check className="w-5 h-5 text-green-400 mx-auto" />
        ) : (
          <X className="w-5 h-5 text-muted-foreground mx-auto" />
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {manual ? (
          <Check className="w-5 h-5 text-green-400 mx-auto" />
        ) : (
          <X className="w-5 h-5 text-muted-foreground mx-auto" />
        )}
      </td>
    </tr>
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
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#install"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Install
            </a>
            <a
              href="#compare"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Compare
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
      <section className="pt-32 pb-20 px-6 bg-grid">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            v2.1.0 - Now with Security Profiles
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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

      {/* Features Section with Animated Terminals */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Layers}
              title="6-Layer Protection"
              description="Visualize your complete security stack from DNS to firewall to proxy, all in one unified view."
              terminalDemo={terminalDemos.status}
              terminalTitle="mantis status"
            />
            <FeatureCard
              icon={Terminal}
              title="One Command Control"
              description="Start, stop, and sync all your security tools with simple, memorable commands."
              terminalDemo={terminalDemos.oneCommand}
              terminalTitle="mantis start"
            />
            <FeatureCard
              icon={Shield}
              title="Security Profiles"
              description="Switch between stealth, normal, and direct modes with a single command."
              terminalDemo={terminalDemos.profiles}
              terminalTitle="mantis profile"
            />
            <FeatureCard
              icon={Zap}
              title="Interactive REPL"
              description="Tab completion, command history, and smart suggestions for power users."
              terminalDemo={terminalDemos.interactive}
              terminalTitle="mantis (interactive)"
            />
            <FeatureCard
              icon={Eye}
              title="Real-time Monitoring"
              description="See what's running, what's blocked, and what needs attention instantly."
              terminalDemo={terminalDemos.realtime}
              terminalTitle="mantis watch"
            />
            <FeatureCard
              icon={Settings}
              title="Zero Configuration"
              description="Works out of the box on macOS. Auto-detects installed tools and configures itself."
              terminalDemo={terminalDemos.zeroConfig}
              terminalTitle="homebrew"
            />
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20 px-6 bg-secondary/20">
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
            <code className="bg-card px-4 py-2 rounded-lg font-mono text-primary">
              mantis
            </code>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Mantis?</h2>
            <p className="text-muted-foreground">
              Compare unified control vs. managing each tool separately
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">
                    <span className="text-primary">Mantis</span>
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-muted-foreground">
                    Manual
                  </th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  feature="Unified control"
                  mantis={true}
                  manual={false}
                />
                <ComparisonRow
                  feature="Security profiles"
                  mantis={true}
                  manual={false}
                />
                <ComparisonRow
                  feature="Status at a glance"
                  mantis={true}
                  manual={false}
                />
                <ComparisonRow
                  feature="Interactive mode"
                  mantis={true}
                  manual={false}
                />
                <ComparisonRow
                  feature="Tab completion"
                  mantis={true}
                  manual={false}
                />
                <ComparisonRow
                  feature="Command history"
                  mantis={true}
                  manual={false}
                />
                <ComparisonRow
                  feature="Free & open source"
                  mantis={true}
                  manual={true}
                />
              </tbody>
            </table>
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
