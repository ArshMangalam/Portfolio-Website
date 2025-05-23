import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  url: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "March 2023",
    description: "Comprehensive course covering modern full-stack web development with React, Node.js, and MongoDB.",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/certificate1",
  },
  {
    id: 2,
    name: "Data Science & Machine Learning",
    issuer: "Coursera",
    date: "January 2023",
    description: "In-depth training on statistical analysis, data visualization, and machine learning algorithms.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/certificate2",
  },
  {
    id: 3,
    name: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "November 2022",
    description: "Professional certificate covering user interface design principles, wireframing, and prototyping.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/certificate3",
  },
  {
    id: 4,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "September 2022",
    description: "Foundation in AWS cloud services, security, architecture, and pricing models.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/certificate4",
  },
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-purple-500">Certificates</span> & Credentials
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm committed to continuous learning and professional development. Here are some of 
            the certifications I've earned to expand my skill set.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
            >
              <div className="relative h-48">
                <img 
                  src={certificate.image} 
                  alt={certificate.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{certificate.name}</h3>
                  <span className="text-sm text-gray-400">{certificate.date}</span>
                </div>
                <p className="text-purple-400 mb-3">Issued by {certificate.issuer}</p>
                <p className="text-gray-300 mb-4">{certificate.description}</p>
              </div>
              <div className="p-4 border-t border-gray-700">
                <a 
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;