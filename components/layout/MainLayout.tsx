"use client";

import { Layout } from "antd";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const { Content } = Layout;

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout className="min-h-screen overflow-hidden">
      <Navbar />
      <Content className="pt-16">{children}</Content>
      <Footer />
    </Layout>
  );
}
