import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, MapPin, Phone, Clock, Twitter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.rivera@email.com",
      description: "Best way to reach me"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "I respond quickly"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", username: "@alex-rivera" },
    { icon: Linkedin, name: "LinkedIn", url: "#", username: "/in/alex-rivera" },
    { icon: Twitter, name: "Twitter", url: "#", username: "@alex_web3dev" },
    { icon: Mail, name: "Email", url: "#", username: "alex.rivera@email.com" }
  ];

  return (
    <section className="py-24 px-6 bg-surface-glass/20">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-up ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Build the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next blockchain project? I'm always excited to work on 
            innovative Web3 solutions that push the boundaries of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card ref={formRef} className={`glass-card p-8 scroll-fade-left ${formVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-surface-glass/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-surface-glass/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="bg-surface-glass/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Type
                </label>
                <Input 
                  placeholder="DeFi Protocol, NFT Platform, Smart Contract Audit..." 
                  className="bg-surface-glass/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project and how I can help bring your Web3 vision to life..."
                  rows={6}
                  className="bg-surface-glass/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div ref={infoRef} className={`space-y-8 scroll-fade-right ${infoVisible ? 'animate' : ''}`}>
            {/* Contact Information */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-lg text-primary font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="glass" 
                    className="h-auto p-4 flex flex-col items-center space-y-2 hover:neon-glow transition-all duration-300"
                  >
                    <social.icon className="h-6 w-6 text-primary" />
                    <div className="text-center">
                      <div className="font-medium text-foreground">{social.name}</div>
                      <div className="text-xs text-muted-foreground">{social.username}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="glass-card p-6 text-center">
              <div className="inline-flex items-center space-x-2 text-neon-green mb-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="font-semibold">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new blockchain development projects
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;