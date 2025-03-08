<script lang="ts" setup>
import { FieldBlockBase, MultipleSelectSettings } from "@/entities/form";
import { reqFieldRules } from "@/features/Modals/PreviewModal/model";

const field = defineModel<FieldBlockBase>("field", { required: true });

const settings = field.value.settings as MultipleSelectSettings;
</script>

<template>
  <a-flex class="checkbox-list-wrapper">
    <a-form-item
      class="checkbox-list-container"
      :name="[field.id, 'value']"
      :rules="field.requiredField ? reqFieldRules.value : null"
    >
      <a-checkbox-group
        class="checkbox-list"
        v-model:value="field.value"
        :options="settings.variables"
      />
    </a-form-item>
  </a-flex>
</template>

<style lang="scss" scoped>
.checkbox-list-wrapper {
  width: 50%;

  .checkbox-list-container {
    width: 100%;

    .checkbox-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      :deep(.ant-checkbox-wrapper) {
        display: flex;
        align-items: center;
        height: 54px;
        gap: 10px;
        padding: 0 15px;
        margin: 0;
        font-size: 16px;
        border: 2px solid var(--accent-color);
        border-radius: 10px;
        background-color: var(--element-color);
        transition: 0.2s ease-in-out;

        .ant-checkbox-inner {
          width: 24px;
          height: 24px;
          border-width: 2px;
          background-color: transparent !important;
          border-color: var(--accent-color);

          &::after {
            width: 6px;
            height: 10px;
            transform: rotate(45deg) scale(1) translate(-45%, -65%);
            border-color: var(--primary-color);
          }
        }

        &.ant-checkbox-wrapper-checked {
          border-color: var(--primary-color);
          box-shadow: 0 0 20px rgba($color: #cf4d9c, $alpha: 0.7);

          .ant-checkbox-inner {
            border-color: var(--primary-color);
          }
        }

        & span {
          padding: 0;
        }

        @media (hover: hover) {
          &:hover {
            border-color: var(--hover-primary-color);

            .ant-checkbox-checked::after {
              border-color: var(--hover-primary-color);
            }

            .ant-checkbox-inner {
              border-color: var(--hover-primary-color);

              &::after {
                border-color: var(--hover-primary-color);
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) and (hover: none) {
  .checkbox-list-wrapper {
    width: 75%;

    .checkbox-list {
      :deep(.ant-checkbox-wrapper) {
        height: 45px;
        padding: 0 12px;
        font-size: 14px;
        border-radius: 8px;

        .ant-checkbox-inner {
          width: 21px;
          height: 21px;

          &::after {
            width: 4px;
            height: 8px;
            transform: rotate(45deg) scale(1) translate(-35%, -70%);
          }
        }
      }
    }
  }
}

@media (max-width: 540px) and (hover: none) {
  .checkbox-list-wrapper {
    width: 100%;

    .checkbox-list {
      :deep(.ant-checkbox-wrapper) {
        height: 38px;
        padding: 0 10px;
        font-size: 12px;
        border-width: 1px;

        .ant-checkbox-inner {
          width: 18px;
          height: 18px;
          border-width: 1px;

          &::after {
            border-width: 1px;
            transform: rotate(45deg) scale(1) translate(-35%, -65%);
          }
        }
      }
      :deep(.ant-checkbox-checked) {
        &::after {
          border-width: 1px !important;
        }
      }
    }
  }
}
</style>
