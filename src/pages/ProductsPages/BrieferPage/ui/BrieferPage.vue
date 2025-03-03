<script lang="ts" setup>
import { computed } from "vue";

import { storeToRefs } from "pinia";

import { useScreenStore } from "@/app/providers";
import { BrieferGradientTitle } from "@/shared/ui/Logo";
import { BackButton } from "@/shared/ui/Other";
import { FormButton } from "@/widgets/MainPageSections";
import { PRODUCT_DETAILS } from "../model";
import DescriptionSection from "./DescriptionSection.vue";

const { platform } = storeToRefs(useScreenStore());

const titleFontsize = computed(() => {
  if (platform.value === "tablet") {
    return "80px";
  } else if (platform.value === "mobile") {
    return "50px";
  } else {
    return "120px";
  }
});

const titleGap = computed(() => {
  if (platform.value === "tablet") {
    return 20;
  } else if (platform.value === "mobile") {
    return 10;
  } else {
    return 30;
  }
});
</script>

<template>
  <a-flex class="briefer-page" justify="center" align="center" vertical>
    <a-flex class="title-section" justify="flex-start" vertical>
      <BackButton />
      <a-flex justify="center" align="center" vertical>
        <BrieferGradientTitle :fontSize="titleFontsize" :gap="titleGap" />
        <span class="subtitle">
          {{ $t.pages.products.briefer.subtitle }}
        </span>
      </a-flex>
    </a-flex>
    <div class="details">
      <a-flex justify="center" align="center" vertical>
        <a-divider />
        <a-flex
          class="detail"
          v-for="(details, index) in PRODUCT_DETAILS"
          :key="index"
          vertical
          align="center"
        >
          <DescriptionSection :details="details" />
          <a-divider />
        </a-flex>
        <FormButton :btnText="$t.components.buttons.main.tryNow" />
      </a-flex>
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
.briefer-page {
  width: 100%;
  padding: 75px 50px;

  .title-section {
    width: 100%;

    .subtitle {
      max-width: 530px;
      font-size: 20px;
      text-align: center;
    }
  }

  .details,
  .detail {
    width: 100%;
  }
}

:deep(.ant-divider) {
  margin: 75px;
}

@media (max-width: 1280px) {
  .briefer-page {
    padding: 60px 50px;
  }

  :deep(.ant-divider) {
    margin: 60px;
  }
}

@media (max-width: 1024px) {
  .briefer-page {
    padding: 20px 30px;

    .title-section {
      .subtitle {
        max-width: 550px;
        font-size: 14px;
      }
    }
  }

  :deep(.ant-divider) {
    margin: 30px;
  }
}

@media (max-width: 540px) {
  .briefer-page {
    padding: 15px;

    .title-section {
      .subtitle {
        max-width: 450px;
        font-size: 12px;
      }
    }
  }

  :deep(.ant-divider) {
    margin: 20px;
  }
}
</style>
