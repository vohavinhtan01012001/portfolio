import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#00ff88",
    colorBgContainer: "#0a1a0f",
    colorBgElevated: "#0f1f14",
    colorBgLayout: "#020c08",
    colorText: "#e2e8f0",
    colorTextSecondary: "#4ade80",
    colorBorder: "#1a3a22",
    colorBorderSecondary: "#1a3a22",
    borderRadius: 12,
    fontFamily:
      'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Layout: {
      headerBg: "transparent",
      bodyBg: "transparent",
      footerBg: "#020c08",
    },
    Card: {
      colorBgContainer: "#0a1a0f",
      colorBorderSecondary: "#1a3a22",
    },
    Button: {
      colorPrimary: "#00ff88",
      algorithm: true,
      borderRadius: 8,
    },
    Tag: {
      colorBgContainer: "#0a1a0f",
      colorBorder: "#1a3a22",
    },
  },
};
