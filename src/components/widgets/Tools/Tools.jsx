import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { tools } from "../../../constants/data.jsx";

const Tools = ({ itemsVariants }) => {
  return (
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
  );
};

export default Tools;