import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../../../constants/data.jsx";

const Achievements = ({ itemsVariants }) => {
  return (
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
  );
};

export default Achievements;