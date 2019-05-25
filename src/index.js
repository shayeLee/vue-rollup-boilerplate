import vcomp from './vcomp';

const install = function(Vue) {
  if (install.installed) return;

  install.installed = true;
  Vue.component(vcomp.name, vcomp);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  vcomp
};
