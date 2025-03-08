<script lang="ts" setup>
import { ComponentPublicInstance, computed, nextTick, ref, watch } from "vue";

import { v4 as uuidv4 } from "uuid";
import { storeToRefs } from "pinia";
import Draggable from "vuedraggable";

import GlobalTexts from "@/app/locale";
import { useScreenStore } from "@/app/providers";
import { OptionType } from "@/shared/types";
import DragVerticalIcon from "@/assets/icons/Other/DragVerticalIcon.vue";
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";
import { useFormStore } from "@/entities/form";
import { Input } from "@/widgets/Modals/ModalFields";

const variables = defineModel<OptionType[]>("variables", { required: true });

const { platform } = storeToRefs(useScreenStore());
const { toggleSaveBtnStatus } = useFormStore();

const dragOptions = computed(() => ({
  animation: 200,
  group: { name: "people", pull: "clone", put: true },
  disabled: false,
  ghostClass: "ghost",
}));

const variablesList = ref<ComponentPublicInstance | null>(null);

const isFirstVariableFilled = computed(
  () => variables.value[0]?.label.trim().length <= 0
);

const isDesktop = computed(
  () => platform.value === "desktop" || platform.value === "laptop"
);

const addVariable = () => {
  const variable = GlobalTexts.components.placeholder.variable;
  const varNumber = variables.value.length + 1;
  const variableItem = <OptionType>{
    value: uuidv4(),
    label: `${variable} ${varNumber}`,
  };

  variables.value.push(variableItem);

  nextTick(() => {
    const container = variablesList.value?.$el as HTMLElement | null;
    const inputs = container?.querySelectorAll(".variable-input input");
    if (inputs?.length) {
      const lastInput = inputs[inputs.length - 1] as HTMLInputElement;
      lastInput.focus();
      lastInput.select();
    }
  });
};

const removeVariable = (id: string) => {
  const removeIndex = variables.value.findIndex(
    (variable) => variable.value === id
  );
  if (removeIndex !== -1) variables.value.splice(removeIndex, 1);
};

watch(isFirstVariableFilled, (newStatus) => {
  toggleSaveBtnStatus(newStatus);
});
</script>

<template>
  <a-flex class="variables-list-wrapper" vertical>
    <Draggable
      ref="variablesList"
      class="variables-list"
      v-model="variables"
      v-bind="dragOptions"
      item-key="value"
      :handle="'.drag-zone'"
    >
      <template #item="{ element, index }">
        <div>
          <a-flex class="variable" justify="space-between" align="center">
            <a-flex
              class="drag-icon-wrapper drag-zone"
              justify="center"
              align="center"
            >
              <DragVerticalIcon class="drag-icon" />
            </a-flex>
            <Input
              class="variable-input"
              name=""
              v-model:value="element.label"
              :placeholder="$t.components.placeholder.enterVariable"
            >
              <template #suffix>
                <div
                  v-if="index !== 0 && isDesktop"
                  class="remove-btn"
                  @click="removeVariable(element.value)"
                >
                  <TrashIcon />
                </div>
              </template>
            </Input>
            <div
              v-if="index !== 0 && !isDesktop"
              class="remove-btn"
              @click="removeVariable(element.value)"
            >
              <TrashIcon />
            </div>
            <!-- :ref="(el: HTMLInputElement | null) => inputRefs[index] = el" -->
            <!-- <template #suffix>
                          <AppBtn
                            v-if="index !== 0"
                            class="editable-list__item__button"
                            @click="removeItem(index)"
                          >
                            <TrashIcon class="editable-list__item__trash-icon" />
                          </AppBtn>
                        </template> -->
          </a-flex>
        </div>
      </template>
    </Draggable>
    <a-button class="add-variable-button" @click="addVariable">
      <span class="btn-text">
        {{ $t.components.buttons.block.addVariable }}
      </span>
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.variables-list-wrapper {
  gap: 10px;

  .variables-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .variable {
      .variable-input {
        width: 100%;
      }

      .drag-icon-wrapper {
        cursor: move;
        min-width: 24px;
        height: 42px;

        .drag-icon {
          max-width: 20px;
          max-height: 20px;
        }
      }

      .remove-btn {
        cursor: pointer;
        display: flex;
        width: 12px;
        height: 14px;

        svg {
          max-width: 12px;
          max-height: 12px;
          fill: var(--accent-color);
        }

        &:hover {
          svg {
            fill: var(--error-color);
          }
        }
      }
    }
  }

  .add-variable-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 42px;
    padding: 0 10px;
    margin-left: 24px;
    border: 2px solid var(--accent-color);
    border-radius: 8px;
    background-color: var(--element-color);

    .btn-text {
      font-size: 14px;
      color: var(--accent-color);
    }

    &:hover {
      border-color: var(--hover-accent-color);
    }
  }

  .ghost {
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .variables-list-wrapper {
    .variables-list {
      .variable {
        .drag-icon-wrapper {
          height: 38px;
        }

        .remove-btn {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 24px;
          height: 38px;

          svg {
            max-width: 16px;
            max-height: 16px;
            fill: var(--error-color);
          }
        }
      }
    }

    .add-variable-button {
      height: 38px;

      .btn-text {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 540px) {
  .variables-list-wrapper {
    .variables-list {
      .variable {
        .drag-icon-wrapper,
        .remove-btn {
          height: 36px;
        }
      }
    }

    .add-variable-button {
      height: 36px;
      border: solid 1px var(--accent-color);

      .btn-text {
        font-size: 10px;
      }
    }
  }
}
</style>
