import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { personalInfo } from "../../../constants/data";

const ClockWidget = ({ itemsVariants, time }) => {
  return (
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
  );
};

export default ClockWidget;