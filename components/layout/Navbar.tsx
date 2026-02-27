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
      <a href="#" className="text-lg font-bold text-white no-underline hover:text-[#3b82f6] transition-colors">
        <span className="gradient-text">{siteConfig.name}</span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#94a3b8] hover:text-white transition-colors no-underline text-sm font-medium relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>

      <div className="max-md:hidden">
      </div>


      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setDrawerOpen(true)}
        className="md:!hidden !text-white hover:!text-[#3b82f6]"
      />

      {/* Mobile Drawer */}
      <Drawer
        title={<span className="gradient-text font-bold">{siteConfig.name}</span>}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={<CloseOutlined className="text-blue-400!"/>}
        styles={{
          body: { padding: 0 },
          header: { background: "#0f172a", borderBottom: "1px solid #1e293b" },
          content: { background: "#0f172a" },

        }}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="px-6 py-4 text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-colors no-underline border-b border-[#1e293b] font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Drawer>
    </Header>
  );
}
