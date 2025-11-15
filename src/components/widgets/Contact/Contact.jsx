import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { personalInfo } from "../../../constants/data";

const Contact = ({ itemsVariants }) => {
  return (
    <motion.div
      variants={itemsVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ filter: "brightness(1.15)" }}
      whileTap={{ scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="card card-green row-span-2 flex flex-col justify-center ooverflow-hidden"
    >
      {/* Glow layer */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(120,255,170,0.2),transparent_70%)] pointer-events-none" />

      {/* Title */}
      <h2 className="flex items-center gap-3 text-lg font-semibold tracking-wide text-emerald-300 drop-shadow-sm">
        <Mail size={22} className="text-emerald-400" />
        <span className="bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent">Contact</span>
      </h2>

      {/* Body */}
      <div className="text-slate-300 flex flex-col gap-4 relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm text-slate-400 leading-relaxed"
        >
          Have a project, collaboration, or just want to say hi? Drop me a message anytime.
        </motion.p>

        {/* Button */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-2 rounded-xl text-center font-medium
                     bg-emerald-500/20 text-emerald-300 border border-emerald-400/20
                     hover:text-white hover:bg-emerald-500/30 hover:border-emerald-400/50
                     transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
        >
          Send Mail <Send size={16} />
        </motion.a>
      </div>

      {/* Ambient pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-10 right-0 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl" />
    </motion.div>
  );
};

export default Contact;