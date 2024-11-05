<script setup lang="ts">

const companyInfo = [
    { key: 'Название:', value: 'ООО “БРИФЕР”' },
    { key: 'ИНН:', value: '6161151700' },
    { key: 'Почта:', value: 'bitkovdmitriy@yandex.ru' },
    { key: 'Телефон:', value: '+7 (938) 117-91-41' },
];
</script>

<template>
    <div class="company-info-block">
        <h1 class="title">Информация о компании</h1>
        <a-flex vertical>
            <div v-for="(item, index) in companyInfo" :key="index" class="info-line">
                <a-flex horizontal justify="space-between">
                    <div class="key">{{ item.key }}</div>
                    <div class="value">{{ item.value }}</div>
                </a-flex>
            </div>
        </a-flex>
    </div>
</template>

<style scoped>
.company-info-block {
    width: 100%;
    padding: 30px;
    background-color: var(--element-color);
    border-radius: 20px;
    margin-right: 70px;
    margin-bottom: 70px;
}

.company-info-block h1 {
    color: var(--white-color);
    margin-bottom: 30px;
    font-size: 32px;
}

.info-line {
    margin-bottom: 20px;
}

.key {
    font-size: 20px;
    color: var(--accent-color);
}

.value {
    font-size: 20px;
    color: var(--white-color);
}
</style>