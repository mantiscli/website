import { Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COMPETITORS, MANTIS_FEATURES } from "@/lib/constants";

export function ComparisonSection() {
  return (
    <section id="compare" className="py-20 px-6 bg-card/20">
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
            {COMPETITORS.map((comp) => (
              <div
                key={comp.name}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50 transition-all duration-300 hover:bg-card/70 hover:border-border group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm transition-transform duration-300 group-hover:scale-105">
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
            <Card className="bg-primary/5 border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <div className="font-bold text-lg">Mantis</div>
                    <div className="text-sm text-muted-foreground">Unified Security Control</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {MANTIS_FEATURES.map((feature) => (
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
