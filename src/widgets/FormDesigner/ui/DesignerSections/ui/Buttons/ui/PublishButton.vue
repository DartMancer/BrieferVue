<script setup lang="ts"></script>

<template>
  <a-button class="publish-btn">
    <span class="btn-text">{{ $t.components.buttons.form.publish }}</span>
  </a-button>
</template>

<style lang="scss" scoped>
.publish-btn {
  height: fit-content;

  .btn-text {
    font-size: 20px;
    color: var(--white-color);
  }
}

@media (max-width: 1280px) {
  .publish-btn {
    .btn-text {
      font-size: 16px;
    }
  }
}

@media (max-width: 1024px) {
  .publish-btn {
    .btn-text {
      font-size: 14px;
    }
  }
}

@media (max-width: 540px) {
  .publish-btn {
    display: flex;
    justify-content: center;
  }
}
</style>
