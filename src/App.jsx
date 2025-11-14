import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  Mail,
  ExternalLink,
} from "lucide-react";

import {
  personalInfo,
  projects,
  socialLinks,
  experiences,
  tools,
  goals,
  achievements,
  skills,
  certificates,
  animatedBlobs,
} from "./constants/data.jsx";

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
          <motion.div
            variants={itemsVariants}
            className="card card-cyan md:col-span-1 row-span-3 flex flex-col justify-center gap-3"
          >
            <img src="/pp.jpg" className="w-[70px] h-[70px] rounded-full object-cover" alt="Profile" />
            <h2 className="section-title">
              <User
                size={22}
                className="text-violet-400"
              />
              <p>{personalInfo.name}</p>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>
          
          {/* // projects */}
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
                projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {projects.map((project, index) => (
                <motion.div key={index}
                  className="relative group rounded-xl overflow-hidden w-full aspect-video"
                >
                  <video
                    src={`/projectvid${index + 1}.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover">
                  </video>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="gradient-btn">
                      Open Project
                      <ExternalLink
                        size={14}
                      />
                    </button>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* // clock */}
          <motion.div
            variants={itemsVariants}
            className="card card-blue row-span-2 flex flex-col justify-center items-start gap-3 overflow-hidden"
          >
            <h2 className="section-title">
              <Clock size={20} 
              className="text-cyan-400"
              />
              <span>My Local Time [{
                personalInfo.location
                }]
              </span>
            </h2>
            <p className="text-6xl font-semibold tracking-tight bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent relative">
                {time}
            </p>
          </motion.div>

          {/* // contact  */}
          <motion.div
            variants={itemsVariants}
            className="card card-green row-span-2 flex flex-col justify-center ooverflow-hidden"
          >
            <h2 className="section-title">
              <Mail 
                size={20}
                className="text-green-400"
              />
              <span>Contact</span>
            </h2>
            <div className="text-slate-300 flex flex-col gap-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Have a project, collabroration, or just want to say hi? Drop me a message anytime.
              </p>
              <a href={`mailto:${personalInfo.email}`}
                className="w-full bg-green-500/20 hover:border-green-500/50 text-green-400 hover:text-white font-medium py-2 rounded-lg text-center transition-all duration-300"
              >
                Send Mail
              </a>
            </div>
          </motion.div>

        </motion.main>
      </div>
    </>
  );
}

export default App;