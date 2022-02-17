import vFlag from "./v-flag.vue";

const plugin = {
  install(Vue) {
    Vue.component("v-flag", vFlag);
  },
};

export default plugin;
