import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show floating CTA after scrolling past first screen
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-cta animate-slide-in-right">
      <Button 
        size="lg"
        className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white px-6 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
      >
        <CheckCircle className="w-5 h-5 mr-2" />
        Reserve My Seat
      </Button>
    </div>
  );
};

export default FloatingCTA;