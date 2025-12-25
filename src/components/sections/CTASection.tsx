import { Terminal, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/constants";

export function CTASection() {
  return (
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
          <Button
            size="lg"
            className="rounded-full glow-green px-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            asChild
          >
            <a href="#install">
              <Terminal className="w-4 h-4 mr-2" />
              Install Mantis
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
              Read the Docs
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
