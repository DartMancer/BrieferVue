<script lang="ts" setup>
const value = defineModel<string | undefined>("value", { required: true });

defineProps<{
  name: string | string[];
  placeholder: string;
  title?: string | null;
  subtitle?: string | null;
  rules?: any;
  min?: number;
  max?: number;
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
      <a-textarea
        v-model:value="value"
        :placeholder="placeholder"
        :autoSize="{ minRows: min ?? 1, maxRows: max ?? 2 }"
        allow-clear
      >
        <template #suffix v-if="$slots.suffix">
          <slot name="suffix" />
        </template>
        <template #addonBefore v-if="$slots.addonBefore">
          <slot name="addonBefore" />
        </template>
      </a-textarea>
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
