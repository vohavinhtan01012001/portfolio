import { Layout } from "antd";
import { siteConfig } from "@/lib/data";

const { Footer: AntFooter } = Layout;

export function Footer() {
  return (
    <AntFooter className="!bg-[#07070e] border-t border-[#1c1c30]">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        <p className="font-mono text-sm text-[#a78bfa] m-0">
          <span className="text-[#1c1c30]">{"// "}</span>
          EOF — built with React + Next.js + Ant Design by{" "}
          <span className="text-[#8b5cf6]">{siteConfig.name}</span>
        </p>
      </div>
    </AntFooter>
  );
}
