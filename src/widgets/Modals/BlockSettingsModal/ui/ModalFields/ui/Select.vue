<script lang="ts" setup>
import { computed } from "vue";
import { CURRENT_OPTIONS } from "@/shared/constants";
import { BlockType } from "@/entities/form";

const value = defineModel<string>("value", { required: true });

const props = defineProps<{
  name: string | string[];
  placeholder: string;
  type: BlockType;
  subtitle?: string | null;
  rules?: any;
}>();

const options = computed(() => {
  return CURRENT_OPTIONS[props.type as keyof typeof CURRENT_OPTIONS] ?? [];
});

const popupContainer = () => document.querySelector(".custom-select");
</script>

<template>
  <a-flex
    class="select-section"
    :style="{ gap: !!subtitle ? '10px' : '0' }"
    vertical
  >
    <span class="subtitle" v-if="subtitle">{{ subtitle }}</span>
    <a-form-item :name="name" :rules="rules">
      <a-select
        class="custom-select"
        v-model:value="value"
        :options="options"
        :placeholder="placeholder"
        :getPopupContainer="popupContainer"
      />
    </a-form-item>
  </a-flex>
</template>

<style lang="scss" scoped>
.select-section {
  .subtitle {
    font-size: 16px;
    color: var(--white-color);
  }
}

@media (max-width: 1024px) {
  .select-section {
    .subtitle {
      font-size: 14px;
    }
  }
}

@media (max-width: 540px) {
  .select-section {
    .subtitle {
      font-size: 12px;
    }
  }
}
</style>
