"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";

export function FocusSection() {
  return (
    <motion.section
      id="focus"
      className="py-24 px-6 bg-[#020c08] relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">What I Focus On</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-transparent border border-[#1a3a22] border-l-2 border-l-[#00ff88] rounded-xl p-6 hover:bg-[#00ff88]/5 transition-all flex items-start gap-4"
            >
              <span className="font-mono text-[#00ff88] text-sm font-bold shrink-0 mt-0.5">
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2 m-0">{area.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed m-0">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
