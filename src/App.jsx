import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePhoto from "../public/pp.jpg"
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

  const [dragStates, setDragStates] = useState(() => skills.map(() => false));

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
          background: rgba(10, 10, 10, 0.2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5); /* violet-500 with opacity */
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8); /* violet-500 with higher opacity */
        }

        /* Custom scrollbars for specific elements */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(139, 92, 246, 0.5) transparent;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }

        /* Specific card scrollbars */
        .card.overflow-auto,
        .card.overflow-y-auto,
        .card.overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(139, 92, 246, 0.3) transparent;
        }

        .card.overflow-auto::-webkit-scrollbar,
        .card.overflow-y-auto::-webkit-scrollbar,
        .card.overflow-x-auto::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }

        .card.overflow-auto::-webkit-scrollbar-thumb,
        .card.overflow-y-auto::-webkit-scrollbar-thumb,
        .card.overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 2.5px;
        }

        .card.overflow-auto::-webkit-scrollbar-thumb:hover,
        .card.overflow-y-auto::-webkit-scrollbar-thumb:hover,
        .card.overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.6);
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
          <motion.div
            variants={itemsVariants}
            className="card card-cyan md:col-span-1 row-span-3 flex flex-col justify-center gap-3"
          >
            <img src={profilePhoto} className="w-[70px] h-[70px] rounded-full object-cover" alt="Profile" />
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
                  className="relative group rounded-xl overflow-hidden w-full aspect-video transform3d-optimize"
                >
                  <video
                    src={`/projectvid${index + 1}.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    >
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

          {/* // social media */}
          <motion.div
            variants={itemsVariants}
            className="card card-violet md:col-span-1 row-span-3 flex flex-col justify-center gap-4"
          >
            <h2 className="section-title">
              <User size={20} className="text-violet-400" />
              <span>Social Links</span>
            </h2>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.li key={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 text-slate-400 ${social.color}`}
                    >
                      <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition duration-300 group-hover:scale-110">
                        <social.icon size={18} />
                      </span>
                      <span className="relative font-medium">
                        {social.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* // experience */}
          <motion.div
            variants={itemsVariants}
            className="card card-cyan md:col-span-1 row-span-4 flex flex-col"
          >
            <h2 className="section-title">
              <BriefcaseBusiness
                size={20}
                className="text-cyan-400"
              />
              <span>Experience</span>
            </h2>
            <ul className="space-y-3 px-3 text-sm overflow-y-auto overflow-x-hidden">
              {experiences.map((job, i) => (
                <motion.li key={i}
                  className="soft-card group"
                >
                  <span className="text-white font-medium flex items-center gap-2">
                    {job.role} - {job.company}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    {job.period}
                  </span>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    {job.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* // tools */}
          <motion.div
            variants={itemsVariants}
            className="card card-green row-span-3 flex flex-col justify-center gap-3 group"
          >
            <h2 className="section-title">
              <BriefcaseBusiness
                size={20}
                className="text-green-400"
              />
              <span>Tools</span>
            </h2>
            <ul className="space-y-2 text-sm">
              {tools.map((tool, i) => (
                <motion.li key={i}
                  whileHover={{x: 4}}
                  className="flex items-center gap-2 group"
                >
                  <span className="bullet bg-green-400/50 group-hover:bg-green-400">
                  </span>
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* // goals */}
          <motion.div
            variants={itemsVariants}
            className="card card-green row-span-2 flex flex-col justify-center group"
          >
            <h2 className="section-title">
              <Trophy
                size={20}
                className="text-green-400"
              />
              <span>Goals</span>
            </h2>
            <ul className="text-slate-400 text-sm space-y-2">
              {goals.map((goal, i) => (
                <motion.li key={i}
                  className="flex items-center gap-2"
                >
                  <span className="bullet mt-1 bg-green-400/50 group-hover:bg-green-400">
                  </span>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* // achievements */}
          <motion.div
            variants={itemsVariants}
            className="card card-yellow row-span-3 sm:row-span-4 flex flex-col gap-4"
          >
            <h2 className="section-title">
              <Trophy
                size={20}
                className="text-yellow-400"
              />
              <span>Achievements & Metrics</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-400">
              {achievements.map((ach, i) => (
                <motion.div key={i}
                  whileHover={{scale: 1.03}}
                  className="stats-box"
                >
                  <span className={`font-bold text-xl ${ach.color === "yellow" ? "text-yellow-400" : ach.color === "cyan" ? "text-cyan-400" : ach.color === "pink" ? "text-pink-400" : "text-violet-400"}`}>
                    {ach.value}
                  </span>
                  <h3 className="mt-1 font-medium text-white/90">
                    {ach.title}
                  </h3>
                  <p className="mt-1 text-slate-400 text-xs leading-snug">
                    {ach.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* // skills */}
          <motion.div
            variants={itemsVariants}
            className="card card-cyan row-span-5 flex flex-col overflow-hidden"
          >
            <h2 className="section-title">
              <User
                size={20}
                className="text-cyan-400"
              />
              <span>Skills</span>
            </h2>
            <div className="flex-1 flex flex-col justify-center p-4 space-y-6 overflow-hidden">
              {skills.map((group, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-medium text-white/90 text-base">{group.category}</h3>
                  <div className="relative overflow-hidden py-2">
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
                    <div className="whitespace-nowrap overflow-x-auto overflow-y-hidden py-1 scrollbar-hide">
                      <motion.div
                        className={`flex gap-3 ${dragStates[i] ? 'no-animate' : 'animate-scroll'}`}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.3}
                        dragMomentum={false}
                        whileDrag={{ scale: 1 }}
                        onDragStart={() => {
                          const newDragStates = [...dragStates];
                          newDragStates[i] = true;
                          setDragStates(newDragStates);
                        }}
                        onDragEnd={() => {
                          const newDragStates = [...dragStates];
                          newDragStates[i] = false;
                          setDragStates(newDragStates);
                        }}
                        whileTap={{ cursor: "grabbing" }}
                      >
                        {[...group.skills, ...group.skills].map((skill, j) => (
                          <span
                            key={`${i}-${j}`}
                            className="bg-[#0c0c0c] hover:bg-[#141414] border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg px-4 py-2 text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0"
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* // certificates */}
          <motion.div
            variants={itemsVariants}
            className="card card-orange row-span-2 flex flex-col gap-3 overflow-hidden group"
          >
            <h2 className="section-title">
              <Trophy
                size={20}
                className="text-amber-400"
              />
              <span>Certificates</span>
            </h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {certificates.map((cert, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="bullet bg-amber-600/50 group-hover:bg-amber-400">
                  </span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </motion.main>
      </div>
    </>
  );
}

export default App;