import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
export default defineConfig({
  plugins: [
    react(),
    Pages({
      // Optional: Customizing the routing folder
      dirs: "src/pages", // Standard er 'src/pages'
      extensions: ["js", "jsx"], // Specify the types for pages
    }),
  ],
});
