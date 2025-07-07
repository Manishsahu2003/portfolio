import React, { useEffect, useRef, useState } from 'react';
import { Gamepad2, Plane, Cpu, Zap } from 'lucide-react';

interface Hobby {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const Hobbies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hobbiesRef = useRef<HTMLDivElement>(null);

  const hobbies: Hobby[] = [
    {
      name: 'Playing Cricket',
      description: 'Passionate about cricket, love playing with friends and following international matches. Great for teamwork and strategy.',
      icon: Gamepad2,
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Traveling',
      description: 'Exploring new places and cultures. Travel helps me gain new perspectives and inspiration for my work.',
      icon: Plane,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Exploring New Tech',
      description: 'Always curious about the latest technology trends, frameworks, and tools. Continuous learning is my passion.',
      icon: Cpu,
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Quick Projects',
      description: 'Building small projects and prototypes to experiment with new ideas and technologies in my free time.',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (hobbiesRef.current) {
      observer.observe(hobbiesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={hobbiesRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              When I'm Not Coding
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <div
                  key={hobby.name}
                  className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border border-gray-700/50 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${hobby.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white animate-bounce" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-3 text-gray-100 group-hover:text-white transition-colors duration-300">
                      {hobby.name}
                    </h3>
                    
                    <p className="text-sm text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {hobby.description}
                    </p>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full animate-ping delay-700"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-gray-300">Life is about balance</span>
              <span className="text-2xl">⚖️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;