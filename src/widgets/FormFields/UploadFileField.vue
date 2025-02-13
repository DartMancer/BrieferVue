<script setup lang="ts">
import { ref } from "vue";
import { UploadFile } from "ant-design-vue";
import { AppBtn } from "@/shared/ui";
import UploadIcon from "@/assets/icons/UploadIcon.vue";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState", {
  required: true,
});

const key = Object.keys(previewFormState.value!)[props.index];

const fileList = ref<UploadFile[]>([]);
const maxFiles = ref<number>(props.formBlock.fileModel?.maxFiles ?? 20);
// const maxSize = ref<number>(props.formBlock.fileModel?.maxSize ?? 20);
// const maxSizeBytes = maxSize.value * 1024 * 1024;
// const sizeCounter = ref<number>(0);

// const handleFileChange = (event: Event) => {
//   const input = event.target as HTMLInputElement;
//   const files = input.files;

//   if (!files) return;

//   for (const file of files) {
//     const newSize = sizeCounter.value + file.size;

//     if (fileList.value.length >= maxFiles.value) {
//       message.error(`Не может быть загружено больше ${maxFiles.value} файлов.`);
//       continue;
//     }

//     if (newSize > maxSizeBytes) {
//       message.error(
//         `Общий размер файлов не может превышать ${maxSize.value} MB.`
//       );
//       continue;
//     }

//     fileList.value.push(file);
//     sizeCounter.value += file.size;
//   }

//   input.value = "";
// };

const customRequest = () => {
  for (let i = 0; i < fileList.value.length; i++) {
    fileList.value[i].status = "done";
  }
};

const onChange = () => {
  previewFormState.value[key] = fileList.value;
};
</script>

<template>
  <a-flex vertical gap="middle" align="start">
    <a-upload
      v-model:file-list="fileList"
      :multiple="true"
      :customRequest="customRequest"
      :maxCount="maxFiles"
      @change="onChange"
    >
      <a-flex gap="small" justify="center" align="center">
        <AppBtn class="upload-button">
          <UploadIcon class="upload-button__icon" />
          <p class="upload-button__title">Загрузить</p>
        </AppBtn>
      </a-flex>
    </a-upload>
    <!-- <a-flex align="center" gap="middle">
      <label class="upload-button">
        <a-flex gap="small" justify="center" align="center">
          <UploadIcon class="upload-button__icon" />
          <p class="upload-button__title">Загрузить</p>
          <input type="file" multiple hidden @change="handleFileChange" />
        </a-flex>
      </label>
      <p class="constraint-text">
        До {{ maxFiles }} файлов, допустимый общий размер файлов —
        {{ maxSize }} МБ.
      </p>
    </a-flex>

    <a-flex class="file-list" vertical>
      <a-flex
        class="file-list-item"
        v-for="(file, index) in fileList"
        :key="index"
        gap="large"
        justify="space-between"
        align="center"
      >
        <p class="file-list-item__name">{{ file.name }}</p>
        <AppBtn class="file-list-item__button" @click="removeFile(file)">
          <TrashIcon class="file-list-item__button__remove-icon" />
        </AppBtn>
      </a-flex>
    </a-flex> -->
  </a-flex>
</template>

<style lang="scss" scoped>
.upload-button {
  height: fit-content;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 0.4vw;
  padding-bottom: 0.4vw;
  border: solid 0.15vw var(--accent-color);
  border-radius: 0.5vw;
  background-color: var(--element-color);
  transition: 0.1s ease-in-out;

  &__icon {
    width: 1vw;
    height: 1vw;
  }

  &__title {
    color: var(--white-color);
    font-size: 1vw;
  }

  &:hover {
    border-color: var(--hover-accent-color);
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    box-shadow: 0 0 0.5vw var(--accent-color);
  }
}

.file-list-item {
  &__name {
    color: var(--accent-color);
  }

  &__button {
    padding: 0;

    &__remove-icon {
      width: 1vw;
      height: 1vw;
      fill: var(--error-color);
      opacity: 0;
    }
  }

  &:hover {
    .file-list-item__button__remove-icon {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
}

.constraint-text {
  color: var(--accent-color);
  font-size: 0.85vw;
}
</style>
