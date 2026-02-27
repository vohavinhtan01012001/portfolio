"use client";

import { Typography, Card, Tag, Button, Row, Col } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { projects } from "@/lib/data";
import { useScrollAnimation } from "@/hooks";

const { Title, Paragraph } = Typography;

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-4 mb-12 ${
            isVisible ? "animate-fade-in-left" : "opacity-0"
          }`}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
          <Title level={2} className="!text-white !text-3xl !mb-0 !font-bold">
            Projects
          </Title>
        </div>

        <Row gutter={[24, 24]}>
          {projects.map((project, index) => (
            <Col xs={24} md={12} key={project.title}>
              <div
                className={`h-full ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{
                  animationDelay: isVisible ? `${(index + 1) * 0.15}s` : "0s",
                }}
              >
                <Card
                  className="h-full !bg-[#0f172a] !border-[#1e293b] gradient-border glow-hover group"
                  styles={{ body: { padding: 28, display: "flex", flexDirection: "column", height: "100%" } }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Title
                      level={4}
                      className="!text-white !text-xl !mb-0 !font-semibold group-hover:!text-[#3b82f6] transition-colors"
                    >
                      {project.title}
                    </Title>
                    {project.demo && (
                      <div className="flex gap-2">
                        <Button
                          type="text"
                          size="small"
                          icon={<LinkOutlined className="!text-lg" />}
                          href={project.demo}
                          target="_blank"
                          className="!text-[#94a3b8] hover:!text-[#3b82f6] !w-8 !h-8 !p-0 flex items-center justify-center"
                        />
                      </div>
                    )}
                  </div>

                  <Paragraph className="!text-[#94a3b8] !mb-5 !text-base !leading-relaxed flex-grow">
                    {project.description}
                  </Paragraph>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Tag
                        key={tag}
                        className="!bg-[#1e293b]/50 !border-[#334155] !text-[#94a3b8] !text-xs !rounded-md !px-3 !py-1"
                      >
                        {tag}
                      </Tag>
                    ))}
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
