import { Shield } from "lucide-react";
import { GITHUB_URL, GITHUB_RELEASES_URL, GITHUB_LICENSE_URL, VERSION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Mantis</span>
            <span className="text-muted-foreground text-sm">v{VERSION}</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground" aria-label="Footer navigation">
            <a
              href={GITHUB_URL}
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={GITHUB_RELEASES_URL}
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Releases
            </a>
            <a
              href={GITHUB_LICENSE_URL}
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            Made for security professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
