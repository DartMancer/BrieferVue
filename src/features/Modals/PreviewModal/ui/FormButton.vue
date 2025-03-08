<script setup lang="ts"></script>

<template>
  <a-button class="send-btn" html-type="submit">
    <span class="send-btn-text">{{ $t.components.buttons.common.send }}</span>
  </a-button>
</template>

<style lang="scss" scoped>
.send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: fit-content;
  padding: 10px 60px;
  border: 2px solid var(--accent-color);
  border-radius: 12px;

  .send-btn-text {
    font-size: 20px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--primary-color);
      background-color: var(--primary-color);
    }
  }

  &:active {
    border-color: var(--hover-primary-color);
    background-color: var(--hover-primary-color);
    transform: scale(0.98);
  }
}

@media (max-width: 1024px) {
  .send-btn {
    border-radius: 10px;

    .send-btn-text {
      font-size: 16px;
    }
  }
}

@media (max-width: 540px) {
  .send-btn {
    padding: 7px 30px;
    border-radius: 8px;

    .send-btn-text {
      font-size: 14px;
    }
  }
}
</style>
