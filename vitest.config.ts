import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/**",
      "**/lib/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,vite,vitest}.config.*",
    ],
  },
});
