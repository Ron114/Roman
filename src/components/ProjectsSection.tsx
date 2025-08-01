import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Eye, TrendingUp, Shield, Coins, Gamepad2 } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: projectsRef, visibleItems: projectsVisible } = useStaggeredAnimation(6, 200);
  const projects = [
    {
      title: "DeFiVault Protocol",
      description: "A yield aggregation protocol that automatically optimizes returns across multiple DeFi platforms. Features auto-compounding, risk assessment, and cross-chain yield farming.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["Solidity", "DeFi", "Yield Farming", "Multi-chain"],
      stats: { tvl: "$12.5M", apy: "18.5%", chains: "3" },
      icon: TrendingUp,
      featured: true
    },
    {
      title: "SecureNFT Marketplace",
      description: "An enterprise-grade NFT marketplace with advanced royalty management, batch operations, and integrated escrow system. Built for high-volume trading.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["ERC-721", "ERC-1155", "IPFS", "React"],
      stats: { volume: "$8.2M", collections: "150+", users: "5K+" },
      icon: Shield,
      featured: true
    },
    {
      title: "MetaToken Launchpad",
      description: "A comprehensive token launch platform with fair launch mechanisms, vesting schedules, and automated liquidity provision. Includes DAO governance features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["ERC-20", "Governance", "Vesting", "AMM"],
      stats: { raised: "$25M", projects: "48", success: "92%" },
      icon: Coins,
      featured: false
    },
    {
      title: "ChainQuest Gaming",
      description: "A play-to-earn RPG game with on-chain assets, skill trees, and guild systems. Features gasless transactions via meta-transactions and Layer 2 scaling.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["Gaming", "P2E", "Layer 2", "Meta-tx"],
      stats: { players: "12K+", items: "50K+", guilds: "200+" },
      icon: Gamepad2,
      featured: false
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-up ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative blockchain solutions that push the boundaries of what's possible in Web3
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glass-card group hover:neon-glow transition-all duration-500 overflow-hidden scroll-scale-up ${projectsVisible[index] ? 'animate' : ''}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <project.icon className="h-8 w-8 text-primary bg-background/20 backdrop-blur-sm rounded-lg p-1.5" />
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-surface-glass/50 rounded-lg">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="neon" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="glass" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;