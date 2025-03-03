<script setup lang="ts">
import { FormButton } from "@/widgets/MainPageSections";
</script>

<template>
  <a-flex class="connect-us" justify="center" align="center">
    <span class="title">{{ $t.pages.main.cost.questions }}</span>
    <FormButton :btnText="$t.components.buttons.main.connectUs" />
  </a-flex>
</template>

<style lang="scss" scoped>
.connect-us {
  gap: 45px;

  .title {
    font-size: 30px;
  }
}

@media (max-width: 1024px) {
  .connect-us {
    gap: 20px;
    flex-direction: column;

    .title {
      font-size: 20px;
    }
  }
}

@media (max-width: 540px) {
  .connect-us {
    .title {
      font-size: 16px;
    }
  }
}
</style>
