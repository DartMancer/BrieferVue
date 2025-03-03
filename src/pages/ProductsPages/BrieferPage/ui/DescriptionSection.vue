<script setup lang="ts">
import { storeToRefs } from "pinia";
import { DetailsType } from "../model";
import { useScreenStore } from "@/app/providers";
import { computed } from "vue";

defineProps<{ details: DetailsType }>();

const { platform } = storeToRefs(useScreenStore());

const screenWidth = computed(() => {
  if (platform.value === "desktop") {
    return 720;
  } else if (platform.value === "laptop") {
    return 600;
  }
});
</script>

<template>
  <a-flex
    :class="['product_details', { reverse: details.reverse }]"
    justify="space-between"
    align="center"
  >
    <span class="description">
      {{ details.text }}
    </span>
    <div class="screen-container">
      <a-image :src="details.image" :width="screenWidth" />
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
.product_details {
  width: 100%;
  gap: 70px;

  .description {
    max-width: 550px;
    font-size: 20px;
    text-align: start;
  }

  .screen-container {
    min-width: 720px;
    border: 2px solid var(--accent-color);
    border-radius: 12px;
    overflow: hidden;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
}

@media (max-width: 1280px) {
  .product_details {
    .description {
      max-width: 440px;
      font-size: 18px;
    }

    .screen-container {
      min-width: 600px;
    }
  }
}

@media (max-width: 1024px) {
  .product_details {
    flex-direction: column-reverse;
    gap: 20px;

    .description {
      max-width: 550px;
      font-size: 16px;
      text-align: center;
    }

    .screen-container {
      max-width: 800px;
      min-width: 450px;
      border-radius: 10px;
    }

    &.reverse {
      flex-direction: column-reverse;
    }
  }
}

@media (max-width: 540px) {
  .product_details {
    .description {
      max-width: 400px;
      font-size: 12px;
    }

    .screen-container {
      min-width: 280px;
      border-radius: 8px;
    }
  }
}
</style>
