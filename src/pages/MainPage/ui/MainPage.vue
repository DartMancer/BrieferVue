<script lang="ts" setup>
// import { storeToRefs } from "pinia";
// import { useScreenStore } from "@/entities/screen";
import { BrieferGradientTitle } from "@/shared/ui";
import { MainSection } from "@/widgets";
// import MobileVersion from "@/app/layouts/MobileVersion.vue";
// const screenStore = useScreenStore();
// const { platform } = storeToRefs(screenStore);
</script>

<template>
  <a-flex vertical>
    <!-- <BrieferGradientTitle :font-size="'15vw'" /> -->
    <a-flex class="body-section" vertical>
      <a-flex class="main-section" vertical>
        <MainSection />
      </a-flex>
      <a-flex class="how-it-work-section" vertical> </a-flex>
      <a-flex class="usefull-section" vertical> </a-flex>
      <a-flex class="advantage-section" vertical> </a-flex>
      <a-flex class="cost-section" vertical> </a-flex>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.body-section {
  gap: 6.25vw;

  .main-section {
    padding-left: 1.95vw 0;
    gap: 6.25vw;
  }

  .how-it-work-section {
    gap: 6.25vw;
  }

  .usefull-section {
    gap: 6.25vw;
  }

  .advantage-section {
    gap: 6.25vw;
  }

  .cost-section {
    gap: 6.25vw;
  }
}
</style>
