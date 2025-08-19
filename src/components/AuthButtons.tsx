import { Button } from "@/components/ui/button";
import { LogIn, Mail } from "lucide-react";

const AuthButtons = () => {
  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth with Supabase
    console.log('Google sign in clicked');
  };

  const handleEmailSignIn = () => {
    // TODO: Implement email/password auth with Supabase
    console.log('Email sign in clicked');
  };

  return (
    <div className="flex items-center space-x-3">
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleEmailSignIn}
        className="bg-white/90 backdrop-blur-sm border-saffron/20 text-foreground hover:bg-saffron/10 hover:text-foreground transition-all duration-300"
      >
        <Mail className="w-4 h-4 mr-2" />
        Sign In
      </Button>
      
      <Button 
        variant="default"
        size="sm"
        onClick={handleGoogleSignIn}
        className="bg-gradient-to-r from-saffron to-deep-saffron hover:from-deep-saffron hover:to-saffron text-white shadow-warm"
      >
        <LogIn className="w-4 h-4 mr-2" />
        Google
      </Button>
    </div>
  );
};

export default AuthButtons;