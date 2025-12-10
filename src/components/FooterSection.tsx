import { Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-10">
          
          {/* Left - Brand & Tagline */}
          <div className="text-center sm:text-left">
            <img 
              src="/lovable-uploads/newgen-gurukul-logo.png" 
              alt="NewGen Gurukul Logo" 
              className="h-10 sm:h-12 mx-auto sm:mx-0 mb-2 sm:mb-3"
            />
            <p className="text-slate-400 text-xs sm:text-sm">
              AI-first Gurukul for modern leaders.
            </p>
          </div>

          {/* Center - Social Media */}
          <div className="text-center">
            <h4 className="text-white font-medium mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
              Connect with NewGen Gurukul
            </h4>
            <div className="flex justify-center gap-5 sm:gap-6">
              <a 
                href="https://www.instagram.com/newgengurukul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 sm:gap-1.5 text-slate-400 hover:text-pink-400 transition-colors group"
              >
                <div className="p-2 sm:p-2.5 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs">Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@NewGenGurukul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 sm:gap-1.5 text-slate-400 hover:text-red-500 transition-colors group"
              >
                <div className="p-2 sm:p-2.5 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs">YouTube</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/newgen-gurukul/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 sm:gap-1.5 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="p-2 sm:p-2.5 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Details */}
          <div className="text-center sm:text-left lg:text-right">
            <h4 className="text-white font-medium mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-2 sm:space-y-2.5">
              <a 
                href="mailto:contact@newgengurukul.com" 
                className="flex items-center justify-center sm:justify-start lg:justify-end gap-2 text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">contact@newgengurukul.com</span>
              </a>
              <a 
                href="tel:+917892659260" 
                className="flex items-center justify-center sm:justify-start lg:justify-end gap-2 text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+91-7892659260 / +91-6366447124</span>
              </a>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-1.5 sm:mt-2">
                Prefer WhatsApp? Just drop a 'Hi' 👋
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-slate-800 pt-5 sm:pt-6">
          <p className="text-center text-slate-500 text-[10px] sm:text-xs">
            © 2025 NewGen Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
