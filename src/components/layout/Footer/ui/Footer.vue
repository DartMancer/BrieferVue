<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import { NotificationPlacement, notification } from 'ant-design-vue';
import { copyToClipboard } from '@/utils/clipboardUtils';

const [api, contextHolder] = notification.useNotification();
const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

const open = (placement: NotificationPlacement) => openNotification(placement);
const openNotification = (placement: NotificationPlacement) => {
    api.success({
        message: `Скопировано в буфер обмена`,
        placement,
    });
};

const showNotification = () => { open('bottomRight') };

</script>


<template>
    <footer class="footer">
        <a-flex v-if="platform !== 'mobile'" align="center" justify="space-between">
            <a-flex class="footer-content" justify=" center" align="center">
                <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "БРИФЕР”</p>
                <p>ИНН: 6161151700</p>
                <p @click="copyToClipboard('bitkovdmitriy@yandex.ru', () => showNotification())" class="copy-text">
                    bitkovdmitriy@yandex.ru
                </p>
                <p @click="copyToClipboard('+7 (938) 117-91-41', () => showNotification())" class="copy-text">+7 (938)
                    117-91-41</p>
            </a-flex>
        </a-flex>
    </footer>
    <contextHolder />
</template>

<style lang="scss" scoped>
.footer {
    left: 0;
    right: 0;
    padding: 30px;
    border-top: solid var(--accent-color) 1px;
    background-color: var(--background-color);

    .footer-content {
        width: 100%;
        color: #fff;
        flex-direction: column;
    }
}

.copy-text {
    cursor: pointer;
    text-decoration: underline;
}
</style>
