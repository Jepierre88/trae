"use client"
import { useEffect, useState } from 'react';
import Scene3D from './Scene3D';

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detectar el modo actual
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Observar cambios en el tema
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Observar cambios en las preferencias del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
      <div 
        className="absolute inset-0 backdrop-blur-[0.5px] transition-all duration-500"
        style={{
          backgroundColor: isDarkMode 
            ? 'rgba(10, 10, 10, 0.6)' 
            : 'rgba(0, 0, 0, 0.7)'
        }}
      />
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-lg font-medium text-primary animate-fade-in">
              ¡Welcome!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up text-white">
              Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient">Jean Pierre</span>
            </h1>
            <p className="text-xl text-white/90 animate-fade-in-up delay-100">
              A{" "}
              <span className="font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-start), var(--color-middle), var(--color-end))',
                  backgroundSize: '200% auto',
                  animation: 'var(--animate-gradient)',
                }}>

                1 year experienced
              </span>{" "}
              full-stack developer crafting beautiful and functional web experiences
            </p>


          </div>
          <div className="flex gap-4 justify-center md:justify-start animate-fade-in-up delay-200">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25 backdrop-blur-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto animate-fade-in-up delay-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-[160px] animate-pulse" />
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <div className="w-44 h-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
