import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Aditya Thakur",
      title: "Sales & Strategy Expert",
      experience: "17+ years across sales, consulting, and venture building; worked with 150+ startups.",
      bio: "Aditya brings deep expertise in scaling sales operations and building strategic frameworks that drive real business outcomes. His hands-on approach has helped numerous startups build repeatable revenue engines and sustainable growth strategies.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Vaibhav Jaiswal", 
      title: "Operations & Systems Specialist",
      experience: "12+ years across startups and MNCs; systems and scale specialist.",
      bio: "Vaibhav is passionate about building operational excellence through smart systems and automation. He specializes in helping businesses scale efficiently without the chaos, using proven frameworks and modern tools.",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Meet Your Mentors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from practitioners who've built and scaled real businesses. Get insights from their wins, losses, and everything in between.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border">
              {/* Photo placeholder */}
              <div className="w-24 h-24 bg-muted rounded-full mb-6 mx-auto lg:mx-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name and title */}
              <div className="text-center lg:text-left mb-4">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {mentor.name}
                </h3>
                <p className="text-accent font-semibold mb-3">
                  {mentor.title}
                </p>
                <Badge variant="secondary" className="mb-4">
                  {mentor.experience}
                </Badge>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {mentor.bio}
              </p>

              {/* LinkedIn button */}
              <Button variant="outline" className="w-full lg:w-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          ))}
        </div>

        {/* Certificate note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-accent mr-3" />
            <span className="text-primary font-semibold">Certificate of completion provided</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;