
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-lg font-medium text-primary animate-fade-in">
              ¡Welcome!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
              Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient">Jean Pierre</span>
            </h1>
            <p className="text-xl text-foreground/80 animate-fade-in-up delay-100">
              A passionate full-stack developer crafting beautiful and functional web experiences
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start animate-fade-in-up delay-200">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto animate-fade-in-up delay-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-[160px] animate-pulse" />
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <div className="w-44 h-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
