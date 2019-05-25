import babel from "rollup-plugin-babel";
import vuePlugin from "rollup-plugin-vue";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

const extensions = [".js", ".vue"];

export default {
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    vuePlugin(),
    babel({
      extensions,
      runtimeHelpers: true,
      exclude: "node_modules/**"
    }),
    nodeResolve({
      jsnext: true,
      extensions
    }),
    commonjs({
      extensions,
      ignoreGlobal: false
    })
  ],
  external: function(name) {
    return (
      /@babel\/runtime/.test(name) ||
      /vue/.test(name) ||
      /rxjs/.test(name) ||
      /src/.test(name)
    );
  }
}