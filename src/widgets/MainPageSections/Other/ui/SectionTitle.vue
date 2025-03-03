<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <span class="title">{{ title }}</span>
</template>

<style lang="scss" scoped>
.title {
  font-size: 45px;
  text-align: center;
}

@media (max-width: 1024px) {
  .title {
    font-size: 40px;
  }
}

@media (max-width: 1024px) {
  .title {
    font-size: 30px;
  }
}

@media (max-width: 540px) {
  .title {
    font-size: 20px;
  }
}
</style>
