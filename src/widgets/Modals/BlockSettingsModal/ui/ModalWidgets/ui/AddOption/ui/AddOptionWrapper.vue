<script lang="ts" setup>
import { ref, h, onMounted } from "vue";
import PlusIcon from "@/assets/icons/Other/PlusIcon.vue";

const optionVisible = defineModel<boolean>("optionVisible", { required: true });
defineProps<{ btnText: string; rules?: any }>();

const emit = defineEmits<{ (e: "clear", close?: boolean): void }>();
const hasMounted = ref<boolean>(false);

onMounted(() => {
  hasMounted.value = true;
});
</script>

<template>
  <Transition
    :class="{ 'no-transition': !hasMounted }"
    name="fade-down"
    mode="out-in"
  >
    <a-flex
      v-if="optionVisible"
      class="option-open"
      justify="space-between"
      align="end"
    >
      <slot />
      <a-button
        :class="['edit-btn', { rules: rules }]"
        type="text"
        @click="emit('clear', true)"
      >
        <span class="btn-text"> {{ $t.components.buttons.common.delete }}</span>
      </a-button>
    </a-flex>
    <a-button
      v-else
      class="edit-btn"
      type="text"
      :icon="h(PlusIcon)"
      @click="emit('clear')"
    >
      <span class="btn-text"> {{ btnText }}</span>
    </a-button>
  </Transition>
</template>

<style lang="scss" scoped>
.option-open {
  gap: 10px;
}

.no-transition {
  transition: none !important;
  animation: none !important;
}

.edit-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  height: fit-content;
  padding: 8px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;

  .btn-text {
    font-size: 14px;
  }

  svg {
    max-width: 14px;
    max-height: 14px;
  }

  &.rules {
    margin-bottom: 24px;
  }

  &:hover {
    border-color: var(--hover-primary-color);
  }
}

@media (max-width: 1024px) {
  .edit-btn {
    height: 38px;
    padding: 0 8px;

    .btn-text {
      font-size: 12px;
    }

    svg {
      max-width: 14px;
      max-height: 14px;
    }
  }
}

@media (max-width: 540px) {
  .option-open {
    flex-direction: column;
  }

  .edit-btn {
    width: 100%;
    justify-content: center;
    height: 36px;
    border-width: 1px;

    .btn-text {
      font-size: 10px;
    }

    svg {
      max-width: 15px;
      max-height: 15px;
    }
  }
}
</style>
