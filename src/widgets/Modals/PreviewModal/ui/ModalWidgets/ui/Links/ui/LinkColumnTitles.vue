<template>
  <a-flex class="col-titles">
    <span class="col-title">
      {{ $t.components.placeholder.linkUrlLabel }}
    </span>
    <span class="col-title">
      {{ $t.components.placeholder.linkDescriptionLabel }}
    </span>
  </a-flex>
</template>

<style lang="scss" scoped>
.col-titles {
  width: calc(100% - 42px);
  align-items: end;
  gap: 10px;

  .col-title {
    width: 100%;
    color: var(--accent-color);
  }
}
</style>
