import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "../../../constants/data";

const Experience = ({ itemsVariants }) => {
  return (
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
  );
};

export default Experience;