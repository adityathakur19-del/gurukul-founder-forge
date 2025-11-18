import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const OptimizedFooterSection = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-background to-muted/20 border-t border-saffron/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/newgen-gurukul-logo.png" 
              alt="NewGen Gurukul" 
              className="h-20 w-auto mx-auto mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build Smarter with AI – Practical tools and frameworks for Indian startup leaders
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Email */}
            <div className="text-center">
              <a 
                href="mailto:contact@newgengurukul.com"
                className="flex items-center justify-center gap-3 text-lg hover:text-saffron transition-colors group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>contact@newgengurukul.com</span>
              </a>
            </div>
            
            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+918130995656"
                className="flex items-center gap-3 text-lg hover:text-saffron transition-colors group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>+91 8130995656</span>
              </a>
              
              <a 
                href="tel:+916366447124"
                className="flex items-center gap-3 text-lg hover:text-saffron transition-colors group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>+91 6366447124</span>
              </a>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="border-t border-saffron/10 pt-8">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground text-sm">
                Follow NewGen Gurukul on LinkedIn and Instagram for weekly updates, AI insights and founder resources.
              </p>
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/company/newgen-gurukul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-saffron transition-colors group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/newgengurukul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-saffron transition-colors group"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-saffron/10">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NewGen Gurukul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OptimizedFooterSection;
