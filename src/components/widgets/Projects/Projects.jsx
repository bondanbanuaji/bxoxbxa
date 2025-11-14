import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";
import { projects } from "../../../constants/data";

const Projects = ({ itemsVariants }) => {
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
  );
};

export default Projects;