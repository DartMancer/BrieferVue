import {ref} from 'vue';
import { defineStore } from 'pinia';
import { type Platform } from './types';
import { BREAKPOINTS } from '@/constants/breakpoints';


export const useScreenStore = defineStore('screen', () => {
    const platform = ref<Platform>('desktop');

    const setPlatform = (width: number) => {
        if (width >= BREAKPOINTS.DESKTOP) {
            platform.value = 'desktop';
        } else if (width >= BREAKPOINTS.TABLET) {
            platform.value = 'tablet';
        } else {
            platform.value = 'mobile';
        }
    };    

    return {setPlatform, platform};
})