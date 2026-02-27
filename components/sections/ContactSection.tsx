"use client";

import { Typography, Button, Card } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { siteConfig } from "@/lib/data";
import { useScrollAnimation } from "@/hooks";

const { Title, Text } = Typography;

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="max-w-3xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-4 mb-6 ${
            isVisible ? "animate-fade-in-left" : "opacity-0"
          }`}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
          <Title level={2} className="!text-white !text-3xl !mb-0 !font-bold">
            Get in Touch
          </Title>
        </div>

        <Text
          className={`text-[#94a3b8] text-lg block mb-10 ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Interested in working together? Feel free to reach out.
        </Text>

        <div
          className={isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}
        >
          <Card
            className="!bg-[#0f172a] !border-[#1e293b] gradient-border"
            styles={{ body: { padding: 32 } }}
          >
            <div className="flex flex-col gap-6">
              <Button
                type="primary"
                size="large"
                icon={<SendOutlined />}
                href={`mailto:${siteConfig.email}`}
                className="!h-14 !text-base !font-medium glow-hover w-full sm:w-auto"
              >
                {siteConfig.email}
              </Button>

              <div className="flex items-center gap-4">
                <Text className="text-[#64748b] text-sm">Or find me on</Text>
                <div className="flex gap-3">
                  <Button
                    size="large"
                    icon={<GithubOutlined className="!text-xl" />}
                    href={siteConfig.github}
                    target="_blank"
                    className="!w-12 !h-12 !p-0 !bg-[#1e293b] !border-[#334155] hover:!border-[#3b82f6] hover:!text-[#3b82f6] flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
