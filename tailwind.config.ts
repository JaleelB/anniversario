import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsla(var(--border))",
        input: "hsla(var(--input))",
        ring: "hsla(var(--ring))",
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsla(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))"
        },
        pink: {
          DEFAULT: "hsla(var(--heading-pink))"
        },
        blue: {
          DEFAULT: "hsla(var(--heading-blue))"
        },
        orange: {
          DEFAULT: "hsla(var(--heading-orange))"
        },
        dark: {
          DEFAULT: "hsla(var(--heading-dark))"
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
} satisfies Config;
