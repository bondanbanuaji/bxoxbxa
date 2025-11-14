import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { goals } from "../../../constants/data";

const Goals = ({ itemsVariants }) => {
  return (
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
  );
};

export default Goals;