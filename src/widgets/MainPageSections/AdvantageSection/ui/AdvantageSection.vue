<script setup lang="ts">
import AdvantageBlocks from "./AdvantageBlocks.vue";
import TitleBlock from "./TitleBlock.vue";
</script>

<template>
  <a-flex justify="center" vertical>
    <a-flex class="blocks" vertical>
      <a-flex class="title-blocks">
        <TitleBlock :title="$t.pages.main.advantages.brieferWithout" without />
        <TitleBlock :title="$t.pages.main.advantages.brieferWith" />
      </a-flex>
      <a-flex class="advantages-blocks" vertical>
        <AdvantageBlocks />
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.blocks {
  width: 100%;
  gap: 30px;

  .title-blocks,
  .advantages-blocks {
    gap: 15px;
  }
}

@media (max-width: 1024px) {
  .blocks {
    gap: 20px;

    .title-blocks,
    .advantages-blocks {
      gap: 10px;
    }
  }
}

@media (max-width: 540px) {
  .blocks {
    gap: 40px;

    .title-blocks {
      flex-direction: column;
      gap: 10px;
    }

    .advantages-blocks {
      gap: 20px;
    }
  }
}
</style>
