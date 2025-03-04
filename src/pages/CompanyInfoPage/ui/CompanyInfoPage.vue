<script setup lang="ts">
import { useRouter } from "vue-router";
import ClickIcon from "@/assets/icons/Other/ClickIcon.vue";
import DescriptionBlock from "./DescriptionBlock.vue";
import CarouselBlock from "./CarouselBlock.vue";

const router = useRouter();

function pushToBrieferPage() {
  router.push("/briefer_page");
}
</script>

<template>
  <a-flex vertical>
    <div class="develop-products">
      <h2 class="develop-products__title title">
        {{ $t.pages.companyInfo.pageTitle }}
      </h2>
    </div>
    <button @click="pushToBrieferPage" class="product_button">
      <slot />
      <a-flex class="product" justify="space-between">
        <ClickIcon class="product__click-icon" />
        <DescriptionBlock />
        <CarouselBlock @click.stop />
      </a-flex>
    </button>
  </a-flex>
</template>

<style lang="scss" scoped>
.develop-products {
  width: 90vw;
  padding: 1.5vw;
  margin-bottom: 1.5vw;
  border-radius: 1vw;
  background-color: var(--element-color);

  &__title {
    margin-bottom: 0;
    font-size: 2.2vw;
  }
}

.product {
  position: relative;
  width: 100%;
  padding: 2vw;
  border-radius: 1vw;
  background-color: var(--element-color);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--hover-element-color);
  }

  &__click-icon {
    position: absolute;
    right: -0.9vw;
    bottom: -1.5vw;
    max-width: 3.5vw;
    max-height: 3.5vw;
    fill: var(--accent-color);
    z-index: 10;
    animation: shrink-grow 3s infinite;
    transform-origin: 0% 0%;
  }
}

@keyframes shrink-grow {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}

.product_button {
  border: none;
  background-color: transparent;
}
</style>
