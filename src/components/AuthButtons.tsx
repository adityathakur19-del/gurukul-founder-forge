import { Button } from "@/components/ui/button";
import { LogIn, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const AuthButtons = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="flex items-center space-x-3">
      
      {user ? (
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleAuthAction}
          className="bg-white/90 backdrop-blur-sm border-saffron/20 text-foreground hover:bg-saffron/10 hover:text-foreground transition-all duration-300"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      ) : (
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleAuthAction}
          className="bg-white/90 backdrop-blur-sm border-saffron/20 text-foreground hover:bg-saffron/10 hover:text-foreground transition-all duration-300"
        >
          <Mail className="w-4 h-4 mr-2" />
          Sign In
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;