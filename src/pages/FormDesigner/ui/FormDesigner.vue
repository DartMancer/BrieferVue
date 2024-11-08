<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import MobileVersion from "@/components/layout/MobileVersion";
import { AppBtn } from '@/components/common';
import ReviewIcon from '@/assets/icons/ReviewIcon.vue';
import CheckBoxIcon from '@/assets/icons/CheckBoxIcon.vue';
import RadioIcon from '@/assets/icons/RadioIcon.vue';


const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

</script>

<template>
    <a-flex v-if="platform === 'mobile'" class="main" justify="center" align="center">
        <MobileVersion />
    </a-flex>
    <a-flex v-else class="main" justify="center" align="center">
        <a-flex class="form-designer-screen" justify="space-between" align="center">
            <a-flex class="blocks-list">
                blocks-list
            </a-flex>
            <a-flex class="designer-section" align="flex-end">
                <a-flex class="designer-section__buttons">
                    <AppBtn class="designer-section__buttons__review-button">
                        <ReviewIcon />
                        Предпросмотр
                    </AppBtn>
                    <AppBtn class="designer-section__buttons__publish-button">
                        Создать анкету
                    </AppBtn>
                </a-flex>
                <a-flex class="designer-section__editor" justify="space-between">
                    <a-flex class="designer-section__editor__header" align="center">
                        Страница 1
                    </a-flex>
                    <div class="designer-section__editor__body">
                        <a-flex class="designer-section__editor__body__empty-list" justify="center" align="center">
                            <div class="designer-section__editor__body__empty-list__title">Начните создавать анкету
                                сейчас
                            </div>
                            <div class="designer-section__editor__body__empty-list__subtitle" align="center">
                                Перетащите сюда блок из списка слева
                            </div>
                        </a-flex>
                    </div>
                    <div class="designer-section__editor__footer">
                    </div>
                </a-flex>
            </a-flex>
        </a-flex>
    </a-flex>
</template>

<style lang="scss" scoped>
.main {
    width: 100%;
}

.form-designer-screen {
    margin-top: 100px;
    width: 75%;
    height: 100vh;
}

.blocks-list {
    width: 30%;
    height: 100vh;
    background-color: aquamarine;
    margin-right: 40px;
}

.designer-section {
    width: 100%;
    height: 100vh;
    flex-direction: column;

    &__buttons {
        // width: 40%;
        height: 5%;
        margin-bottom: 40px;

        &__review-button {
            border: none;
            color: var(--accent-color);
            background-color: transparent;
            font-family: 'Nunito';
            font-size: 25px;

            & svg {
                width: 30px;
                height: 30px;
                fill: var(--accent-color);
            }
        }

        &__publish-button {
            border: none;
            font-family: 'Nunito';
            font-size: 25px;
        }
    }

    &__editor {
        width: 100%;
        height: 50%;
        border-radius: 20px;
        background-color: var(--element-color);
        flex-direction: column;

        &__header {
            width: 100%;
            height: 10%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            padding: 16px 24px;
            border: solid var(--accent-color);
            border-bottom: none;
            font-size: 16px;
            font-family: 'Nunito';
            color: var(--white-color);
        }

        &__body {
            width: 100%;
            height: 100vh;
            padding: 24px;
            border: solid var(--accent-color);
            font-size: 17px;
            font-family: 'Nunito';
            padding: 44px;

            &__empty-list {
                width: 100%;
                height: 100%;
                flex-direction: column;
                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23959BCDFF' stroke-width='5' stroke-dasharray='20%2c20' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 20px;

                &__title {
                    font-size: 40px;
                    font-family: 'Montserrat Alternates';
                    color: var(--white-color);
                    margin-bottom: 15px;
                }

                &__subtitle {
                    width: 50%;
                    font-size: 30px;
                    font-family: 'Montserrat Alternates';
                    color: var(--accent-color);
                }
            }
        }

        &__footer {
            width: 100%;
            height: 10%;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 24px;
            border: solid var(--accent-color);
            border-top: none;
            background-color: #2A2E52;
        }
    }
}
</style>
