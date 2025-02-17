<script lang="ts" setup>
import { AppBtn } from "@/shared/ui";
import LockIcon from "@/assets/icons/Buttons/LockIcon.vue";
import UnlockIcon from "@/assets/icons/Buttons/UnlockIcon.vue";
import CopyIcon from "@/assets/icons/Buttons/CopyIcon.vue";
import CloseIcon from "@/assets/icons/Other/CloseIcon.vue";
import PlusIcon from "@/assets/icons/Other/PlusIcon.vue";
import ColorTextButton from "./ColorTextButton.vue";

defineProps<{
  color: string;
  backColor: string;
  index: number;
  isAdd: boolean;
  isRemove: boolean;
  locked: boolean;
  colorPickerVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "add"): void;
  (e: "remove"): void;
  (e: "update"): void;
  (e: "copy"): void;
  (e: "toggle-lock"): void;
  (e: "open-color-picker"): void;
}>();
</script>

<template>
  <a-flex
    :style="{ color: backColor, backgroundColor: color }"
    class="color-box"
    justify="flex-end"
    align="center"
    vertical
    gap="middle"
  >
    <a-flex vertical class="color-box__buttons">
      <AppBtn class="palette-icon-button" @click="emit('copy')">
        <CopyIcon :style="{ fill: backColor }" />
      </AppBtn>
      <AppBtn
        v-if="isRemove"
        class="palette-icon-button"
        @click="emit('remove')"
      >
        <CloseIcon class="remove-icon" :style="{ fill: backColor }" />
      </AppBtn>
      <AppBtn
        class="palette-icon-button"
        :class="{ locked }"
        @click="emit('toggle-lock')"
      >
        <LockIcon v-if="locked" :style="{ fill: backColor }" />
        <UnlockIcon v-else :style="{ fill: backColor }" />
      </AppBtn>
    </a-flex>
    <ColorTextButton
      :color="color"
      :backColor="backColor"
      :index="index"
      @openColorPicker="emit('open-color-picker')"
    />
    <div v-if="colorPickerVisible" class="color-picker">
      <!-- <v-color-picker v-model="color" @input="emit('update')" :modes="['hex']" /> -->
      <v-color-picker
        :model-value="color"
        @input="$emit('update')"
        :modes="['hex']"
      />
    </div>
    <a-flex v-if="isAdd" class="add-area" justify="center" align="center">
      <a-flex class="add-background-button" justify="center" align="center">
        <PlusIcon class="add-background-button__icon" @click="emit('add')" />
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.color-box {
  width: 100%;
  position: relative;
  overflow: visible;

  &:first-child {
    border-top-left-radius: 0.5vw;
    border-bottom-left-radius: 0.5vw;
  }

  &:last-child {
    border-top-right-radius: 0.5vw;
    border-bottom-right-radius: 0.5vw;
  }

  &__buttons {
    margin-top: 1vw;
  }

  &:hover .palette-icon-button {
    opacity: 1;
  }

  & svg {
    width: 1.2vw;
    height: 1.2vw;
  }

  .remove-icon {
    width: 1vw;
    height: 1vw;
    transition: 3s ease;
  }
}

.palette-icon-button {
  opacity: 0;
  padding-right: 0.7vw;
  padding-left: 0.7vw;
  transition: 0.1s ease;

  &:active {
    transform: scale(0.9);
  }

  &.locked {
    opacity: 1 !important;
  }
}

.color-picker {
  position: absolute;
  bottom: 4vw;
  z-index: 1000;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.add-area {
  width: 2vw;
  height: 100%;
  right: -1vw;
  position: absolute;
  z-index: 10;

  &:hover .add-background-button {
    width: 2vw;
    height: 2vw;
    border: none;
    border-radius: 100%;
    background-color: var(--white-color);
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
      transition: 0.3s ease;
    }

    &__icon {
      max-width: 1.2vw;
      max-height: 1.2vw;
      fill: black;
      margin: 0.6vw;
    }
  }
}
</style>
