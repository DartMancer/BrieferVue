<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
import { AppBtn } from "@/shared/ui";
import DownloadIcon from "@/assets/icons/DownloadIcon.vue";

const fileUrl = ref<string>("");

const fetchFileUrl = async () => {
  const fileRef = storageRef(storage, "Presentation/BrieferPresentation.pptx");
  try {
    fileUrl.value = await getDownloadURL(fileRef);
  } catch (error) {
    console.error("Ошибка при получении ссылки на файл:", error);
  }
};

const downloadFile = () => {
  if (fileUrl.value) {
    const link = document.createElement("a");
    link.href = fileUrl.value;
    link.download = "Presentation/BrieferPresentation.pptx";
    link.click();
  }
};

onMounted(fetchFileUrl);
</script>

<template>
  <Transition name="fade" mode="out-in">
    <AppBtn @click="downloadFile" class="download-button">
      <DownloadIcon class="icon" />
      <span class="download-button__text title">
        {{ $t.companyInfo.brieferPage.presentation }}
      </span>
    </AppBtn>
  </Transition>
</template>

<style lang="scss" scoped>
.download-button {
  border: solid 0.15vw var(--primary-color);
  padding: 25px 50px;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &__text {
    font-size: 1.2vw;
    font-weight: 200;
    color: var(--primary-color);
  }

  svg {
    width: 2vw;
    height: 2vw;
    fill: var(--primary-color);
  }

  &:hover &__text {
    color: var(--white-color);
  }
}

.download-button:hover {
  background-color: var(--hover-primary-color);
  border-color: var(--hover-primary-color);
  transform: scale(1.1) translateY(-5px);
  box-shadow: var(--shadow-btn);

  svg {
    fill: var(--white-color);
  }
}
</style>
