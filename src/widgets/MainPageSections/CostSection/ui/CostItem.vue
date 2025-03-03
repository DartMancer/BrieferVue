ш
<script setup lang="ts">
import CheckBoxIcon from "@/assets/icons/Blocks/CheckBoxIcon.vue";
</script>

<template>
  <a-flex class="cost-item" justify="space-between" vertical>
    <span class="title"> Тариф </span>
    <a-flex class="cost-advantages" vertical>
      <a-flex class="cost-advantage" v-for="index in 4" align="center">
        <CheckBoxIcon class="cost-advantage__icon" />
        <span class="cost-advantage__text">Преимущество {{ index }}</span>
      </a-flex>
    </a-flex>
    <a-button class="cost-button" @click="">
      <span class="cost-button-text">
        {{ $t.components.buttons.main.buy }}
      </span>
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.cost-item {
  width: 100%;
  height: 375px;
  padding: 37px;
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  box-shadow: 0 0 15px var(--vivid-cerise-clr);

  .title {
    font-size: 30px;
    text-align: center;
  }

  .cost-advantages {
    gap: 8px;

    .cost-advantage {
      gap: 15px;

      &__icon {
        max-width: 15px;
        max-height: 15px;
        fill: var(--success-color);
      }

      &__text {
        font-size: 18px;
      }
    }
  }

  .cost-button {
    width: 100%;
    height: fit-content;
    padding: 10px 0 10px 0;
    border: none;
    border-radius: 8px;
    background-color: var(--primary-color);
    transition: 0.2s ease-in-out;

    .cost-button-text {
      font-size: 18px;
    }

    &:hover {
      background-color: var(--hover-primary-color);
      box-shadow: 0 0 15px var(--hover-primary-color);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

@media (max-width: 1024px) {
  .cost-item {
    height: 300px;
    padding: 20px;

    .title {
      font-size: 20px;
    }

    .cost-advantages {
      .cost-advantage {
        &__text {
          font-size: 16px;
        }
      }
    }

    .cost-button {
      padding: 5px 0 5px 0;

      .cost-button-text {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 540px) {
  .cost-item {
    height: 250px;
    padding: 20px;

    .title {
      font-size: 18px;
    }

    .cost-advantages {
      .cost-advantage {
        &__text {
          font-size: 14px;
        }
      }
    }

    .cost-button {
      .cost-button-text {
        font-size: 16px;
      }
    }
  }
}
</style>
