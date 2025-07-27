import React, { useEffect, useRef, useState } from 'react';
import { Github, Code, Database, Cloud, Bot, Package, MessageCircle, Mail, Phone, Instagram } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
  domain: string; // NEW
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Hand Gesture-Controlled AWS Instance Management',
      description: 'Innovative system that uses hand gestures to control AWS EC2 instances. Python application with OpenCV for gesture recognition and Boto3 for AWS integration. Users can launch or stop instances using simple hand movements, demonstrating advanced automation and human-computer interaction.',
      techStack: ['Python', 'OpenCV', 'Boto3', 'AWS EC2', 'Gesture Recognition', 'Computer Vision'],
      githubUrl: 'https://github.com/Manishsahu2003',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'AWS EC2 Automation via API Gateway & Lambda',
      description: 'Built a serverless automation pipeline where AWS API Gateway receives HTTP requests and triggers a Lambda function (Python + boto3) to launch EC2 instances in real time. Demonstrates event-driven, scalable cloud infrastructure using serverless AWS components.',
      techStack: ['AWS Lambda', 'API Gateway', 'Python', 'boto3', 'EC2', 'Serverless'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'Flask App CI/CD with Docker, Jenkins & Kubernetes',
      description: 'Developed a Flask-based Python application, containerized it with Docker, and implemented a robust CI/CD pipeline using GitHub, Jenkins, Docker Hub, and Kubernetes. Automated build, test, and deployment workflows, with Kubernetes managing scalable deployments and service exposure on Port 5000.',
      techStack: ['Python', 'Flask', 'Docker', 'Jenkins', 'Docker Hub', 'Kubernetes', 'GitHub'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'EC2 Instance Manager',
      description: 'Flask API application for launching and managing AWS EC2 instances using Python boto3 library. Features instance creation, monitoring, and automated scaling.',
      techStack: ['Python', 'Flask', 'boto3', 'AWS EC2', 'REST API'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'CI/CD Automation Pipeline',
      description: 'End-to-end CI/CD pipeline using GitHub Actions, Jenkins, and Docker. Automated testing, building, and deployment to AWS EC2.',
      techStack: ['Jenkins', 'Docker', 'GitHub Actions', 'AWS', 'Terraform'],
      githubUrl: 'https://github.com/Manishsahu2003',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'Flask App Deployed on AWS',
      description: 'Full-stack web application deployed on AWS with automated CI/CD pipeline, load balancing, and auto-scaling capabilities.',
      techStack: ['Flask', 'AWS', 'Docker', 'Jenkins', 'EC2', 'RDS'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'GenAI Bug Fixing Tool',
      description: 'AI-powered tool that automatically detects and suggests fixes for common programming bugs using generative AI models.',
      techStack: ['Python', 'OpenAI API', 'FastAPI', 'React', 'Docker'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Bot,
      domain: 'AI/ML & Data Science',
    },
    {
      title: 'GenAI AWS Expert Advisor',
      description: 'Developed an AWS Expert Advisor using OpenAI and Gemini APIs. The system performs AWS web scraping and leverages GenAI to provide expert recommendations and insights for AWS users.',
      techStack: ['OpenAI API', 'Gemini', 'Python', 'Web Scraping', 'AWS', 'GenAI'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Bot,
      domain: 'AI/ML & Data Science',
    },
    {
      title: 'Cab Fare Prediction Model',
      description: 'Machine learning model to predict cab fares based on various parameters like distance, time, weather conditions, and traffic.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
      githubUrl: 'https://github.com/Manishsahu2003',
      icon: Code,
      domain: 'AI/ML & Data Science',
    },
    {
      title: 'NutriScan – Hackathon Winner',
      description: 'Award-winning nutrition analysis application that scans food items and provides detailed nutritional information using computer vision.',
      techStack: ['Python', 'OpenCV', 'Flask', 'Machine Learning', 'API'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Bot,
      domain: 'IoT & Automation',
    },
    {
      title: 'Milk Adulteration Detection IoT',
      description: 'IoT-based system to detect milk adulteration using sensors and machine learning algorithms. Real-time monitoring with data analytics dashboard.',
      techStack: ['IoT', 'Python', 'Machine Learning', 'Streamlit', 'Arduino'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Database,
      domain: 'IoT & Automation',
    },
    {
      title: 'Multicontainer Microservices for Flask App',
      description: 'Designed and implemented a microservices architecture using Docker Compose. The system includes separate Flask-based User Registration and User Details services, each running in its own container, with Postgres and Redis as backend services. All containers communicate over a Docker network, demonstrating scalable, modular DevOps practices.',
      techStack: ['Flask', 'Docker', 'Docker Compose', 'Microservices', 'Postgres', 'Redis'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
    {
      title: 'Event-Driven Architecture on AWS',
      description: 'Implemented an event-driven architecture using AWS services. File uploads to an S3 bucket trigger Lambda functions, which process the event and invoke AWS SNS to send notifications. This project demonstrates automation, real-time processing, and scalable cloud-native design.',
      techStack: ['AWS S3', 'AWS Lambda', 'AWS SNS', 'Event-Driven', 'Automation'],
      githubUrl: 'https://github.com/Manishsahu2003',
      liveUrl: '#',
      icon: Cloud,
      domain: 'Cloud & DevOps',
    },
  ];

  // Group projects by domain
  const domainOrder = ['Cloud & DevOps', 'AI/ML & Data Science', 'IoT & Automation'];
  const projectsByDomain: { [domain: string]: Project[] } = {};
  projects.forEach((project) => {
    if (!projectsByDomain[project.domain]) projectsByDomain[project.domain] = [];
    projectsByDomain[project.domain].push(project);
  });

  const minorProjects = {
    docker: [
      {
        title: 'Docker Process Management',
        description: 'Containerized application deployment and process management using Docker. Includes multi-stage builds and container orchestration.',
        techStack: ['Docker', 'Docker Compose', 'Containerization', 'Process Management'],
        githubUrl: 'https://github.com/Manishsahu2003',
        icon: Package,
        domain: 'DevOps & Containerization',
      },
      {
        title: 'Firefox Setup in Docker',
        description: 'Containerized Firefox browser setup with custom configurations and extensions for automated testing and development environments.',
        techStack: ['Docker', 'Firefox', 'Browser Automation', 'Containerization'],
        githubUrl: 'https://github.com/Manishsahu2003',
        icon: Package,
        domain: 'DevOps & Containerization',
      },
    ],
    python: [
      {
        title: 'WhatsApp Message Automation',
        description: 'Python script to send automated WhatsApp messages using web APIs and selenium for business communication and notifications.',
        techStack: ['Python', 'Selenium', 'WhatsApp API', 'Automation'],
        githubUrl: 'https://github.com/Manishsahu2003',
        icon: MessageCircle,
        domain: 'Automation & Scripting',
      },
      {
        title: 'Email Automation System',
        description: 'Automated email sending system with templates, scheduling, and bulk email capabilities for marketing and notifications.',
        techStack: ['Python', 'SMTP', 'Email Templates', 'Automation'],
        githubUrl: 'https://github.com/Manishsahu2003',
        icon: Mail,
        domain: 'Automation & Scripting',
      },
      {
        title: 'Phone Call Automation',
        description: 'Automated phone calling system using Python with voice synthesis and call management for customer service automation.',
        techStack: ['Python', 'Twilio', 'Voice API', 'Call Automation'],
        githubUrl: 'https://github.com/Manishsahu2003',
        icon: Phone,
        domain: 'Automation & Scripting',
      },
      {
        title: 'Instagram Post Automation',
        description: 'Automated Instagram posting system with image processing, caption generation, and scheduled posting capabilities.',
        techStack: ['Python', 'Instagram API', 'Image Processing', 'Social Media Automation'],
        githubUrl: 'https://github.com/Manishsahu2003',
        icon: Instagram,
        domain: 'Automation & Scripting',
      },
    ],
  };

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
              
              <div className="flex justify-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MinorProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const IconComponent = project.icon;

    return (
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 dark:border-gray-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h4>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 2).map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
              +{project.techStack.length - 2} more
            </span>
          )}
        </div>
        
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
        >
          <Github className="w-4 h-4" />
          View Code
        </a>
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

          {/* Domain-wise Project Sections */}
          {domainOrder.map((domain) => (
            projectsByDomain[domain] && projectsByDomain[domain].length > 0 && (
              <div key={domain} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-left md:text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {domain}
                </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsByDomain[domain].map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
              </div>
            )
          ))}

          {/* Minor Projects Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Minor Projects
              </span>
            </h3>

            {/* Docker Subsection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Docker Projects
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {minorProjects.docker.map((project, index) => (
                  <MinorProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>

            {/* Python Subsection */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Python Automation Projects
                </h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {minorProjects.python.map((project, index) => (
                  <MinorProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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