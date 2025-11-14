import { motion } from "framer-motion";
import { User } from "lucide-react";
import { skills } from "../../../constants/data";
import { useState } from "react";

const Skills = ({ itemsVariants }) => {
  const [dragStates, setDragStates] = useState(() => skills.map(() => false));

  return (
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
  );
};

export default Skills;