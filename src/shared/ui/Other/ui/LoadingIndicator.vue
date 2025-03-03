<script lang="ts" setup>
import { h, ref } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";

const loading = ref(false);

const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "24px",
    color: "var(--accent-color)",
  },
  spin: true,
});

function simulateLoading() {
  loading.value = true;

  // setTimeout(() => {
  //   loading.value = false;
  // }, 1000);
}

simulateLoading();
</script>

<template>
  <a-spin v-if="loading" :indicator="indicator" />
</template>
