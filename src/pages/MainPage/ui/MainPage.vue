<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import MobileVersion from "@/components/layout/MobileVersion";

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

</script>


<template>
    <div>
        <a-flex v-if="platform === 'mobile'" justify="center" align="center" class="main">
            <MobileVersion />
        </a-flex>
        <a-flex v-else justify="center" align="center" class="main">
            <h1 :class="'blue-gradient'">B</h1>
            <h1 :class="'purple-gradient'">R</h1>
            <h1 :class="'pink-gradient'">I</h1>
            <h1 :class="'bright-pink-gradient'">E</h1>
            <h1 :class="'orange-gradient'">F</h1>
        </a-flex>
    </div>
</template>

<style lang="scss" scoped>
.main {
    height: 100vh;
    display: flex;
    flex-direction: row;
    color: var(--white-color);

    & h1 {
        font-size: 300px;
        color: black;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-background-clip: text;
        filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.1));
        font-family: 'UEFA Playstrong';
        margin: 0;
    }
}

@media (max-width: 1208px) {
    .main {
        height: 100vh;
        display: flex;
        flex-direction: row;
        color: var(--white-color);

        & h1 {
            font-size: 200px;
            color: black;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-background-clip: text;
            filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.1));
            font-family: 'UEFA Playstrong';
            margin: 0;
        }
    }
}

.blue-gradient {
    background: var(--blue-gradient);
    text-shadow: 0px 0px 250px var(--bright-turquoise-clr);
}

.purple-gradient {
    background: var(--purple-gradient);
    text-shadow: 0px 0px 250px var(--cornflower-blue-clr);
}

.pink-gradient {
    background: var(--pink-gradient);
    text-shadow: 0px 0px 250px var(--raspberry-pink-clr);
}

.bright-pink-gradient {
    background: var(--bright-pink-gradient);
    text-shadow: 0px 0px 250px var(--vivid-cerise-clr);
}

.orange-gradient {
    background: var(--orange-gradient);
    text-shadow: 0px 0px 250px var(--meteor-clr);
}
</style>