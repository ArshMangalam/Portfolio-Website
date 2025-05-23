import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    category: "Data Analysis",
    items: [
      { name: "Data Visualization", level: 80 },
      { name: "Pandas", level: 75 },
      { name: "Tableau", level: 70 },
      { name: "Excel", level: 85 },
      { name: "Power BI", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Figma", level: 70 },
      { name: "Agile Methodologies", level: 75 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career. Here's an overview
            of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                {skillCategory.category}
              </h3>
              <div className="space-y-5">
                {skillCategory.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-purple-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["UI/UX Design", "SEO", "Content Writing", "Machine Learning", "Digital Marketing", 
              "Project Management", "Responsive Design", "Performance Optimization", "WebSockets", 
              "GraphQL", "REST API Design"].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1.5 bg-gray-800 text-purple-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;