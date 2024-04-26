<!--按钮组件-->
<template>
  <button class="m-button" :class="buttonStyle">
    我的第一个组件按钮66
  </button>
</template>
<script lang="ts" setup>
import "../style/index.scss";
import {computed} from "vue";

defineOptions({name: "m-button"});

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return {[`m-button--${buttonProps.type}`]: buttonProps.type};
});
</script>
