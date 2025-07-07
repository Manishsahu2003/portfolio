import React, { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Database, Cpu, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const aboutRef = useRef<HTMLDivElement>(null);

  const highlights = [
    { icon: Code, text: 'DevOps Engineer', color: 'from-blue-500 to-cyan-500' },
    { icon: Cloud, text: 'AWS Specialist', color: 'from-orange-500 to-red-500' },
    { icon: Database, text: 'AI/ML Enthusiast', color: 'from-purple-500 to-pink-500' },
    { icon: Cpu, text: 'Automation Expert', color: 'from-green-500 to-emerald-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate elements with staggered delays
          setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'title'])), 200);
          setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'content'])), 600);
          setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'highlights'])), 1000);
          setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'stats'])), 1400);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={aboutRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated Title */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              animatedElements.has('title') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              animatedElements.has('title') ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>

          {/* Main Content with Floating Animation */}
          <div className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl mb-12 transition-all duration-1000 ${
            animatedElements.has('content') ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-1'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="relative">
                  <Target className="absolute -top-2 -left-2 w-6 h-6 text-blue-500 animate-spin" />
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    I'm <span className="font-semibold text-blue-600 dark:text-blue-400 animate-pulse">Manish Sahu</span>, a B.Tech Computer Science student based in Udaipur with a strong passion for{' '}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">DevOps, Cloud Computing, and AI/ML</span>. 
                  </p>
                </div>
                
                <div className="relative">
                  <Zap className="absolute -top-2 -left-2 w-6 h-6 text-yellow-500 animate-bounce" />
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    I specialize in deploying scalable applications using{' '}
                    <span className="font-semibold text-orange-600 dark:text-orange-400">AWS services</span> and automating workflows with tools like{' '}
                    <span className="font-semibold text-green-600 dark:text-green-400">Jenkins, Docker, and GitHub Actions</span>.
                  </p>
                </div>

                <div className="relative">
                  <Cpu className="absolute -top-2 -left-2 w-6 h-6 text-purple-500 animate-pulse" />
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    I have hands-on experience working with{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Linux environments</span>, writing efficient{' '}
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">Python scripts</span>, and building interactive dashboards using{' '}
                    <span className="font-semibold text-red-600 dark:text-red-400">pandas and Streamlit</span>.
                  </p>
                </div>
              </div>

              {/* Animated Profile Stats */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 animate-pulse">4+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 animate-pulse">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 animate-pulse">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Highlights */}
          <div className={`transition-all duration-1000 delay-500 ${
            animatedElements.has('highlights') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={highlight.text}
                    className={`group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 transform cursor-pointer ${
                      animatedElements.has('highlights') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 1000}ms` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {highlight.text}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission Statement with Typewriter Effect */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            animatedElements.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 animate-pulse">My Mission</h3>
                <p className="text-lg leading-relaxed">
                  "To bridge the gap between development and operations by delivering reliable, 
                  production-ready solutions with speed and precision."
                </p>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-500"></div>
              <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;