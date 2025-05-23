import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: 'trophy' | 'star' | 'award' | 'medal';
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Hackathon Winner",
    description: "First place in the Regional Web Development Hackathon for creating an innovative accessibility solution.",
    year: "2023",
    icon: 'trophy',
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Recognized as a top contributor to React ecosystem with over 50 accepted pull requests.",
    year: "2022",
    icon: 'star',
  },
  {
    id: 3,
    title: "Best Mobile App Design",
    description: "Awarded for exceptional UI/UX design in the Annual Tech Innovation Showcase.",
    year: "2022",
    icon: 'award',
  },
  {
    id: 4,
    title: "Data Science Competition",
    description: "Second place in Kaggle competition for predictive analytics model with 97% accuracy.",
    year: "2021",
    icon: 'medal',
  },
];

const Achievements: React.FC = () => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="h-10 w-10 text-yellow-400" />;
      case 'star':
        return <Star className="h-10 w-10 text-yellow-400" />;
      case 'award':
        return <Award className="h-10 w-10 text-yellow-400" />;
      case 'medal':
        return <Medal className="h-10 w-10 text-yellow-400" />;
      default:
        return <Trophy className="h-10 w-10 text-yellow-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-purple-500">Achievements</span> & Awards
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognitions and achievements that highlight my dedication and excellence in the field.
          </p>
        </motion.div>

        <div className="space-y-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 hover:border-purple-500/30 hover:shadow-purple-500/10 ${
                index % 2 === 0 ? 'md:ml-0 md:mr-12' : 'md:ml-12 md:mr-0'
              }`}
            >
              <div className="flex-shrink-0 p-4 bg-gray-800 rounded-full border border-gray-700">
                {renderIcon(achievement.icon)}
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <span className="text-sm text-purple-400 mt-1 md:mt-0">{achievement.year}</span>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-purple-400 italic">
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;