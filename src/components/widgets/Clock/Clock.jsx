import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { personalInfo } from "../../../constants/data";

const ClockWidget = ({ itemsVariants, time }) => {
  return (
    <motion.div
      variants={itemsVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ filter: "brightness(1.15)" }}
      whileTap={{ scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="card card-blue row-span-2 flex flex-col justify-center items-start gap-3 overflow-hidden"
    >
      {/* Soft glow ring */}
      <motion.div 
      className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_10%_20%,rgba(90,200,255,0.18),transparent_70%)]" />

      {/* Header */}
      <h2 className="flex items-center gap-3 text-lg font-semibold tracking-wide text-cyan-300 drop-shadow-sm">
        <Clock size={22} className="text-cyan-400" />
        <span className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
          My Local Time [{personalInfo.location}]
        </span>
      </h2>

      {/* Time */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold tracking-tighter leading-none
                   bg-gradient-to-r from-white via-cyan-200 to-violet-200
                   bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(180,220,255,0.25)]"
      >
        {time}
      </motion.p>

      {/* Subtle animated glow pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-10 right-0 w-20 h-20 rounded-full bg-cyan-500/20 blur-3xl" />
    </motion.div>
  );
};

export default ClockWidget;