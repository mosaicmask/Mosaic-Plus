import { defineComponent, computed, openBlock, createElementBlock, normalizeClass } from "vue";
import "../style/index.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "m-button" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`m-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["m-button", buttonStyle.value])
      }, " 我的第一个组件按钮66 ", 2);
    };
  }
});
export {
  _sfc_main as default
};
