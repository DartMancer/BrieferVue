<script lang="ts" setup>
import { BlockConfiguration } from "@/entities/form";
import AddTextButton from "./AddTextButton.vue";
import DefaultButtons from "./DefaultButtons.vue";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});
</script>

<template>
  <a-flex class="edit-btns" vertical>
    <AddTextButton
      v-model:textValue="tempBlock.commentary"
      name="commentary"
      :subtitle="$t.components.placeholder.commentTitle"
      :btnText="$t.components.buttons.block.addCommentary"
    />

    <DefaultButtons v-model:tempBlock="tempBlock" />
  </a-flex>
</template>

<style lang="scss" scoped>
.edit-btns {
  width: 100%;
  gap: 11px;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 1024px) {
  .edit-btns {
    .edit-btn {
      .btn-text {
        font-size: 12px;
      }

      svg {
        max-width: 14px;
        max-height: 14px;
      }
    }
  }
}

@media (max-width: 540px) {
  .edit-btns {
    .edit-btn {
      border: 1px solid var(--primary-color);

      .btn-text {
        font-size: 10px;
      }

      svg {
        max-width: 12px;
        max-height: 12px;
      }
    }
  }
}
</style>
