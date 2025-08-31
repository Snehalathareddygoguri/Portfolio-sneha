import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, Code, Database, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'JDBC', 'MySQL Workbench', 'SQL', 'Java Server Pages','Java'
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-8 card-hover bg-gradient-card border-primary/10 shadow-card">
            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className="p-4 bg-primary/10 rounded-xl">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                {/* Title + Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Software Development Intern</h3>
                    <p className="text-xl text-primary font-semibold">Path Creators Pvt Ltd.</p>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>4 weeks</span>
                  </div>
                </div>

                {/* Project Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-6"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    Project: City Information Management and Search System
                    <a 
                      href="https://github.com/Snehalathareddygoguri/City-Information-Management-and-Search-System" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-3 inline-flex items-center text-primary hover:underline"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span className="hidden sm:inline">View Code</span>
                    </a>
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    <strong>A City Information and Searching System (Website)</strong>
                  </p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Developed a comprehensive digital platform that provides users with real-time information on climatic conditions, population statistics, and other essential regional data. The platform integrates multiple data sources and offers a user-friendly interface to support informed decision-making for travelers, researchers, urban planners, and policymakers. Features include interactive maps, climate trend visualizations, demographic insights, and location-specific analytics.
                  </p>
                </motion.div>

                {/* Contributions */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-6"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-primary" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Integrated real-time climate and population data from multiple reliable sources into a centralized digital platform.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Designed an intuitive user interface to enhance accessibility and usability for diverse user groups.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Developed interactive maps and visualizations to present climate trends and demographic insights effectively.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Enabled data-driven decision-making for travelers, researchers, urban planners, and policymakers through location-specific analytics.</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Tech Stack */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
