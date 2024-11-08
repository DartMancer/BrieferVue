<script lang="ts" setup>
import AppBtn from '@/components/common/AppBtn.vue';
import DownloadIcon from '@/assets/icons/DownloadIcon.vue';
import { ref, onMounted } from 'vue';
import { storage } from '@/firebase/config';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

const fileUrl = ref<string>('');

const fetchFileUrl = async () => {
    const fileRef = storageRef(storage, 'BrieferPresentation.pptx');
    try {
        fileUrl.value = await getDownloadURL(fileRef);
    } catch (error) {
        console.error("Ошибка при получении ссылки на файл:", error);
    }
};


const downloadFile = () => {
    if (fileUrl.value) {
        const link = document.createElement('a');
        link.href = fileUrl.value;
        link.download = 'BrieferPresentation.pptx';
        link.click();
    }
};

onMounted(fetchFileUrl);
</script>

<template>
    <AppBtn @click="downloadFile" class="download-button">
        <DownloadIcon class="icon" />
        Презентация
    </AppBtn>
</template>

<style lang="scss" scoped>
.download-button {
    border: solid var(--accent-color) 2px;
    padding: 25px 50px;
    background-color: var(--element-color);
    color: var(--accent-color);
    font-family: 'Montserrat Alternates';
    font-weight: 200;
    fill: var(--accent-color);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    svg {
        width: 25px;
        height: 25px;
    }
}

.download-button:hover {
    background: var(--blue-gradient);
    border-color: var(--element-color);
    color: var(--white-color);
    fill: var(--white-color);
    transform: scale(1.1) translateY(-5px);
    box-shadow: var(--shadow-btn);
}
</style>
