"use client";

import { Typography, Button } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { siteConfig } from "@/lib/data";
import { useScrollAnimation } from "@/hooks";

const { Title, Text } = Typography;

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-3xl text-center relative z-10">
        <Text
          className={`text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-6 block ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {siteConfig.role}
        </Text>

        <Title
          level={1}
          className={`!text-white !text-4xl md:!text-6xl !mb-6 !font-bold !leading-tight ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{siteConfig.name}</span>
        </Title>

        <Text
          className={`text-[#94a3b8] text-lg md:text-xl block mb-10 leading-relaxed max-w-2xl mx-auto ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          Building scalable web and mobile applications with modern React ecosystem
        </Text>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <Button
            type="primary"
            size="large"
            icon={<MailOutlined />}
            href="#contact"
            className="min-w-[180px] !h-12 !text-base !font-medium glow-hover"
          >
            Get in Touch
          </Button>
          <Button
            size="large"
            icon={<GithubOutlined />}
            href={siteConfig.github}
            target="_blank"
            className="min-w-[180px] !h-12 !text-base !font-medium !bg-[#1e293b] !border-[#334155] hover:!border-[#3b82f6] hover:!text-[#3b82f6]"
          >
            View GitHub
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-[#334155] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#3b82f6] rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
