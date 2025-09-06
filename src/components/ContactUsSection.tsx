import { Mail, Phone } from "lucide-react";

const ContactUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <a 
            href="mailto:contact@newgengurukul.com"
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>contact@newgengurukul.com</span>
          </a>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a 
              href="tel:+918130995656"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>+91 8130995656</span>
            </a>
            
            <a 
              href="tel:+916366447124"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>+91 6366447124</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;