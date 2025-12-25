import { Twitter, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
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
          {TESTIMONIALS.map((t, i) => (
            <Card
              key={i}
              className="bg-card/50 border-border/50 transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {t.platform === "twitter" ? (
                    <Twitter className="w-4 h-4 text-[#1DA1F2] transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <MessageCircle className="w-4 h-4 text-[#FF4500] transition-transform duration-300 group-hover:scale-110" />
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
