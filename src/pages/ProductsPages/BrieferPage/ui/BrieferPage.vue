<script lang="ts" setup>
import GlobalTexts from "@/app/locale";
import { RouterBack, BrieferGradientTitle } from "@/shared/ui";
import FirstBrieferScreen from "@/assets/images/FirstBrieferScreen.webp";
import SecondBrieferScreen from "@/assets/images/SecondBrieferScreen.webp";
import ThirdBrieferScreen from "@/assets/images/ThirdBrieferScreen.webp";
import FourthBrieferScreen from "@/assets/images/FourthBrieferScreen.webp";
import DescriptionSection from "./DescriptionSection.vue";
import DownloadButton from "./DownloadButton.vue";

const productDetails = [
  {
    text: GlobalTexts.pages.products.briefer.firstDetail,
    image: FirstBrieferScreen,
    reverse: false,
  },
  {
    text: GlobalTexts.pages.products.briefer.secondDetail,
    image: SecondBrieferScreen,
    reverse: true,
  },
  {
    text: GlobalTexts.pages.products.briefer.thirdDetail,
    image: ThirdBrieferScreen,
    reverse: false,
  },
  {
    text: GlobalTexts.pages.products.briefer.fourthDetail,
    image: FourthBrieferScreen,
    reverse: true,
  },
];
</script>

<template>
  <a-flex justify="center" align="center" vertical>
    <RouterBack />
    <div class="briefer-page__main">
      <a-flex justify="center" align="center" vertical>
        <BrieferGradientTitle :font-size="'8vw'" />
        <p class="briefer-page__title">
          {{ $t.pages.products.briefer.title }}
        </p>
        <a-divider />
        <a-flex
          v-for="(details, index) in productDetails"
          :key="index"
          vertical
          align="center"
        >
          <DescriptionSection
            :text="details.text"
            :image="details.image"
            :reverse="details.reverse"
          />
          <a-divider />
        </a-flex>
        <DownloadButton class="briefer-page__download-button" />
      </a-flex>
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
.briefer-page {
  &__main {
    width: 90%;
    margin-top: 130px;
  }

  &__title {
    width: 50%;
    font-size: 1.5vw;
    text-align: center;
  }

  &__download-button {
    margin-bottom: 3.5vw;
  }
}

:deep(.ant-divider) {
  margin: 50px;
}
</style>
