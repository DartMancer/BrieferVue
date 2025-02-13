<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
    subtitle: string;
    hintText: string;
    titleInput: string;
}>();

const emit = defineEmits<{
    (e: 'update:titleInput', value: string): void;
}>();

const localTitleInput = ref(props.titleInput);

watch(() => props.titleInput, (newVal) => {
    localTitleInput.value = newVal;
});

watch(localTitleInput, (newVal) => {
    emit('update:titleInput', newVal);
});

</script>

<template>
    <a-flex vertical>
        <p class="subtitle">{{ props.subtitle }}</p>
        <a-input v-model:value="localTitleInput" :placeholder="props.hintText" allow-clear />
    </a-flex>
</template>

<style lang="scss" scoped>
.subtitle {
    font-size: 1.2vw;
    margin-bottom: 0.3vw;
    color: var(--white-color);
    font-family: "Montserrat Alternates";
}
</style>