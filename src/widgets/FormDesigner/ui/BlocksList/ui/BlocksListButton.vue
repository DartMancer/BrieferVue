<script setup lang="ts">
import ShortMenuIcon from "@/assets/icons/Buttons/ShortMenuIcon.vue";

const listVisible = defineModel<boolean>("listVisible", { required: true });

const toggleList = () => {
  listVisible.value = !listVisible.value;
};
</script>

<template>
  <a-flex class="blocks-button" justify="flex-start" align="center">
    <a-button :class="['block-btn', { gap: listVisible }]" @click="toggleList">
      <span :class="['title', { visible: listVisible }]">
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
    transition: gap 0.3s ease-in-out;

    .title {
      max-width: 70px;
      font-size: 20px;
      overflow: hidden;
      transition: max-width 0.3s ease-in-out;

      &.visible {
        max-width: 0;
      }
    }

    svg {
      max-width: 20px;
      max-height: 20px;
      fill: var(--white-color);
    }

    &.gap {
      gap: 0;
    }
  }
}

@media (max-width: 540px) {
  .blocks-button {
    .block-btn {
      gap: 10px;
      border-radius: 8px;

      .title {
        max-width: 60px;
        font-size: 17px;
      }

      svg {
        max-width: 18px;
        max-height: 18px;
      }
    }
  }
}
</style>
