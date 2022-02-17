<template>
  <img v-bind="$attrs" :src="image" loading="lazy" />
</template>

<script>
import codes from "./codes";
export default {
  name: "v-flag",
  props: {
    code: String,
  },
  computed: {
    image() {
      let code = "aq";
      if (codes[this.code]) code = this.code;
      return `https://flagcdn.com/${code}.svg`;
    },
  },
  mounted() {
    if (this.code && !codes[this.code])
      console.error("Invalid country code provided. Defaulted to aq.");
    if (!this.code)
      console.error("No country code was provided. Defaulted to aq");
  },
};
</script>
