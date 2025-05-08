import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/animations.css';

export default function Hero() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  // State for mouse position tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // State for controlling the typing animation
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Text to cycle through in the typing animation
  const textArray = [
    "Web Developer",
    "UI/UX Designer",
    "Creative Thinker",
    "Problem Solver"
  ];
  
  // Parallax effect for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Text typing animation effect
  useEffect(() => {
    const text = textArray[currentTextIndex];
    
    const typeWriter = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(text.substring(0, typedText.length - 1));
        setTypingSpeed(50); // Faster when deleting
        
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
          setTypingSpeed(150);
        }
      } else {
        // Typing text
        setTypedText(text.substring(0, typedText.length + 1));
        
        if (typedText === text) {
          // Pause at the end of a complete word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };
    
    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, typingSpeed, textArray]);
  
  // Animation for the floating shapes
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 0.01);
    }, 10);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300" id="home">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-gray-900 dark:to-gray-800 z-0 transition-colors duration-300"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-10 opacity-60">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white dark:bg-gray-300 opacity-20 transition-colors duration-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              transform: `translateX(${Math.sin(time + index) * 10}px) translateY(${Math.cos(time + index) * 10}px)`,
              transition: 'transform 2s ease-in-out',
            }}
          />
        ))}
      </div>
      
      {/* Interactive floating shapes */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute w-64 h-64 rounded-full bg-blue-400 dark:bg-blue-900 opacity-10 blur-xl transition-colors duration-300"
          style={{
            left: `${10 + mousePosition.x * 5}%`,
            top: `${10 + mousePosition.y * 5}%`,
            transform: 'scale(1.5)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-indigo-500 dark:bg-indigo-900 opacity-10 blur-xl transition-colors duration-300"
          style={{
            right: `${20 + mousePosition.x * -5}%`,
            bottom: `${20 + mousePosition.y * -5}%`,
            transform: 'scale(2)',
            transition: 'right 0.3s ease-out, bottom 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-56 h-56 rounded-full bg-purple-400 dark:bg-purple-900 opacity-10 blur-xl transition-colors duration-300"
          style={{
            right: `${30 + mousePosition.x * 8}%`,
            top: `${30 + mousePosition.y * 8}%`,
            transform: 'scale(1.8)',
            transition: 'right 0.3s ease-out, top 0.3s ease-out'
          }}
        />
      </div>
      
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 z-20"
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: `${mousePosition.x * 10}px ${mousePosition.y * 10}px`,
          transition: 'background-position 0.5s ease-out'
        }}
      />
      
      {/* Main content */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white dark:text-gray-100 opacity-0 animate-fadeSlideDown transition-colors duration-300">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 dark:from-gray-100 dark:to-blue-300">BHUWANESH M</span>
          </h1>
          
          <div className="h-8 mb-12">
            <p className="text-2xl md:text-3xl text-blue-100 dark:text-blue-200 transition-colors duration-300">
              <span className="inline-block mr-2">I'm a</span> 
              <span className="text-white dark:text-gray-100 font-medium relative after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-white dark:after:bg-gray-100 after:animate-cursorBlink">
                {typedText}
              </span>
            </p>
          </div>
          
          <div className="flex space-x-4 animate-fadeIn">
            <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold py-3 px-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl">
              View My Work
            </button>
            <button className="bg-transparent border-2 border-white dark:border-gray-100 text-white dark:text-gray-100 font-bold py-3 px-8 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl">
              Get In Touch
            </button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-gray-100 opacity-70 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Animated wave at the bottom */}
      <div className="absolute bottom-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="0.2" 
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,240C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            style={{
              transform: `translateX(${Math.sin(time) * 20}px)`,
              transition: 'transform 2s ease-in-out'
            }}
          />
        </svg>
      </div>
    </section>
  );
}