<script lang="ts" setup>
const value = defineModel<number | undefined>("value", { required: true });

defineProps<{
  name: string | string[];
  placeholder: string;
  title?: string | null;
  precision?: number | null;
  step?: number | null;
  subtitle?: string | null;
  addon?: string;
  min?: number;
  max?: number;
  rules?: any;
}>();
</script>

<template>
  <a-flex
    class="input-section"
    :style="{ gap: !!title || !!subtitle ? '10px' : '0' }"
    vertical
  >
    <span class="title" v-if="title">{{ title }}</span>
    <span class="subtitle" v-if="subtitle">{{ subtitle }}</span>
    <a-form-item :name="name" :rules="rules">
      <a-input-number
        v-model:value="value"
        :addon-before="addon"
        :placeholder="placeholder"
        :precision="precision ?? 0"
        :step="step ?? 1"
        :controls="false"
        :min="min ?? 0"
        :max="max ?? Infinity"
        allow-clear
      >
        <template #suffix v-if="$slots.suffix">
          <slot name="suffix" />
        </template>
      </a-input-number>
    </a-form-item>
  </a-flex>
</template>

<style lang="scss" scoped>
.input-section {
  .title {
    font-size: 20px;
    color: var(--white-color);
  }

  .subtitle {
    font-size: 14px;
  }
}

@media (max-width: 1024px) {
  .input-section {
    .title {
      font-size: 18px;
    }

    .subtitle {
      font-size: 12px;
    }
  }
}

@media (max-width: 540px) {
  .input-section {
    .title {
      font-size: 14px;
    }

    .subtitle {
      font-size: 10px;
    }
  }
}
</style>
