import { motion } from "framer-motion";
import { User } from "lucide-react";
import { socialLinks } from "../../../constants/data";

const SocialMedia = ({ itemsVariants }) => {
  return (
    <motion.div
      variants={itemsVariants}
      className="card card-violet md:col-span-1 row-span-3 flex flex-col justify-center gap-4"
    >
      <h2 className="section-title">
        <User size={20} className="text-violet-400" />
        <span>Social Links</span>
      </h2>
      <ul className="space-y-3">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.li key={index}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 text-slate-400 ${social.color}`}
              >
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition duration-300 group-hover:scale-110">
                  <social.icon size={18} />
                </span>
                <span className="relative font-medium">
                  {social.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SocialMedia;