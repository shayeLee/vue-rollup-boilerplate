import babel from "rollup-plugin-babel";
import vuePlugin from "rollup-plugin-vue";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    vuePlugin(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**"
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      extensions: [".js", ".vue"],
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