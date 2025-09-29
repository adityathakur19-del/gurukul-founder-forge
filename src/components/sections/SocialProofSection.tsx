import { Users, BookOpen, ThumbsUp } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-card border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* KPI Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-accent mr-3" />
              <span className="text-3xl lg:text-4xl font-bold text-primary">1500+</span>
            </div>
            <p className="text-muted-foreground font-medium">professionals trained</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-accent mr-3" />
              <span className="text-3xl lg:text-4xl font-bold text-primary">30+</span>
            </div>
            <p className="text-muted-foreground font-medium">battle-tested playbooks</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <ThumbsUp className="w-8 h-8 text-accent mr-3" />
              <span className="text-3xl lg:text-4xl font-bold text-primary">90%</span>
            </div>
            <p className="text-muted-foreground font-medium">would recommend</p>
          </div>
        </div>

        {/* Logo Row */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8 text-sm font-medium uppercase tracking-wide">
            Trusted by professionals from
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg px-6 py-4 text-center">
                <span className="text-lg font-semibold text-muted-foreground">Black Leo Ventures</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg px-6 py-4 text-center">
                <span className="text-lg font-semibold text-muted-foreground">KSUM</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg px-6 py-4 text-center">
                <span className="text-lg font-semibold text-muted-foreground">VCMint</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg px-6 py-4 text-center">
                <span className="text-lg font-semibold text-muted-foreground">ET Press</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;