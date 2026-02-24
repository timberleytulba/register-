import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: { stadium: "0 30px 80px rgba(0,0,0,.55)", card: "0 18px 40px rgba(0,0,0,.16)" },
      borderRadius: { xl2: "1.25rem", xl3: "1.5rem", xl4: "1.75rem" },
      keyframes: {
        haze: { "0%": { transform: "translate3d(-2%, -1%, 0) scale(1.02)", opacity: "0.85" }, "100%": { transform: "translate3d(2%, 1%, 0) scale(1.06)", opacity: "1" } },
        stripes: { "0%": { transform: "translate3d(-6%, -6%, 0)" }, "100%": { transform: "translate3d(6%, 6%, 0)" } },
        floaty: { "0%": { transform: "translate3d(0,0,0) scale(1)" }, "50%": { transform: "translate3d(18px,-16px,0) scale(1.03)" }, "100%": { transform: "translate3d(-10px,10px,0) scale(1)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } }
      },
      animation: { haze: "haze 10s ease-in-out infinite alternate", stripes: "stripes 18s linear infinite", floaty: "floaty 10s ease-in-out infinite", fadeUp: "fadeUp .65s ease forwards" }
    },
  },
  plugins: [],
} satisfies Config;
