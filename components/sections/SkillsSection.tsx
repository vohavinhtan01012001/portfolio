"use client";

import { Typography, Tag } from "antd";
import { skills } from "@/lib/data";
import { useScrollAnimation } from "@/hooks";

const { Title, Text } = Typography;

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0f1a] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-4 mb-12 ${
            isVisible ? "animate-fade-in-left" : "opacity-0"
          }`}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
          <Title level={2} className="!text-white !text-3xl !mb-0 !font-bold">
            Skills
          </Title>
        </div>

        <div className="flex flex-col gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className={`flex flex-col sm:flex-row sm:items-start gap-4 ${
                isVisible
                  ? `animate-fade-in-up delay-${(categoryIndex + 1) * 100}`
                  : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${(categoryIndex + 1) * 0.1}s` : "0s",
              }}
            >
              <Text className="text-[#3b82f6] text-sm font-medium min-w-[120px] pt-2 uppercase tracking-wider">
                {category}
              </Text>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, skillIndex) => (
                  <Tag
                    key={skill}
                    className="!bg-[#1e293b] !border-[#334155] !text-[#f1f5f9] !px-4 !py-2 !text-sm !rounded-lg hover:!border-[#3b82f6] hover:!bg-[#1e293b]/80 transition-all cursor-default"
                    style={{
                      animationDelay: isVisible
                        ? `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        : "0s",
                    }}
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
