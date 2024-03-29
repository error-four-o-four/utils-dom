import { defineConfig } from "vite";

import path from "path";
import typescript from "@rollup/plugin-typescript";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "dom",
      fileName: "dom",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          tsconfig: 'tsconfig.json',
          declaration: true,
          declarationDir: path.resolve(__dirname, "lib/types"),
          outDir: "lib",
        })
      ],
    },
  },
});
