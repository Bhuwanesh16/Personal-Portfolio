"use client"
import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Camera, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants for elements
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  const [tab, setTab] = useState('bio');
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileTabsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          className="flex flex-col items-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-full">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 hidden sm:block"></div>
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="relative rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              {[Github, Linkedin, Mail, Camera].map((Icon, i) => (
                <motion.button
                  key={i}
                  className="p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={isMobile ? 16 : 20} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Mobile Tabs */}
            <div className="md:hidden relative mb-6">
              <button
                onClick={() => setMobileTabsOpen(!mobileTabsOpen)}
                className="w-full flex items-center justify-between bg-white p-3 rounded-lg border shadow-sm"
              >
                <span className="font-medium">
                  {tab === 'bio' ? 'Biography' : tab === 'skills' ? 'Skills' : 'Experience'}
                </span>
                {mobileTabsOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              {mobileTabsOpen && (
                <motion.div
                  className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {['bio', 'skills', 'experience'].map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTab(t);
                        setMobileTabsOpen(false);
                      }}
                      className="w-full text-left p-3 hover:bg-gray-50 border-b last:border-b-0"
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block mb-6">
              <div className="flex border-b overflow-x-auto">
                {['bio', 'skills', 'experience'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 font-medium whitespace-nowrap ${tab === t
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {tab === 'bio' && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  I'm a passionate developer focused on crafting clean, user-centered digital experiences.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  My goal is to blend aesthetic design with efficient code to create engaging applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <motion.button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Download Resume
                  </motion.button>
                 
                </div>
              </motion.div>
            )}

            {tab === 'skills' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Skills bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { name: 'React', percent: 90 },
                    { name: 'JavaScript', percent: 85 },
                    { name: 'UI/UX Design', percent: 75 },
                    { name: 'Node.js', percent: 80 }
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{skill.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Technologies I work with:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Figma'].map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'experience' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  {
                    title: 'Senior Developer',
                    company: 'Tech Company',
                    period: '2022 - Present',
                    description: 'Led development team in creating responsive web applications with React and Node.js.',
                    active: true
                  },
                  {
                    title: 'Frontend Developer',
                    company: 'Creative Agency',
                    period: '2019 - 2022',
                    description: 'Developed UI components and implemented responsive designs for client websites.',
                    active: false
                  },
                  {
                    title: 'Web Designer',
                    company: 'Design Studio',
                    period: '2017 - 2019',
                    description: 'Created wireframes and visual designs for websites and mobile applications.',
                    active: false
                  }
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    className={`relative pl-4 sm:pl-6 border-l-2 ${exp.active ? 'border-blue-500' : 'border-gray-300'}`}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`absolute top-0 -left-2.5 w-5 h-5 ${exp.active ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`}></div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-xs sm:text-base text-gray-700">{exp.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

       
       
      </div>
    </section>
  );
}
