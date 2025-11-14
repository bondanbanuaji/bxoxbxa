import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { certificates } from "../../../constants/data";

const Certificates = ({ itemsVariants }) => {
  return (
    <motion.div
      variants={itemsVariants}
      className="card card-orange row-span-2 flex flex-col gap-3 overflow-hidden group"
    >
      <h2 className="section-title">
        <Trophy
          size={20}
          className="text-amber-400"
        />
        <span>Certificates</span>
      </h2>
      <ul className="space-y-2 text-sm text-slate-400">
        {certificates.map((cert, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="bullet bg-amber-600/50 group-hover:bg-amber-400">
            </span>
            {cert}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Certificates;