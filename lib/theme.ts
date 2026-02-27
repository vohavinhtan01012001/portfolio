import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#3b82f6",
    colorBgContainer: "#0f172a",
    colorBgElevated: "#1e293b",
    colorBgLayout: "#030712",
    colorText: "#f1f5f9",
    colorTextSecondary: "#94a3b8",
    colorBorder: "#1e293b",
    colorBorderSecondary: "#334155",
    borderRadius: 12,
    fontFamily:
      'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Layout: {
      headerBg: "transparent",
      bodyBg: "transparent",
      footerBg: "#0a0f1a",
    },
    Card: {
      colorBgContainer: "#0f172a",
      colorBorderSecondary: "#1e293b",
    },
    Button: {
      colorPrimary: "#3b82f6",
      algorithm: true,
      borderRadius: 8,
    },
    Tag: {
      colorBgContainer: "#1e293b",
      colorBorder: "#334155",
    },
  },
};
