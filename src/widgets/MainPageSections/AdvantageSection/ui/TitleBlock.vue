<script lang="ts" setup>
defineProps<{
  title: string;
  without?: boolean;
}>();
</script>

<template>
  <a-flex
    justify="center"
    align="center"
    :class="['title-block', { without: without }]"
  >
    <span class="title-text">
      {{ title }}
      <span>
        <span class="title-text start">Brief</span>
        <span class="title-text end">er</span>
      </span>
    </span>
  </a-flex>
</template>

<style lang="scss" scoped>
.title-block {
  width: 100%;
  padding: 20px 15px;
  font-size: 30px;
  border: 2px solid var(--success-color);
  border-radius: 12px;
  background-color: rgba($color: #c0ff8f, $alpha: 0.5);

  .title-text {
    font-family: "Montserrat Alternates";

    &.start {
      font-weight: bold;
    }

    &.end {
      font-style: italic;
      font-weight: 200;
    }
  }

  &.without {
    border-color: var(--error-color);
    background-color: rgba($color: #ff7c7c, $alpha: 0.5);
  }
}

@media (max-width: 1280px) {
  .title-block {
    font-size: 25px;
    border-radius: 10px;
  }
}

@media (max-width: 1024px) {
  .title-block {
    font-size: 20px;
  }
}

@media (max-width: 540px) {
  .title-block {
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--success-color);
  }
}
</style>
