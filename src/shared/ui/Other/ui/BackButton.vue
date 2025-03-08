<script lang="ts" setup>
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import ArrowBackIcon from "@/assets/icons/Arrows/ArrowBackIcon.vue";

const router = useRouter();
const click = ref<boolean>(false);

const routeBack = () => {
  click.value = true;
  router.back();
};
</script>

<template>
  <a-button
    :class="['back-btn', { 'icon-active': click }]"
    :icon="h(ArrowBackIcon)"
    type="text"
    @click="routeBack"
  >
    <span class="back-btn-text">
      {{ $t.components.buttons.common.back }}
    </span>
  </a-button>
</template>

<style lang="scss" scoped>
.back-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0;

  .back-btn-text {
    font-size: 20px;
    color: var(--accent-color);
  }

  svg {
    max-width: 20px;
    max-height: 20px;
    fill: var(--accent-color);
    transition: 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: translateX(-10px);
    }
  }

  &.icon-active {
    svg {
      animation: goBack 0.1s ease-in-out forwards;
    }
  }

  @keyframes goBack {
    0% {
      transform: translateX(-10px);
    }

    100% {
      transform: translateX(-100px);
    }
  }
}

@media (max-width: 1024px) {
  .back-btn {
    .back-btn-text {
      display: none;
    }

    svg {
      max-width: 24px;
      max-height: 24px;
    }
  }
}

@media (max-width: 540px) {
  .back-btn {
    .back-btn-text {
      display: none;
    }

    svg {
      max-width: 20px;
      max-height: 20px;
    }
  }
}
</style>
