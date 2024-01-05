import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Other configurations...
  optimizeDeps: {
    include: ["lodash"],
  },
  // other configurations...
  define: {
    // eslint-disable-next-line no-undef
    "process.env": process.env,
  },
});
