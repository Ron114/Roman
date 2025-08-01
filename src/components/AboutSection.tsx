import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, Users, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
  
  const highlights = [
    {
      icon: Code,
      title: "Smart Contract Expert",
      description: "5+ years developing secure, gas-optimized smart contracts with 99.9% uptime"
    },
    {
      icon: Award,
      title: "DeFi Architect", 
      description: "Built protocols handling $50M+ TVL across multiple blockchain networks"
    },
    {
      icon: Users,
      title: "Security Focused",
      description: "Zero critical vulnerabilities with comprehensive testing and auditing practices"
    },
    {
      icon: Download,
      title: "Multi-Chain Pioneer",
      description: "Expert in Ethereum, Polygon, Arbitrum, and emerging Layer 2 solutions"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-up ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about revolutionizing financial systems through blockchain technology
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div ref={contentRef} className={`space-y-8 scroll-fade-left ${contentVisible ? 'animate' : ''}`}>
            <p className="text-lg text-foreground/90 leading-relaxed">
              As a Senior Blockchain Developer with over 5 years of experience, I specialize in 
              creating secure, scalable, and innovative Web3 solutions. My expertise spans across 
              smart contract development, DeFi protocols, NFT platforms, and Layer 2 integrations.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              I've had the privilege of working with leading blockchain companies, contributing to 
              protocols that have processed billions in transaction volume. My work focuses on 
              bridging traditional finance with decentralized technologies, creating user-friendly 
              experiences that drive mass adoption.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary" className="text-primary border-primary/20">Solidity</Badge>
              <Badge variant="secondary" className="text-primary border-primary/20">Rust</Badge>
              <Badge variant="secondary" className="text-primary border-primary/20">TypeScript</Badge>
              <Badge variant="secondary" className="text-primary border-primary/20">Web3.js</Badge>
              <Badge variant="secondary" className="text-primary border-primary/20">Hardhat</Badge>
              <Badge variant="secondary" className="text-primary border-primary/20">Foundry</Badge>
            </div>
          </div>
          
          {/* Image Section */}
          <div ref={imageRef} className={`relative scroll-fade-right ${imageVisible ? 'animate' : ''}`}>
            <Card className="glass-card p-1 neon-glow">
              <img 
                src={aboutImage} 
                alt="Blockchain Development Workspace"
                className="w-full h-80 object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-card p-6 group hover:neon-glow transition-all duration-300">
              <div className="mb-4">
                <highlight.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;