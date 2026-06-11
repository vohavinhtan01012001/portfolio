import { Layout } from "antd";
import { siteConfig } from "@/lib/data";

const { Footer: AntFooter } = Layout;

export function Footer() {
  return (
    <AntFooter className="!bg-[#020c08] border-t border-[#1a3a22]">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        <p className="font-mono text-sm text-[#4ade80] m-0">
          <span className="text-[#1a3a22]">{"// "}</span>
          EOF — built with React + Next.js + Ant Design by{" "}
          <span className="text-[#00ff88]">{siteConfig.name}</span>
        </p>
      </div>
    </AntFooter>
  );
}
