import { Card, CardContent } from "@/components/ui/card";
import { FEATURES, COMMAND_DEMOS } from "@/lib/constants";

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
    <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
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
    <div className="terminal transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
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

export function FeaturesSection() {
  return (
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
          {FEATURES.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {COMMAND_DEMOS.map((demo) => (
            <CommandDemo
              key={demo.command}
              command={demo.command}
              output={demo.output}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
