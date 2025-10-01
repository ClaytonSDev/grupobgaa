import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // 👈 ideal para Vercel
  plugins: [react()],
  server: {
    port: 5173,
  },
});
