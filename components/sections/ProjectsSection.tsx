"use client";

import { motion } from "framer-motion";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24 px-6 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#38bdf8] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-[#0d0d1a] border border-[#1c1c30] rounded-xl p-7 relative hover:border-[#8b5cf6] hover:shadow-[0_0_20px_rgba(0,255,136,0.12)] hover:-translate-y-1 transition-all flex flex-col"
            >
              {/* Corner bracket decoration */}
              <span className="absolute top-3 left-3 text-[#8b5cf6] font-mono text-xs opacity-50 select-none">
                ┌─
              </span>

              <div className="flex items-start justify-between mb-2 mt-1">
                <h3 className="text-white text-xl font-semibold group-hover:text-[#8b5cf6] transition-colors pr-3 m-0">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.demo ? (
                    <span className="font-mono text-xs text-[#38bdf8] border border-[#38bdf8]/40 px-2 py-0.5 rounded">
                      [LIVE]
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-[#a78bfa] border border-[#1c1c30] px-2 py-0.5 rounded">
                      [INTERNAL]
                    </span>
                  )}
                  {project.demo && (
                    <Button
                      type="text"
                      size="small"
                      icon={<LinkOutlined />}
                      href={project.demo}
                      target="_blank"
                      className="!text-[#94a3b8] hover:!text-[#8b5cf6] !w-8 !h-8 !p-0 flex items-center justify-center"
                    />
                  )}
                </div>
              </div>

              <p className="font-mono text-[#a78bfa] text-xs mb-3 m-0">
                // {project.company} — {project.period}
              </p>

              <p className="text-[#94a3b8] text-base leading-relaxed flex-grow mb-5 mt-0">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#07070e] border border-[#1c1c30] text-[#a78bfa] text-xs px-3 py-1 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
