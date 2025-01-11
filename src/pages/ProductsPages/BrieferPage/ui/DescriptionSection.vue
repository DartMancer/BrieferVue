<script setup lang="ts">
const props = defineProps({
  text: String,
  image: String,
  reverse: { type: Boolean, default: false },
});
</script>

<template>
  <div class="product_details">
    <a-flex justify="space-between" align="center" v-if="!props.reverse">
      <p class="product_details__description">{{ props.text }}</p>
      <div class="divider" />
      <img class="product_details__screenshot" :src="props.image" />
    </a-flex>
    <a-flex justify="space-between" align="center" v-else>
      <img class="product_details__screenshot" :src="props.image" />
      <div class="divider" />
      <p class="product_details__description">{{ props.text }}</p>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.product_details {
  &__description {
    text-align: start;
    font-size: 1.3vw;
  }

  &__screenshot {
    width: 55%;
    border: solid 0.15vw var(--accent-color);
    border-radius: 1vw;
  }
}

.divider {
  margin-right: 3vw;
}
</style>
