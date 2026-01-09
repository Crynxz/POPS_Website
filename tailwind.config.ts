import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./client/index.html", 
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0E6973", // Main Brand (Teal 600)
          50: "#F0F9FA",
          100: "#DBF0F2",
          200: "#BDE0E4",
          300: "#92C8CF",
          400: "#62A8B3",
          500: "#3E8996",
          600: "#0E6973",
          700: "#0B545D",
          800: "#09464E",
          900: "#073941",
          950: "#03252C",
          dark: "#084B52", // mapped to ~800
          light: "#E2F3F5", // mapped to ~100
          soft: "rgba(14, 105, 115, 0.08)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#FF8B5B", // Warm Coral (Coral 400)
          50: "#FFF5F0",
          100: "#FFE8DB",
          200: "#FFD1B8",
          300: "#FFB38F",
          400: "#FF8B5B",
          500: "#F96A35",
          600: "#EA4E1B",
          700: "#C23610", // WCAG AA compliant on white
          800: "#9D2B0B",
          900: "#7E240B",
          950: "#431005",
          hover: "#E57040",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#E2F3F5", // Using primary-light as accent
          foreground: "#0E6973",
        },
        muted: {
          DEFAULT: "#9CA3AF",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "#10B981", // Emerald 500
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B", // Amber 500
          foreground: "#FFFFFF",
        },
        info: {
          DEFAULT: "#3B82F6", // Blue 500
          foreground: "#FFFFFF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        md: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
        lg: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        colored: "0 20px 40px -5px rgba(14, 105, 115, 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
