
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-[#e0ebf0] bg-white p-8 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e8f6fa] text-[#087ea5]">
          <Icon size={26} strokeWidth={1.7} />
        </div>

        <span className="text-xs font-bold text-slate-300">
          {service.num}
        </span>
      </div>

      <h3 className="mt-9 text-xl font-bold text-[#09233b]">
        {service.title}
      </h3>

      <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">
        {service.description}
      </p>

      <Link
        to="/appointment"
        className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#087ea5]"
      >
        Request consultation

        <ArrowUpRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </Link>
    </motion.article>
  );
}
