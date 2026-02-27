"use client";

import { Layout, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, HeartFilled } from "@ant-design/icons";
import { siteConfig } from "@/lib/data";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export function Footer() {
  return (
    <AntFooter className="!bg-[#0a0f1a] border-t border-[#1e293b]">
      <div className="max-w-5xl mx-auto px-6 max-md:px-0 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Text className="text-[#64748b] text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Text>
          <Text className="text-[#475569] text-xs flex items-center gap-1">
            Built with <HeartFilled className="text-[#ef4444] text-xs" /> using Next.js & Ant Design
          </Text>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
          >
            <GithubOutlined className="text-lg" />
          </a>
          
        </div>
      </div>
    </AntFooter>
  );
}
