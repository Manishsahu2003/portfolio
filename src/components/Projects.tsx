import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Code, Database, Cloud, Bot } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Milk Adulteration Detection IoT',
      description: 'IoT-based system to detect milk adulteration using sensors and machine learning algorithms. Real-time monitoring with data analytics dashboard.',
      techStack: ['IoT', 'Python', 'Machine Learning', 'Streamlit', 'Arduino'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Database,
    },
    {
      title: 'NutriScan – Hackathon Winner',
      description: 'Award-winning nutrition analysis application that scans food items and provides detailed nutritional information using computer vision.',
      techStack: ['Python', 'OpenCV', 'Flask', 'Machine Learning', 'API'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Bot,
    },
    {
      title: 'Cab Fare Prediction Model',
      description: 'Machine learning model to predict cab fares based on various parameters like distance, time, weather conditions, and traffic.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
      githubUrl: 'https://github.com/Manishsahu2003',
      icon: Code,
    },
    {
      title: 'Flask App Deployed on AWS',
      description: 'Full-stack web application deployed on AWS with automated CI/CD pipeline, load balancing, and auto-scaling capabilities.',
      techStack: ['Flask', 'AWS', 'Docker', 'Jenkins', 'EC2', 'RDS'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
    },
    {
      title: 'GenAI Bug Fixing Tool',
      description: 'AI-powered tool that automatically detects and suggests fixes for common programming bugs using generative AI models.',
      techStack: ['Python', 'OpenAI API', 'FastAPI', 'React', 'Docker'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Bot,
    },
    {
      title: 'CI/CD Automation Pipeline',
      description: 'End-to-end CI/CD pipeline using GitHub Actions, Jenkins, and Docker. Automated testing, building, and deployment to AWS EC2.',
      techStack: ['Jenkins', 'Docker', 'GitHub Actions', 'AWS', 'Terraform'],
      githubUrl: 'https://github.com/Manishsahu2003',
      icon: Cloud,
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const IconComponent = project.icon;

    return (
      <div
        className={`relative h-80 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Hover for details
                </span>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg h-full p-6 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={projectsRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;