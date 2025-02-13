<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    title: string;
    value: number;
}>();

const emit = defineEmits<{
    (e: 'update:value', value: number): void;
}>();

const localValue = ref(props.value);

watch(
    () => props.value,
    (newValue) => {
        localValue.value = newValue;
    }
);

const handleInput = (val: number) => {
    localValue.value = val;
    emit('update:value', val);
};

</script>

<template>
    <div>
        <p class="title">{{ props.title }}</p>
        <a-input-number class="input" id="inputNumber" v-model:value="localValue" :min="1" :max="20"
            @step="handleInput" />
    </div>
</template>

<style lang="scss" scoped>
.title {
    color: var(--white-color);
    font-family: 'Nunito';
    margin-bottom: 0.5vw;
}

.input {
    width: 85%;
    background-color: transparent;
    border: solid 0.15vw var(--accent-color);
}
</style>