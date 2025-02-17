<script setup lang="ts">
import { TextsCombined } from "@/shared/ui";
import { USEFULL_ITEMS } from "../model";
</script>

<template>
  <a-flex
    v-for="content in USEFULL_ITEMS"
    :class="['usefull-item', { reverse: content.reverse }]"
    align="center"
  >
    <span class="content">
      <TextsCombined :texts="content.content" />
    </span>
    <img class="img" :src="content.img" />
  </a-flex>
</template>

<style lang="scss" scoped>
.usefull-item {
  gap: 20px;
  font-size: 30px;
  padding: 0 50px;

  .content {
    width: 100%;

    :deep(.accent) {
      color: var(--primary-color);
      font-weight: bold;
    }
  }

  .img {
    max-height: 360px;
    pointer-events: none;
  }

  &.reverse {
    flex-direction: row-reverse;
    text-align: right;
  }
}

@media (max-width: 1280px) {
  .usefull-item {
    gap: 30px;
    font-size: 25px;
    padding: 0 20px;

    .img {
      max-height: 280px;
    }
  }
}

@media (max-width: 1024px) {
  .usefull-item {
    max-width: 300px;
    gap: 0;
    font-size: 16px;
    padding: 0px;
    text-align: center;
    flex-direction: column-reverse;

    .img {
      max-height: 130px;
    }

    &.reverse {
      flex-direction: column-reverse;
      text-align: center;
    }

    &:nth-child(3) {
      grid-column: 1 / -1;
    }
  }
}

@media (max-width: 540px) {
  .usefull-item {
    font-size: 13px;
    padding: 0 10px;
    text-align: center;
    flex-direction: column-reverse;

    .img {
      max-height: 130px;
    }
  }
}
</style>
