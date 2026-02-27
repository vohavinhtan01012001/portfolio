"use client";

import { Typography, Card, Row, Col } from "antd";
import {
  CodeOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { focusAreas } from "@/lib/data";
import { useScrollAnimation } from "@/hooks";

const { Title, Paragraph } = Typography;

const icons = [
  <CodeOutlined key="code" className="!text-2xl" />,
  <AppstoreOutlined key="appstore" className="!text-2xl" />,
  <ThunderboltOutlined key="thunder" className="!text-2xl" />,
  <ToolOutlined key="tool" className="!text-2xl" />,
];

export function FocusSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="focus" className="py-24 px-6 bg-[#0a0f1a] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2" />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-4 mb-12 ${
            isVisible ? "animate-fade-in-left" : "opacity-0"
          }`}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
          <Title level={2} className="!text-white !text-3xl !mb-0 !font-bold">
            What I Focus On
          </Title>
        </div>

        <Row gutter={[24, 24]}>
          {focusAreas.map((area, index) => (
            <Col xs={24} sm={12} key={area.title}>
              <div
                className={isVisible ? "animate-fade-in-up" : "opacity-0"}
                style={{
                  animationDelay: isVisible ? `${(index + 1) * 0.15}s` : "0s",
                }}
              >
                <Card
                  className="h-full !bg-transparent !border-[#1e293b] hover:!border-[#334155] transition-all group"
                  styles={{ body: { padding: 24 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#3b82f6] group-hover:from-[#3b82f6]/30 group-hover:to-[#8b5cf6]/30 transition-all shrink-0">
                      {icons[index]}
                    </div>
                    <div>
                      <Title
                        level={4}
                        className="!text-white !text-lg !mb-2 !font-semibold"
                      >
                        {area.title}
                      </Title>
                      <Paragraph className="!text-[#94a3b8] !mb-0 !text-sm !leading-relaxed">
                        {area.description}
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
