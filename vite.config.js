import { defineConfig } from "vite";
import path from "path";
import typescript from "@rollup/plugin-typescript";

const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig({
  build: {
    lib: {
      entry: resolvePath("./src/index.ts"),
      name: "index",
    },
    rollupOptions: {
      plugins: [
        typescript({
          target: "es2020",
          rootDir: resolvePath("./src"),
          declaration: true,
          declarationDir: resolvePath("./dist"),
          exclude: resolvePath("./node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
