import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  type: 'certification' | 'achievement';
}

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const achievements: Achievement[] = [
    {
      title: 'AWS Cloud Practitioner',
      description: 'Certified AWS Cloud Practitioner with comprehensive knowledge of cloud computing fundamentals and AWS services.',
      icon: Award,
      color: 'from-orange-400 to-red-500',
      type: 'certification',
    },
    {
      title: 'SQL Certification',
      description: 'Advanced SQL certification demonstrating expertise in database management and complex query optimization.',
      icon: Award,
      color: 'from-blue-400 to-blue-600',
      type: 'certification',
    },
    {
      title: 'GenAI by GDG',
      description: 'Specialized certification in Generative AI technologies and implementation strategies from Google Developer Group.',
      icon: Award,
      color: 'from-purple-400 to-purple-600',
      type: 'certification',
    },
    {
      title: 'Hackathon Participation',
      description: 'Active participant in multiple hackathons, contributing to innovative solutions and collaborative development.',
      icon: Trophy,
      color: 'from-green-400 to-green-600',
      type: 'certification',
    },
    {
      title: 'Winner – CodeFiest 3.0',
      description: 'First place winner at CodeFiest 3.0 competition, demonstrating exceptional coding skills and problem-solving abilities.',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600',
      type: 'achievement',
    },
    {
      title: 'Winner – HackITSpapiens',
      description: 'Champion at HackITSpapiens hackathon, developing innovative solutions within tight deadlines.',
      icon: Trophy,
      color: 'from-purple-400 to-pink-500',
      type: 'achievement',
    },
    {
      title: 'Group Decision Winner',
      description: 'Excellence in team collaboration and decision-making in competitive group challenges.',
      icon: Users,
      color: 'from-blue-400 to-indigo-500',
      type: 'achievement',
    },
    {
      title: 'Runner-up – SPSU Ideathon',
      description: 'Second place at SPSU Ideathon, showcasing innovative ideas and implementation strategies.',
      icon: Star,
      color: 'from-indigo-400 to-purple-500',
      type: 'achievement',
    },
    {
      title: 'Gold Medalist',
      description: 'Achieved gold medal recognition for outstanding academic and project performance.',
      icon: Award,
      color: 'from-yellow-400 to-orange-500',
      type: 'achievement',
    },
    {
      title: 'AWS Cloud Lead',
      description: 'Leadership role in AWS Cloud initiatives, mentoring teams and driving cloud adoption strategies.',
      icon: Users,
      color: 'from-orange-400 to-red-500',
      type: 'achievement',
    },
    {
      title: 'Social Media Lead at CII',
      description: 'Led social media initiatives at Confederation of Indian Industry, managing digital presence and engagement.',
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
      type: 'achievement',
    },
  ];

  const itemsPerSlide = 4;
  const maxSlides = Math.ceil(achievements.length / itemsPerSlide);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return achievements.slice(startIndex, startIndex + itemsPerSlide);
  };

  const certifications = achievements.filter(item => item.type === 'certification');
  const achievementsList = achievements.filter(item => item.type === 'achievement');

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div 
          ref={achievementsRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>

          {/* Certifications Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border-2 border-transparent hover:border-gradient-to-r ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-200">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {cert.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Achievements
            </h3>
            
            <div className="relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {getCurrentSlideItems().map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={achievement.title}
                      className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-200">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        {achievement.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: maxSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? 'bg-blue-600 scale-125'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;