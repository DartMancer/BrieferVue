<script setup lang="ts">
import ShortMenuIcon from "@/assets/icons/Buttons/ShortMenuIcon.vue";
</script>

<template>
  <a-flex class="blocks-button" justify="flex-start" align="center">
    <a-button class="block-btn" @click="">
      <span class="title">
        {{ $t.pages.formDesigner.blocks }}
      </span>
      <ShortMenuIcon />
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.blocks-button {
  .block-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 37px;
    padding: 0 15px;
    border: none;
    border-radius: 10px;
    background-color: var(--element-color);

    svg {
      max-width: 20px;
      max-height: 20px;
      fill: var(--white-color);
    }
  }

  .title {
    font-size: 20px;
  }
}

@media (max-width: 540px) {
  .blocks-button {
    .block-btn {
      gap: 10px;
      border-radius: 8px;

      svg {
        max-width: 18px;
        max-height: 18px;
      }
    }

    .title {
      font-size: 17px;
    }
  }
}
</style>
