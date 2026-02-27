"use client";

import { Typography } from "antd";
import { aboutText } from "@/lib/data";
import { useScrollAnimation } from "@/hooks";

const { Title, Paragraph } = Typography;

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="max-w-3xl mx-auto">
        <div
          className={`flex items-center gap-4 mb-8 ${
            isVisible ? "animate-fade-in-left" : "opacity-0"
          }`}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
          <Title
            level={2}
            className="!text-white !text-3xl !mb-0 !font-bold"
          >
            About
          </Title>
        </div>

        <div
          className={`relative ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-transparent rounded-full" />
          <Paragraph className="!text-[#94a3b8] !text-lg !leading-loose !mb-0 pl-6">
            {aboutText}
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
