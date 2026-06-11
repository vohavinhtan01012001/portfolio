"use client";

import { useState } from "react";
import { Button } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

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

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-72 md:h-72"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.25)] scanline">
                {/* Fallback initials */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a1a0f] text-[#00ff88] text-6xl font-mono font-bold z-0">
                  VT
                </div>
                {/* Avatar image — conditionally rendered so no retry loop on 404 */}
                {!imgError && (
                  <img
                    src="/avatar.jpg"
                    alt={siteConfig.name}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={() => setImgError(true)}
                  />
                )}
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
