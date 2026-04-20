import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0d12",
        foreground: "#f5f7fb",
        muted: "#96a0b5",
        panel: "#11161d",
        line: "#232b37",
        accent: "#62e6c5",
        accentDark: "#12342d"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      maxWidth: {
        container: "72rem"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"]
      },
      backgroundImage: {
        "radial-shell":
          "radial-gradient(circle at top, rgba(98, 230, 197, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(95, 124, 255, 0.1), transparent 24%)"
      }
    }
  },
  plugins: []
};

export default config;
