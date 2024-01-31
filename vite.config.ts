import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    define: {
      "process.env.VITE_API_KEY": JSON.stringify(env.VITE_API_KEY),
    },
    plugins: [react()],
  };
});
