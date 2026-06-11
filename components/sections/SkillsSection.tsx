"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#020c08] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00ff88]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">Skills</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <span className="text-[#4ade80] text-sm font-mono min-w-[120px] pt-2">
                // {category}
              </span>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0a1a0f] border border-[#1a3a22] text-[#e2e8f0] px-4 py-2 text-sm rounded-lg font-mono hover:border-[#00ff88] hover:shadow-[0_0_8px_rgba(0,255,136,0.2)] transition-all cursor-default"
                  >
                    <span className="text-[#00ff88]">&lt;</span>
                    {skill}
                    <span className="text-[#00ff88]"> /&gt;</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
