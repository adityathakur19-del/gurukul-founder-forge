import { Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          
          {/* Left - Brand & Tagline */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/newgen-gurukul-logo.png" 
              alt="NewGen Gurukul Logo" 
              className="h-12 mx-auto md:mx-0 mb-3"
            />
            <p className="text-slate-400 text-sm">
              AI-first Gurukul for modern leaders.
            </p>
          </div>

          {/* Center - Social Media */}
          <div className="text-center">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
              Connect with NewGen Gurukul
            </h4>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.instagram.com/newgengurukul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-pink-400 transition-colors group"
              >
                <div className="p-2.5 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs">Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@NewGenGurukul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors group"
              >
                <div className="p-2.5 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
                <span className="text-xs">YouTube</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/newgen-gurukul/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="p-2.5 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Details */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-2.5">
              <a 
                href="mailto:contact@newgengurukul.com" 
                className="flex items-center justify-center md:justify-end gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contact@newgengurukul.com</span>
              </a>
              <a 
                href="tel:+917892659260" 
                className="flex items-center justify-center md:justify-end gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91-7892659260 / +91-6366447124</span>
              </a>
              <p className="text-slate-500 text-xs mt-2">
                Prefer WhatsApp? Just drop a 'Hi' 👋
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-slate-800 pt-6">
          <p className="text-center text-slate-500 text-xs">
            © 2025 NewGen Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
