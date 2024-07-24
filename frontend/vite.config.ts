import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/Default.module.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
      "@": "/src",
    },
  },
  // build: {
  //   sourcemap: true,
  // },
});
