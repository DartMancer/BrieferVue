<script lang="ts" setup>
import { ref, computed } from "vue";
import { NotificationPlacement, notification } from "ant-design-vue";
import { copyToClipboard } from "@/shared/utils";
import { BlockConfiguration } from "@/entities/form";
import { generateColorPalette, getTextColorForBackground } from "../model";
import PalleteItem from "./PalleteItem.vue";
import GenerateButton from "./GenerateButton.vue";

const props = defineProps<{
  formBlock: BlockConfiguration;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState", {
  required: true,
});

const key = Object.keys(previewFormState.value!)[props.index];

const [api, contextHolder] = notification.useNotification();

const open = (placement: NotificationPlacement) => openNotification(placement);
const openNotification = (placement: NotificationPlacement) => {
  api.success({
    message: `Скопировано в буфер обмена`,
    placement,
  });
};

const showNotification = () => {
  open("bottomRight");
};

const lockedColors = ref<boolean[]>(new Array(5).fill(false));
const palette = ref(generateColorPalette(5, lockedColors.value));
const currentPalette = ref<string[]>(new Array(5).fill(""));
const colorPickerVisible = ref<number | null>(null);

const initializePalette = () => {
  palette.value = generateColorPalette(5, lockedColors.value);
  currentPalette.value = palette.value.map((item) => item.color);
  previewFormState.value[key] = currentPalette.value;
};

const formatPalette = () => {
  const newPalette = ref<string[]>([]);
  for (let i = 0; i < palette.value.length; i++) {
    newPalette.value.push(palette.value[i].color);
  }
  return newPalette;
};

initializePalette();

const generatePalette = () => {
  const newPalette = generateColorPalette(
    palette.value.length,
    lockedColors.value,
    currentPalette.value
  );
  palette.value = newPalette;
  currentPalette.value = newPalette.map((item) => item.color);
  previewFormState.value[key] = currentPalette.value;
};

const addColor = (index: number) => {
  const newColor = generateColorPalette(1, lockedColors.value)[0];
  palette.value.splice(index, 0, newColor);
  lockedColors.value.splice(index, 0, false);
  previewFormState.value[key] = formatPalette().value;
};

const updateColor = (color: string, index: number) => {
  palette.value[index] = { color, isLocked: false };
  currentPalette.value[index] = color;
  colorPickerVisible.value = null;
  previewFormState.value[key] = currentPalette.value;
};

const removeColor = (index: number) => {
  if (palette.value.length > 2) {
    palette.value.splice(index, 1);
    lockedColors.value.splice(index, 1);
    previewFormState.value[key] = formatPalette().value;
  }
};

const toggleLock = (index: number) => {
  lockedColors.value[index] = !lockedColors.value[index];
};

const openColorPicker = (index: number) => {
  if (colorPickerVisible.value === index) {
    colorPickerVisible.value = null;
    return;
  }
  colorPickerVisible.value = index;
};

const isAdd = computed(() => (palette.value.length < 5 ? true : false));
const isRemove = computed(() => (palette.value.length > 2 ? true : false));
</script>

<template>
  <a-flex>
    <PalleteItem
      v-for="(item, index) in palette"
      :key="index"
      :color="item.color"
      :backColor="getTextColorForBackground(item.color)"
      :index="index"
      :isAdd="isAdd && index < palette.length - 1"
      :isRemove="isRemove"
      :locked="lockedColors[index]"
      :colorPickerVisible="colorPickerVisible === index"
      @add="addColor(index)"
      @update="updateColor(item.color, index)"
      @remove="removeColor(index)"
      @copy="copyToClipboard(item.color, () => showNotification())"
      @toggle-lock="toggleLock(index)"
      @open-color-picker="openColorPicker(index)"
    />
  </a-flex>
  <GenerateButton @generatePalette="generatePalette" />
  <contextHolder />
</template>
