import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#8b5cf6",
    colorBgContainer: "#0d0d1a",
    colorBgElevated: "#111120",
    colorBgLayout: "#07070e",
    colorText: "#e2e8f0",
    colorTextSecondary: "#a78bfa",
    colorBorder: "#1c1c30",
    colorBorderSecondary: "#1c1c30",
    borderRadius: 12,
    fontFamily:
      'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Layout: {
      headerBg: "transparent",
      bodyBg: "transparent",
      footerBg: "#07070e",
    },
    Card: {
      colorBgContainer: "#0d0d1a",
      colorBorderSecondary: "#1c1c30",
    },
    Button: {
      colorPrimary: "#8b5cf6",
      algorithm: true,
      borderRadius: 8,
    },
    Tag: {
      colorBgContainer: "#0d0d1a",
      colorBorder: "#1c1c30",
    },
  },
};
