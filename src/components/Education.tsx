import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses?: string[];
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2020 - 2022",
    description: "Specialized in artificial intelligence and machine learning, with a focus on natural language processing and computer vision applications.",
    courses: [
      "Advanced Machine Learning",
      "Deep Learning for Computer Vision",
      "Natural Language Processing",
      "Distributed Systems",
      "Database Management Systems"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2016 - 2020",
    description: "Graduated with honors. Developed strong foundations in programming, algorithms, and data structures while gaining practical experience through internships and research projects.",
    courses: [
      "Data Structures and Algorithms",
      "Computer Architecture",
      "Operating Systems",
      "Web Development",
      "Mobile Application Development"
    ]
  },
  {
    id: 3,
    degree: "Professional Certification in Data Science",
    institution: "Harvard University",
    location: "Online",
    period: "2019",
    description: "Intensive program covering statistical concepts, data visualization, and machine learning techniques with practical applications.",
    courses: [
      "Statistical Analysis",
      "Data Visualization",
      "Machine Learning",
      "Big Data Analytics",
      "Practical Python for Data Science"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-purple-500">Education</span> & Training
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational qualifications that have shaped my knowledge and expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-500/30"></div>
          
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-purple-500"></div>
                
                <div className={`flex flex-col md:grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:grid-flow-dense' : ''
                }`}>
                  <div className={`p-6 bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-purple-500/10 ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}>
                    <div className="flex items-center mb-4">
                      <GraduationCap className="h-6 w-6 text-purple-500 mr-2" />
                      <h3 className="text-xl font-bold">{education.degree}</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <div className="w-6 mr-2 flex justify-center">
                          <MapPin className="h-4 w-4 text-purple-400" />
                        </div>
                        <span>{education.institution}, {education.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-6 mr-2 flex justify-center">
                          <Calendar className="h-4 w-4 text-purple-400" />
                        </div>
                        <span>{education.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{education.description}</p>
                    {education.courses && (
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Key Courses:</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {education.courses.map((course, idx) => (
                            <li key={idx}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Empty column for timeline layout */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300">
            In addition to formal education, I'm committed to lifelong learning through online courses, 
            workshops, and industry conferences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;