import React, { useEffect, useRef, useState, useMemo } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', percentage: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'SQL', percentage: 83, color: 'from-blue-400 to-blue-600' },
        { name: 'C++', percentage: 74, color: 'from-blue-500 to-blue-700' },
        { name: 'C', percentage: 70, color: 'from-gray-400 to-gray-600' },
        { name: 'HTML', percentage: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', percentage: 88, color: 'from-blue-400 to-blue-600' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Docker', percentage: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'GitHub', percentage: 88, color: 'from-gray-700 to-gray-900' },
        { name: 'pandas', percentage: 86, color: 'from-purple-400 to-purple-600' },
        { name: 'Jenkins', percentage: 85, color: 'from-red-400 to-red-600' },
        { name: 'Streamlit', percentage: 80, color: 'from-red-400 to-red-600' },
        { name: 'NumPy', percentage: 75, color: 'from-blue-400 to-blue-600' },
      ],
    },
    {
      title: 'Platforms & DevOps',
      skills: [
        { name: 'Linux', percentage: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'AWS', percentage: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'CI/CD', percentage: 80, color: 'from-green-400 to-green-600' },
        { name: 'IoT', percentage: 78, color: 'from-purple-400 to-purple-600' },
      ],
    },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, skill.name]));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skillCategories]);

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill }) => {
    const isAnimated = animatedSkills.has(skill.name);
    
    return (
      <div className="mb-4 group">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {skill.name}
          </span>
          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
            {skill.percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
            style={{
              width: isAnimated ? `${skill.percentage}%` : '0%',
            }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div 
          ref={skillsRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 200}ms`,
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;