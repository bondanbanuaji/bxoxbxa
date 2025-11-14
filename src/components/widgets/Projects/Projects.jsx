import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ExternalLink, Github } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { projects } from "../../../constants/data";

const Projects = ({ itemsVariants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const handleImageError = (e) => {
    e.target.src = "/error-handling/404notfound.png";
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextImage = () => {
    stopAutoScroll();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    stopAutoScroll();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (newIndex) => {
    if (newIndex === currentIndex) return;
    stopAutoScroll();
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000);
    };

    startAutoScroll();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <motion.div
      variants={itemsVariants}
      className="card card-violet md:col-span-1 row-span-4 flex flex-col gap-4"
    >
      <h2 className="section-title">
        <Trophy
          size={20}
          className="text-violet-400"
        />
        <span>
          Projects
        </span>
      </h2>

      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (direction) => ({
                x: direction > 0 ? 300 : -300,
                opacity: 0,
                scale: 0.9
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
                scale: 1
              },
              exit: (direction) => ({
                zIndex: 0,
                x: direction < 0 ? 300 : -300,
                opacity: 0,
                scale: 0.9
              })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => {
              const swipeThreshold = 50;
              if (offset.x < -swipeThreshold) {
                nextImage();
              } else if (offset.x > swipeThreshold) {
                prevImage();
              }
            }}
            className="absolute inset-0 w-full h-full"
            style={{
              // Add CSS properties to improve image rendering
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="relative w-full h-full group">
              <img
                src={projects[currentIndex]?.image || `/project${currentIndex + 1}.webp`}
                alt={projects[currentIndex]?.title}
                className="w-full h-full object-cover transition-all duration-300 hover:filter hover:blur-sm"
                onError={handleImageError}
                style={{
                  // Improve image rendering quality
                  imageRendering: 'crisp-edges',
                  // Prevent image from becoming blurry during transitions
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center flex-col gap-4 p-4">
                {projects[currentIndex]?.github && (
                  <a
                    href={projects[currentIndex]?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 py-2 bg-transparent text-black font-semibold rounded-full flex items-center gap-2
                              transform transition-all duration-300
                              shadow-lg hover:shadow-2xl hover:shadow-gray-400/20
                              border border-gray-500/50 hover:border-gray-400/70
                              overflow-hidden"
                  >
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0 bg-white z-0 
                              transition-all duration-500 ease-out 
                              group-hover:h-full group-hover:rounded-full"
                    ></span>
                    
                    <span className="relative z-10">Open Github</span>
                    <Github
                      size={16}
                      className="transition-transform duration-300 relative z-10 group-hover:translate-x-1"
                    />
                  </a>
                )}
                {projects[currentIndex]?.liveUrl && (
                  <a
                    href={projects[currentIndex]?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 py-2 bg-transparent text-white font-semibold rounded-full flex items-center gap-2
                              transform transition-all duration-300
                              shadow-lg hover:shadow-2xl hover:shadow-violet-500/40
                              border border-violet-400/30 hover:border-violet-300/50
                              overflow-hidden"
                  >
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-violet-600 to-indigo-600 z-0 
                              transition-all duration-500 ease-out 
                              group-hover:h-full group-hover:rounded-full"
                    ></span>
                    
                    <span className="relative z-10">Live Demo</span>
                    <ExternalLink
                      size={16}
                      className="transition-transform duration-300 relative z-10 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator Below Images */}
      <div className="flex justify-center gap-3 py-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-violet-400 w-8 shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]'
                : 'bg-white/50 hover:bg-violet-300 hover:w-4'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;