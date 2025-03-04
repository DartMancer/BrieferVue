<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useFormStore } from "@/entities/form";

const { saveBtnStatus } = storeToRefs(useFormStore());

const loading = defineModel<boolean>("loading", { required: true });

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <a-flex class="form-btns" justify="flex-end">
    <a-button class="form-btn" @click="emit('close')">
      <span class="btn-text">{{ $t.components.buttons.common.cancel }}</span>
    </a-button>
    <a-button
      :class="['form-btn primary', { disabled: saveBtnStatus }]"
      :disabled="saveBtnStatus"
      :loading="loading"
      html-type="submit"
    >
      <span class="btn-text">{{ $t.components.buttons.common.save }}</span>
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.form-btns {
  gap: 20px;

  .form-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    padding: 0 42px;
    border: 2px solid var(--accent-color);
    border-radius: 8px;
    background-color: transparent;
    transition: 0.2s ease-in-out;

    .btn-text {
      font-size: 16px;
      color: var(--accent-color);
      transition: 0.2s ease-in-out;
    }

    &.primary {
      padding: 0 30px;
      border-color: transparent;
      background-color: var(--primary-color);

      .btn-text {
        color: white;
      }

      &.disabled {
        background-color: #7e7e7e;

        &:hover {
          background-color: #6e6e6e;
          box-shadow: none;
        }

        &:active {
          transform: none;
        }
      }
    }

    &:hover {
      border-color: var(--hover-accent-color);
      box-shadow: 0 0 10px var(--hover-accent-color);

      .btn-text {
        color: var(--hover-accent-color);
      }

      &.primary {
        border-color: transparent;
        background-color: var(--hover-primary-color);
        box-shadow: 0 0 10px var(--primary-color);

        .btn-text {
          color: white;
        }
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

@media (max-width: 1024px) {
  .form-btns {
    gap: 10px;
    flex-direction: column-reverse;

    .form-btn {
      width: 100%;
      height: 31px;

      padding: 0;

      .btn-text {
        font-size: 14px;
      }

      &.primary {
        padding: 0;
      }
    }
  }
}

@media (max-width: 540px) {
  .form-btns {
    .form-btn {
      height: 28px;
      border-width: 1px;

      .btn-text {
        font-size: 12px;
      }
    }
  }
}
</style>
