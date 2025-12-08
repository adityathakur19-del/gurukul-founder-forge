import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, CreditCard, CheckCircle, Lock, Award, BookOpen, Users, Zap, BarChart3 } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";

const EvergreenFinalCTASection = () => {
  const timeLeft = useCountdown('2025-12-21T10:00:00+05:30', true);

  const handleReserveSeat = () => {
    window.location.href = 'https://payments.cashfree.com/forms/NEWGENGURUKULFOUNDERWORKSHOP';
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:32px_32px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-saffron/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Top Row – Logo + Micro Trust */}
          <div className="text-center space-y-4">
            <img 
              src="/lovable-uploads/newgen-gurukul-logo.png" 
              alt="NewGen Gurukul - Build Smarter with AI" 
              className="h-16 md:h-20 w-auto mx-auto"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Join the Gurukul of Modern Entrepreneurs
            </h2>
            <p className="text-slate-400 text-lg">
              AI-first business skills for leaders who want execution, not theory.
            </p>
          </div>

          {/* Three Urgency & Offer Boxes */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Box 1 – Timer */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-saffron/50 transition-colors">
              <Clock className="w-8 h-8 text-saffron mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Next Session In</h3>
              <div className="flex justify-center gap-2 text-2xl font-bold text-saffron mb-3">
                <span className="bg-slate-900 px-2 py-1 rounded">{timeLeft.days}d</span>
                <span className="text-slate-500">:</span>
                <span className="bg-slate-900 px-2 py-1 rounded">{timeLeft.hours}h</span>
                <span className="text-slate-500">:</span>
                <span className="bg-slate-900 px-2 py-1 rounded">{timeLeft.minutes}m</span>
                <span className="text-slate-500">:</span>
                <span className="bg-slate-900 px-2 py-1 rounded">{timeLeft.seconds}s</span>
              </div>
              <p className="text-slate-400 text-sm">
                Last Live session of 2025 – don't miss the compounding effect of starting now.
              </p>
            </div>

            {/* Box 2 – Scarcity */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-saffron/50 transition-colors">
              <Target className="w-8 h-8 text-saffron mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Less than 15 Seats Left</h3>
              <p className="text-slate-400 text-sm mt-4">
                Small cohort → more personal feedback, sharper execution.
              </p>
            </div>

            {/* Box 3 – Price + Reserve */}
            <div className="bg-gradient-to-br from-saffron/20 to-deep-saffron/20 backdrop-blur-sm border border-saffron/30 rounded-xl p-6 text-center">
              <CreditCard className="w-8 h-8 text-saffron mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-1">Only ₹999/-</h3>
              <p className="text-slate-400 text-sm mb-4">
                Click below to lock this price.
              </p>
              <Button 
                onClick={handleReserveSeat}
                className="w-full bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white font-semibold py-3"
              >
                Reserve My Seat
              </Button>
            </div>
          </div>

          {/* Big Benefit + FOMO Box */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/80 border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              You Won't Be Guessing – You'll Be{" "}
              <span className="bg-gradient-to-r from-saffron to-deep-saffron bg-clip-text text-transparent">
                Executing.
              </span>
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-lg">
                  Build a clear <span className="text-white font-medium">Strategy → Sales → Marketing → Ops → HR</span> business functions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-lg">
                  Create your next <span className="text-white font-medium">90-day execution plan</span> using AI tools (ChatGPT, Gemini, Notion, etc.)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-lg">
                  Stop consuming random content and finally follow a <span className="text-white font-medium">structured leader's playbook</span>
                </p>
              </div>
            </div>

            <p className="text-center text-xl md:text-2xl font-bold text-white mb-8 border-t border-slate-700 pt-8">
              "The difference between this month and next month's revenue could be the decisions you make in this cohort."
            </p>

            <div className="flex justify-center">
              <Button 
                size="lg"
                onClick={handleReserveSeat}
                className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                Yes, I Want to Join This Cohort
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Secure Payment & Guarantee Strip */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-400 text-sm md:text-base py-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-400" />
              <span>90-Day Plan Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-400" />
              <span>Join the Gurukul of Modern AI Leaders</span>
            </div>
          </div>

          {/* Why Choose NewGen Gurukul? */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
              Why Choose NewGen Gurukul?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-saffron/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-saffron/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      Cardinal Gurukul Wisdom + Modern Startup Tools
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Old-school discipline meets new-age AI – frameworks that actually hold under real-world pressure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-saffron/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-saffron/10 rounded-lg">
                    <Users className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      Practical Learning
                    </h4>
                    <p className="text-slate-400 text-sm">
                      No generic "motivation" – real leaders, real examples, real decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-saffron/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-saffron/10 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      Proven Results with 150+ Founders Mentored
                    </h4>
                    <p className="text-slate-400 text-sm">
                      From idea-stage to scaling, our playbooks have already been battle-tested.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-saffron/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-saffron/10 rounded-lg">
                    <Zap className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      AI Integration for Execution Speed
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Plug AI into your strategy, sales, ops, HR and decision-making so you move faster than your market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <Button 
              variant="outline"
              onClick={handleReserveSeat}
              className="border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold px-8 py-5 text-base"
            >
              Reserve My Seat for ₹999/-
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EvergreenFinalCTASection;
