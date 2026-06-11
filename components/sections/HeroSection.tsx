"use client";

import { Button } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 relative overflow-hidden dot-grid">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#00ff88] font-mono text-sm mb-4 tracking-widest"
            >
              $ whoami
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text-hacker">{siteConfig.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-mono mb-6 h-9"
            >
              <TypingEffect
                texts={["Front-end Developer", "React Specialist", "Next.js Engineer"]}
                className="text-[#00d4ff]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#94a3b8] text-lg mb-10 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Building scalable web and mobile applications with modern React ecosystem
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            >
              <Button
                type="primary"
                size="large"
                icon={<MailOutlined />}
                href="#contact"
                className="min-w-[180px] !h-12 !text-base !font-mono !bg-[#00ff88] !border-[#00ff88] !text-[#020c08] hover:!bg-[#00cc70] hover:!border-[#00cc70]"
              >
                Get in Touch
              </Button>
              <Button
                size="large"
                icon={<GithubOutlined />}
                href={siteConfig.github}
                target="_blank"
                className="min-w-[180px] !h-12 !text-base !font-mono !bg-transparent !border-[#00d4ff] !text-[#00d4ff] hover:!bg-[#00d4ff]/10"
              >
                View GitHub
              </Button>
            </motion.div>
          </div>

          {/* Right: Code terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-[#0a1a0f] border border-[#00ff88]/40 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,136,0.12)] font-mono text-sm min-w-[280px] md:min-w-[320px]">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1f14] border-b border-[#1a3a22]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="ml-2 text-[#4ade80] text-xs">profile.tsx</span>
                </div>
                {/* Code body */}
                <div className="p-5 space-y-0.5 leading-7 text-sm">
                  <p className="m-0">
                    <span className="text-[#00d4ff]">const</span>{" "}
                    <span className="text-[#e2e8f0]">dev</span>{" "}
                    <span className="text-[#00ff88]">=</span>{" "}
                    <span className="text-[#e2e8f0]">{"{"}</span>
                  </p>
                  <p className="m-0 pl-5">
                    <span className="text-[#4ade80]">name</span>
                    <span className="text-[#e2e8f0]">: </span>
                    <span className="text-[#fbbf24]">&quot;Vinh Tân&quot;</span>
                    <span className="text-[#e2e8f0]">,</span>
                  </p>
                  <p className="m-0 pl-5">
                    <span className="text-[#4ade80]">role</span>
                    <span className="text-[#e2e8f0]">: </span>
                    <span className="text-[#fbbf24]">&quot;Frontend Engineer&quot;</span>
                    <span className="text-[#e2e8f0]">,</span>
                  </p>
                  <p className="m-0 pl-5">
                    <span className="text-[#4ade80]">stack</span>
                    <span className="text-[#e2e8f0]">: [</span>
                    <span className="text-[#fbbf24]">&quot;React&quot;</span>
                    <span className="text-[#e2e8f0]">, </span>
                    <span className="text-[#fbbf24]">&quot;Next.js&quot;</span>
                    <span className="text-[#e2e8f0]">,</span>
                  </p>
                  <p className="m-0 pl-10">
                    <span className="text-[#fbbf24]">&quot;TypeScript&quot;</span>
                    <span className="text-[#e2e8f0]">],</span>
                  </p>
                  <p className="m-0 pl-5">
                    <span className="text-[#4ade80]">open</span>
                    <span className="text-[#e2e8f0]">: </span>
                    <span className="text-[#00d4ff]">true</span>
                    <span className="text-[#e2e8f0]">,</span>
                  </p>
                  <p className="m-0 pl-5">
                    <span className="text-[#4ade80]">status</span>
                    <span className="text-[#e2e8f0]">: </span>
                    <span className="text-[#00ff88]">available</span>
                    <span className="text-[#e2e8f0]">()</span>
                  </p>
                  <p className="m-0">
                    <span className="text-[#e2e8f0]">{"}"}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#1a3a22] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00ff88] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
