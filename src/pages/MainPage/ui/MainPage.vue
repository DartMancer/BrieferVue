<script lang="ts" setup>
import { MainSection, UsefullSection, AdvantageSection } from "@/widgets";
</script>

<template>
  <a-flex class="main-page" justify="center" align="center" vertical>
    <a-flex class="body-section" vertical>
      <a-flex class="main-section" vertical>
        <MainSection />
        <a-divider />
      </a-flex>
      <!-- <a-flex class="how-it-work-section" vertical> <a-divider /> </a-flex> -->
      <a-flex class="usefull-section" vertical>
        <UsefullSection />
        <a-divider />
      </a-flex>
      <a-flex class="advantage-section" vertical>
        <AdvantageSection />
        <a-divider />
      </a-flex>
      <!-- <a-flex class="cost-section" vertical> </a-flex> -->
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.main-page {
  width: 100%;
}

.body-section {
  max-width: 1440px;
  padding: 75px 50px;
  gap: 90px;

  .main-section {
    gap: 90px;

    .divider {
      max-width: fit-content;
    }
  }

  .how-it-work-section {
    gap: 90px;
  }

  .usefull-section {
    gap: 90px;
  }

  .advantage-section {
    gap: 90px;
  }

  .cost-section {
    gap: 90px;
  }
}

@media (max-width: 1280px) {
  .body-section {
    padding: 60px 50px;
    gap: 70px;

    .main-section,
    .usefull-section,
    .advantage-section {
      gap: 70px;
    }
  }
}

@media (max-width: 1024px) {
  .body-section {
    padding: 40px 20px;
    gap: 40px;

    .main-section,
    .usefull-section,
    .advantage-section {
      gap: 40px;
    }
  }
}

@media (max-width: 540px) {
  .body-section {
    padding: 20px 0px;
    gap: 40px;

    .main-section,
    .usefull-section,
    .advantage-section {
      gap: 40px;
    }

    .main-section,
    .advantage-section {
      padding: 0 20px;
    }
  }
}
</style>
