import replace from "rollup-plugin-replace";
import sass from 'rollup-plugin-sass';
import baseConfig from "./rollup.base";

const plugins = baseConfig.plugins.slice().concat([sass({
  insert: true
})]);
plugins.splice(
  0,
  1,
  replace({
    "process.env.NODE_ENV": JSON.stringify("development")
  })
);

export default {
  input: `src/index.vue`,
  watch: {
    include: ["src/**"],
    exclude: "node_modules/**"
  },
  output: {
    file: `dist/bundle.js`,
    name: "vcomp",
    // sourcemap: true,
    format: "umd"
  },
  plugins,
  onwarn (warning) {
    // 跳过某些警告
    if (warning.code === "EVAL") return;
  
    // 抛出异常
    // if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);
  
    // 控制台打印一切警告
    console.warn(warning.message);
  }
}
