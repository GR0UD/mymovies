import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    Pages({
      dirs: "src/pages",
      extensions: ["ts", "tsx"],
    }),
  ],
});
