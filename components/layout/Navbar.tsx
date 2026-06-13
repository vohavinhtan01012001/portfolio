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
          <span className="text-[#8b5cf6]">&gt; </span>
          <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
          <span className="text-[#8b5cf6] animate-blink">_</span>
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#94a3b8]! hover:text-[#8b5cf6]! transition-colors no-underline text-sm font-mono group"
          >
            <span className="text-[#8b5cf6]">//</span>{" "}
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
        className="md:!hidden !text-[#8b5cf6]"
      />

      {/* Mobile Drawer */}
      <Drawer
        title={
          <span className="font-mono text-base font-bold">
            <span className="text-[#8b5cf6]">&gt; </span>
            <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
            <span className="text-[#8b5cf6] animate-blink">_</span>
          </span>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={<CloseOutlined className="!text-[#8b5cf6]" />}
        styles={{
          body: { padding: 0 },
          header: { background: "#0d0d1a", borderBottom: "1px solid #1c1c30" },
          content: { background: "#0d0d1a" },
        }}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="px-6 py-4 text-[#94a3b8] hover:text-white hover:bg-[#1c1c30] transition-colors no-underline border-b border-[#1c1c30] font-mono"
            >
              <span className="text-[#8b5cf6]">// </span>
              {item.label}
            </a>
          ))}
        </nav>
      </Drawer>
    </Header>
  );
}
