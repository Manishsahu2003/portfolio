import React, { useEffect, useRef, useState, useMemo } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  GitBranch, 
  Package, 
  Github, 
  Server, 
  Zap,
  Cpu,
  Globe,
  Terminal,
  Settings,
  Monitor,
  HardDrive,
  Network,
  Shield
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
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
        { name: 'Python', icon: Code, color: 'from-yellow-400 to-yellow-600', category: 'Languages' },
        { name: 'SQL', icon: Database, color: 'from-blue-400 to-blue-600', category: 'Languages' },
        { name: 'C++', icon: Code, color: 'from-blue-500 to-blue-700', category: 'Languages' },
        { name: 'C', icon: Code, color: 'from-gray-400 to-gray-600', category: 'Languages' },
        { name: 'HTML', icon: Globe, color: 'from-orange-400 to-orange-600', category: 'Languages' },
        { name: 'CSS', icon: Globe, color: 'from-blue-400 to-blue-600', category: 'Languages' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Docker', icon: Package, color: 'from-blue-400 to-blue-600', category: 'Tools' },
        { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900', category: 'Tools' },
        { name: 'pandas', icon: Database, color: 'from-purple-400 to-purple-600', category: 'Tools' },
        { name: 'Jenkins', icon: Server, color: 'from-red-400 to-red-600', category: 'Tools' },
        { name: 'Streamlit', icon: Monitor, color: 'from-red-400 to-red-600', category: 'Tools' },
        { name: 'NumPy', icon: Cpu, color: 'from-blue-400 to-blue-600', category: 'Tools' },
        { name: 'boto3', icon: Cloud, color: 'from-orange-400 to-orange-600', category: 'Tools' },
        { name: 'Prometheus', icon: Monitor, color: 'from-pink-500 to-yellow-500', category: 'Tools' },
      ],
    },
    {
      title: 'Platforms & DevOps',
      skills: [
        { name: 'Linux', icon: Terminal, color: 'from-yellow-400 to-yellow-600', category: 'Platforms & DevOps' },
        { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-orange-600', category: 'Platforms & DevOps' },
        { name: 'CI/CD', icon: GitBranch, color: 'from-green-400 to-green-600', category: 'Platforms & DevOps' },
        { name: 'IoT', icon: HardDrive, color: 'from-purple-400 to-purple-600', category: 'Platforms & DevOps' },
        { name: 'Kubernetes', icon: Settings, color: 'from-blue-500 to-blue-700', category: 'Platforms & DevOps' },
        { name: 'Ansible', icon: Zap, color: 'from-red-500 to-yellow-500', category: 'Platforms & DevOps' },
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

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const isAnimated = animatedSkills.has(skill.name);
    const IconComponent = skill.icon;
    
    return (
      <div 
        className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform border border-gray-200 dark:border-gray-700 ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
        
        <div className="relative z-10 text-center">
          <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
            {skill.name}
          </h3>
        </div>

        {/* Floating particles */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-700"></div>
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

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 200}ms`,
                }}
              >
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
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