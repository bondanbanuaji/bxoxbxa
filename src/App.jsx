import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import {
  personalInfo,
  animatedBlobs,
} from "./constants/data.jsx";

// Import components
import Profile from "./components/widgets/Profile/Profile.jsx";
import Projects from "./components/widgets/Projects/Projects.jsx";
import ClockWidget from "./components/widgets/Clock/Clock.jsx";
import Contact from "./components/widgets/Contact/Contact.jsx";
import SocialMedia from "./components/widgets/SocialMedia/SocialMedia.jsx";
import Experience from "./components/widgets/Experience/Experience.jsx";
import Tools from "./components/widgets/Tools/Tools.jsx";
import Goals from "./components/widgets/Goals/Goals.jsx";
import Achievements from "./components/widgets/Achievements/Achievements.jsx";
import Skills from "./components/widgets/Skills/Skills.jsx";
import Certificates from "./components/widgets/Certificates/Certificates.jsx";

function App() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const itemsVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .no-animate {
          animation: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Custom scrollbar styles */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a; /* dark background */
          border: 1px solid #4a5568; /* thin grey border */
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #0a0a0a; /* dark color */
          border: 1px solid #718096; /* thin grey border */
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #1a202c; /* slightly lighter dark on hover */
          border: 1px solid #a0aec0; /* light grey border on hover */
        }

        /* Custom scrollbars for specific elements */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #0a0a0a #4a5568; /* dark thumb with grey track */
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #0a0a0a; /* dark background */
          border: 1px solid #4a5568; /* thin grey border */
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #0a0a0a; /* dark color */
          border: 1px solid #718096; /* thin grey border */
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #1a202c; /* slightly lighter dark on hover */
          border: 1px solid #a0aec0; /* light grey border on hover */
        }

        /* Specific card scrollbars */
        .card.overflow-auto,
        .card.overflow-y-auto,
        .card.overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: #0a0a0a #4a5568; /* dark thumb with grey track */
        }

        .card.overflow-auto::-webkit-scrollbar,
        .card.overflow-y-auto::-webkit-scrollbar,
        .card.overflow-x-auto::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }

        .card.overflow-auto::-webkit-scrollbar-track,
        .card.overflow-y-auto::-webkit-scrollbar-track,
        .card.overflow-x-auto::-webkit-scrollbar-track {
          background: #0a0a0a; /* dark background */
          border: 1px solid #4a5568; /* thin grey border */
          border-radius: 2.5px;
        }

        .card.overflow-auto::-webkit-scrollbar-thumb,
        .card.overflow-y-auto::-webkit-scrollbar-thumb,
        .card.overflow-x-auto::-webkit-scrollbar-thumb {
          background: #0a0a0a; /* dark color */
          border: 1px solid #718096; /* thin grey border */
          border-radius: 2.5px;
        }

        .card.overflow-auto::-webkit-scrollbar-thumb:hover,
        .card.overflow-y-auto::-webkit-scrollbar-thumb:hover,
        .card.overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #1a202c; /* slightly lighter dark on hover */
          border: 1px solid #a0aec0; /* light grey border on hover */
        }

        /* Video optimization styles */
        .transform3d-optimize {
          transform: translateZ(0);
          will-change: transform;
          contain: layout style paint;
        }

        video {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        {animatedBlobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          className="main-grid"
        >
          {/* // profile */}
          <Profile itemsVariants={itemsVariants} />

          {/* // projects */}
          <Projects itemsVariants={itemsVariants} />

          {/* // clock */}
          <ClockWidget itemsVariants={itemsVariants} time={time} />

          {/* // contact  */}
          <Contact itemsVariants={itemsVariants} />

          {/* // social media */}
          <SocialMedia itemsVariants={itemsVariants} />

          {/* // experience */}
          <Experience itemsVariants={itemsVariants} />

          {/* // tools */}
          <Tools itemsVariants={itemsVariants} />

          {/* // goals */}
          <Goals itemsVariants={itemsVariants} />

          {/* // achievements */}
          <Achievements itemsVariants={itemsVariants} />

          {/* // skills */}
          <Skills itemsVariants={itemsVariants} />

          {/* // certificates */}
          <Certificates itemsVariants={itemsVariants} />

        </motion.main>
      </div>
    </>
  );
}

export default App;