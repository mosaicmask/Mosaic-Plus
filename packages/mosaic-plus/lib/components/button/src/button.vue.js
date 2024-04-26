"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/index.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "m-button" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = vue.computed(() => {
      return { [`m-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["m-button", buttonStyle.value])
      }, " 我的第一个组件按钮66 ", 2);
    };
  }
});
exports.default = _sfc_main;
