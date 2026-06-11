"use client";

import { motion } from "framer-motion";
import { Button } from "antd";
import { GithubOutlined, SendOutlined } from "@ant-design/icons";
import { siteConfig } from "@/lib/data";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">Get in Touch</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[#94a3b8] text-lg mb-10"
        >
          Interested in working together? Feel free to reach out.
        </motion.p>

        <div className="bg-[#0a1a0f] border border-[#1a3a22] rounded-lg overflow-hidden">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1f14] border-b border-[#1a3a22]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[#4ade80] font-mono text-xs">~/contact</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm space-y-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="text-[#4ade80] m-0"
            >
              <span className="text-[#00ff88]">$ </span>contact --vinh
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-[#94a3b8] m-0">
                <span className="text-[#00ff88]">&gt; </span>
                <span className="text-[#4ade80]">email:{"  "}</span>
                {siteConfig.email}
              </p>
              <p className="text-[#94a3b8] m-0">
                <span className="text-[#00ff88]">&gt; </span>
                <span className="text-[#4ade80]">github: </span>
                github.com/vohavinhtan01012001
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                size="large"
                icon={<SendOutlined />}
                href={`mailto:${siteConfig.email}`}
                className="!h-12 !text-base !font-mono !bg-[#00ff88] !border-[#00ff88] !text-[#020c08] hover:!bg-[#00cc70] hover:!border-[#00cc70]"
              >
                [→ Send Email]
              </Button>
              <Button
                size="large"
                icon={<GithubOutlined className="!text-xl" />}
                href={siteConfig.github}
                target="_blank"
                className="!h-12 !w-12 !p-0 !bg-transparent !border-[#1a3a22] !text-[#94a3b8] hover:!border-[#00d4ff] hover:!text-[#00d4ff] flex items-center justify-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
