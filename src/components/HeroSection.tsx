import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import heroBackground from "@/assets/hero-background.jpg";
import avatarImage from "@/assets/avatar.png";
import TextType from "@/animation/TextStyle";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-neon-purple rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse delay-500" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-6">
          {/* Avatar */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="neon-avatar animate-glow">
              <Avatar className="w-32 h-32 md:w-40 md:h-40">
                <AvatarImage src={avatarImage} alt="Roman" className="object-cover" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">AR</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <TextType
            text={["This is Roman!"]}
            typingSpeed={95}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-slide-up font-display"
          />
          <br />
          <TextType
            text={["Senior Blockchain Developer"]}
            typingSpeed={95}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up delay-150"
          />
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up delay-300">
            Architecting the future of finance with smart contracts, DeFi protocols,
            and cutting-edge Web3 applications. Specializing in Ethereum, Layer 2 solutions,
            and multi-chain ecosystems.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;