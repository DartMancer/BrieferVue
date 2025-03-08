<script lang="ts" setup>
defineProps<{
  btnText: string;
}>();
</script>

<template>
  <a-button class="form-button">
    <span class="form-button-text">
      {{ btnText }}
    </span>
  </a-button>
</template>

<style lang="scss" scoped>
.form-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 20px 50px;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  background-color: var(--background-color);
  transition: 0.2s ease-in-out;

  .form-button-text {
    font-size: 25px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--primary-color);
      background-color: var(--primary-color);
      box-shadow: 0 0 20px var(--hover-primary-color);
    }
  }

  &:active {
    transform: scale(0.97);
    border-color: var(--hover-primary-color);
    background-color: var(--hover-primary-color);
  }
}

@media (max-width: 1280px) {
  .form-button {
    padding: 16px 50px;
    border-radius: 11px;

    .form-button-text {
      font-size: 22px;
    }
  }
}

@media (max-width: 1024px) {
  .form-button {
    padding: 14px 50px;
    border-radius: 11px;

    .form-button-text {
      font-size: 18px;
    }
  }
}

@media (max-width: 540px) {
  .form-button {
    padding: 12px 40px;
    border-radius: 8px;

    .form-button-text {
      font-size: 16px;
    }
  }
}
</style>
