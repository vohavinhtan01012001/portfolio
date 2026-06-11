"use client";

import { Layout, Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/data";

const { Header } = Layout;

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 max-md:!px-4 h-16">
      <a href="#" className="no-underline hover:opacity-80 transition-opacity">
        <span className="font-mono text-lg font-bold">
          <span className="text-[#00ff88]">&gt; </span>
          <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
          <span className="text-[#00ff88] animate-blink">_</span>
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#94a3b8] hover:text-white transition-colors no-underline text-sm font-mono relative group"
          >
            <span className="text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity">
              //
            </span>{" "}
            {item.label}
          </a>
        ))}
      </nav>

      <div className="max-md:hidden" />

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setDrawerOpen(true)}
        className="md:!hidden !text-[#00ff88]"
      />

      {/* Mobile Drawer */}
      <Drawer
        title={
          <span className="font-mono text-base font-bold">
            <span className="text-[#00ff88]">&gt; </span>
            <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
            <span className="text-[#00ff88] animate-blink">_</span>
          </span>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={<CloseOutlined className="!text-[#00ff88]" />}
        styles={{
          body: { padding: 0 },
          header: { background: "#0a1a0f", borderBottom: "1px solid #1a3a22" },
          content: { background: "#0a1a0f" },
        }}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="px-6 py-4 text-[#94a3b8] hover:text-white hover:bg-[#1a3a22] transition-colors no-underline border-b border-[#1a3a22] font-mono"
            >
              <span className="text-[#00ff88]">// </span>
              {item.label}
            </a>
          ))}
        </nav>
      </Drawer>
    </Header>
  );
}
