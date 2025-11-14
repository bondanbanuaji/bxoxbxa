import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "../../../constants/data";

const Contact = ({ itemsVariants }) => {
  return (
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
  );
};

export default Contact;