import { Quote } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-12 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto text-center group">
        <Quote className="w-8 h-8 text-primary/50 mx-auto mb-4 transition-all duration-500 group-hover:text-primary group-hover:scale-110" />
        <blockquote className="text-xl md:text-2xl font-medium mb-4">
          &ldquo;Finally, one command to see my entire security stack. No more juggling 5 different apps.&rdquo;
        </blockquote>
        <cite className="text-muted-foreground">
          — Security Engineer, Fortune 500
        </cite>
      </div>
    </section>
  );
}
