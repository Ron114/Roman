import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Hammer, 
  Wrench, 
  Settings, 
  Zap, 
  Shield, 
  Database,
  Globe,
  Cpu,
  Code,
  GitBranch,
  Terminal,
  Layers,
  Key,
  Link,
  FileText,
  Wallet,
  Activity
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { elementRef: toolsRef, visibleItems: toolsVisible } = useStaggeredAnimation(18, 50);
  const { elementRef: specsRef, visibleItems: specsVisible } = useStaggeredAnimation(4, 150);
  const technicalSkills = [
    { name: "Solidity", level: 95, category: "Smart Contracts" },
    { name: "Rust", level: 88, category: "Systems Programming" },
    { name: "TypeScript", level: 92, category: "Web Development" },
    { name: "Python", level: 85, category: "Backend Development" },
    { name: "Go", level: 80, category: "Blockchain Development" }
  ];

  const blockchainSkills = [
    { name: "Ethereum", level: 95 },
    { name: "Polygon", level: 90 },
    { name: "Arbitrum", level: 88 },
    { name: "Optimism", level: 85 },
    { name: "Avalanche", level: 82 },
    { name: "Cosmos", level: 78 }
  ];

  const tools = [
    { name: "Hardhat", icon: Hammer },
    { name: "Foundry", icon: Wrench },
    { name: "Truffle", icon: Settings },
    { name: "Remix", icon: Code },
    { name: "OpenZeppelin", icon: Shield },
    { name: "Chainlink", icon: Link },
    { name: "The Graph", icon: Activity },
    { name: "IPFS", icon: Database },
    { name: "MetaMask", icon: Wallet },
    { name: "WalletConnect", icon: Zap },
    { name: "Ethers.js", icon: Globe },
    { name: "Web3.js", icon: Cpu },
    { name: "Alchemy", icon: Layers },
    { name: "Infura", icon: Terminal },
    { name: "Moralis", icon: FileText },
    { name: "Docker", icon: GitBranch },
    { name: "GitHub Actions", icon: GitBranch },
    { name: "Slither", icon: Key }
  ];

  const specializations = [
    { title: "DeFi Protocols", items: ["AMMs", "Lending", "Yield Farming", "Derivatives", "Staking"] },
    { title: "NFT & Gaming", items: ["ERC-721", "ERC-1155", "Marketplaces", "Gaming Assets", "Royalties"] },
    { title: "Infrastructure", items: ["Oracles", "Cross-chain", "Layer 2", "Scaling", "Governance"] },
    { title: "Security", items: ["Auditing", "Testing", "Formal Verification", "Best Practices", "Risk Assessment"] }
  ];

  return (
    <section className="py-24 px-6 bg-surface-glass/20">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-up ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning the entire blockchain development ecosystem
          </p>
        </div>

        <div ref={skillsRef} className={`grid lg:grid-cols-2 gap-12 mb-16 scroll-fade-up ${skillsVisible ? 'animate' : ''}`}>
          {/* Programming Languages */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Programming Languages</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">{skill.category}</Badge>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <span className="text-sm text-muted-foreground">{skill.level}% Proficiency</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Blockchain Platforms */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Blockchain Platforms</h3>
            <div className="space-y-6">
              {blockchainSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="glass-card p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Tools & Technologies</h3>
          <div ref={toolsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-default scroll-stagger ${toolsVisible[index] ? 'animate' : ''}`}
              >
                <tool.icon className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Specializations */}
        <div ref={specsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <Card key={index} className={`glass-card p-6 hover:neon-glow transition-all duration-300 scroll-stagger ${specsVisible[index] ? 'animate' : ''}`}>
              <h4 className="text-lg font-semibold mb-4 text-primary">{spec.title}</h4>
              <div className="space-y-2">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-muted-foreground">
                    • {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;