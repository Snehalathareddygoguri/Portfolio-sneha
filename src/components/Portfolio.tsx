import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "DSAS Framework",
      description: "A Secure Data Sharing and Authorized Searchable Framework",
      longDescription: "Built a comprehensive real-time secure data-sharing framework with authorized search functionality. Implemented robust security protocols for data protection while maintaining efficient search capabilities for authorized users.",
      technologies: ["HTML", "CSS", "JavaScript", "JSP", "MySQL"],
      category: "Web Application",
      featured: true,
      github: "https://github.com/Snehalathareddygoguri/City-Information-Management-and-Search-System",
      demo: "https://github.com/Snehalathareddygoguri/City-Information-Management-and-Search-System/tree/main/Document"
    },
    {
      title: "Fake Profile Detection (ANN)",
      description: "Machine learning project using ANN to detect fake profiles",
      longDescription: "Developed an advanced artificial neural network system to identify and classify fake social media profiles with high accuracy. Implemented sophisticated pattern recognition algorithms to analyze user behavior and profile characteristics.",
      technologies: ["Django", "TensorFlow", "Pandas", "Scikit-learn", "Python"],
      category: "Machine Learning",
      featured: true,
      github:"https://github.com/Snehalathareddygoguri/FakeProfileIdentification-ANN",
      demo:"https://github.com/Snehalathareddygoguri/FakeProfileIdentification-ANN/tree/main/Use%20of%20Artificial%20Neural%20Networks%20to%20Identify%20FakeProfiles/Use%20of%20Artificial%20Neural%20Networks%20to%20Identify%20Fake%20Profiles%20DOCUMENT"
    },
    {
      title: "Global CO₂ Emission Prediction",
      description: "Predictive analytics using ML models for emission forecasting",
      longDescription: "Created a comprehensive machine learning system to predict global CO₂ emissions using historical data and environmental factors. Implemented multiple ML algorithms to provide accurate long-term emission forecasts.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
      category: "Data Science",
      featured: false,
      github:"https://github.com/Snehalathareddygoguri/Global-Co2-Emission-Prediction",
      demo:"https://github.com/Snehalathareddygoguri/Global-Co2-Emission-Prediction/tree/main/15-co2%20emission%20by%20companies/Co2-emission-docs"
    },
    {
      title: "CropStock",
      description: "A marketplace web app for farmers to sell goods directly",
      longDescription: "Developed a comprehensive e-commerce platform connecting farmers directly with consumers. Features include product listings, secure payments, inventory management, and real-time order tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "E-commerce",
      featured: false,
      github:"https://github.com/Snehalathareddygoguri/CropStock",
      demo:"https://github.com/Snehalathareddygoguri/CropStock"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my projects demonstrating expertise in web development, machine learning, and data science
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group card-hover bg-gradient-card border-primary/10 overflow-hidden">
                  <div className="h-48 bg-gradient-hero relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group card-hover bg-gradient-card border-primary/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-8 bg-gradient-hero text-white border-0 shadow-glow">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can work together on your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href='https://github.com/Snehalathareddygoguri?tab=repositories' target='_blank' rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
