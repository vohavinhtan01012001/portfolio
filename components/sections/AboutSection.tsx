"use client";

import { motion } from "framer-motion";
import { aboutText } from "@/lib/data";

export function AboutSection() {
  const sentences = aboutText
    .split(/(?<=\.)\s+/)
    .filter(Boolean);

  return (
    <motion.section
      id="about"
      className="py-24 px-6 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#38bdf8] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0d0d1a] border border-[#1c1c30] rounded-lg overflow-hidden"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111120] border-b border-[#1c1c30]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[#a78bfa] font-mono text-xs">~/about.md</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm space-y-3">
            {sentences.map((sentence, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="text-[#94a3b8] leading-relaxed m-0"
              >
                <span className="text-[#8b5cf6]">&gt; </span>
                {sentence}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
