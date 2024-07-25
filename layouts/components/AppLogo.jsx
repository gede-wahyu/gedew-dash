import rawLogo from "~/assets/logo/logo.svg?raw";

export default defineComponent({
  setup() {
    const logo = rawLogo.replace(/<svg/, '<svg width="32px" height="32px"');

    return () =>
      h("div", {
        innerHTML: logo,
        class: "text-primary",
        style: "line-height: 0;",
      });
  },
});
