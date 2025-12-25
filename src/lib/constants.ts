import { Layers, Terminal, Shield, Zap, Eye, Settings } from "lucide-react";

// URLs
export const GITHUB_URL = "https://github.com/gn9nfg2yzj-cyber/mantis";
export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`;
export const GITHUB_LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`;
export const INSTALL_SCRIPT_URL = `https://raw.githubusercontent.com/gn9nfg2yzj-cyber/mantis/main/install.sh`;

// Version
export const VERSION = "2.1.0";

// Commands
export const HOMEBREW_COMMAND = "brew install mantiscli/tap/mantis";
export const CURL_COMMAND = `curl -sSL ${INSTALL_SCRIPT_URL} | bash`;
export const SOURCE_COMMAND = `git clone ${GITHUB_URL}.git && cd mantis && ./install.sh`;

// Features
export const FEATURES = [
  {
    icon: Layers,
    title: "6-Layer Protection",
    description: "Visualize your complete security stack from DNS to firewall to proxy, all in one unified view.",
  },
  {
    icon: Terminal,
    title: "One Command Control",
    description: "Start, stop, and sync all your security tools with simple, memorable commands.",
  },
  {
    icon: Shield,
    title: "Security Profiles",
    description: "Switch between stealth, normal, and direct modes with a single command.",
  },
  {
    icon: Zap,
    title: "Interactive REPL",
    description: "Tab completion, command history, and smart suggestions for power users.",
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description: "See what's running, what's blocked, and what needs attention instantly.",
  },
  {
    icon: Settings,
    title: "Zero Configuration",
    description: "Works out of the box on macOS. Auto-detects installed tools.",
  },
] as const;

// Command demos
export const COMMAND_DEMOS = [
  { command: "mantis start all", output: "✓ All 6 layers activated" },
  { command: "mantis profile stealth", output: "✓ Stealth mode enabled" },
  { command: "mantis watch", output: "● Monitoring connections..." },
] as const;

// Competitors
export const COMPETITORS = [
  { name: "Little Snitch", limitation: "Firewall only, no unified view" },
  { name: "Lulu", limitation: "macOS firewall, single layer" },
  { name: "Radio Silence", limitation: "App blocking only" },
  { name: "Manual CLI", limitation: "No coordination, no profiles" },
] as const;

// Mantis features for comparison
export const MANTIS_FEATURES = [
  "6 protection layers in one view",
  "One-command control for all tools",
  "Security profiles (stealth/normal/direct)",
  "Interactive REPL with tab completion",
  "Real-time monitoring dashboard",
  "Free & open source",
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "Switched from managing 4 separate tools to just running 'mantis'. Game changer for my workflow.",
    author: "@securitydev",
    platform: "twitter" as const,
  },
  {
    quote: "The security profiles feature alone is worth it. One command to go stealth mode.",
    author: "@pentest_pro",
    platform: "twitter" as const,
  },
  {
    quote: "Finally something that ties Proxyman, WARP, and TinyShield together. Been waiting for this.",
    author: "u/macsecguy",
    platform: "reddit" as const,
  },
  {
    quote: "Open source, no telemetry, works offline. This is how security tools should be.",
    author: "u/privacymatters",
    platform: "reddit" as const,
  },
] as const;

// Installation methods
export const INSTALL_METHODS = [
  { label: "Homebrew (Recommended)", command: HOMEBREW_COMMAND },
  { label: "Quick Install", command: CURL_COMMAND },
  { label: "From Source", command: SOURCE_COMMAND },
] as const;

// Navigation links
export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#compare", label: "Compare" },
  { href: "#install", label: "Install" },
] as const;
