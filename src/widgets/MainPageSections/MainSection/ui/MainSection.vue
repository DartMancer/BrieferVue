<script setup lang="ts">
import { GradientBackground, TextsCombined } from "@/shared/ui/Other";
import { TITLE_CHOOSE, TITLE_CREATE } from "../model";
</script>

<template>
  <a-flex class="main-section-content">
    <GradientBackground />
    <a-flex class="content-block" vertical>
      <a-flex class="block choose" align="center" vertical>
        <span class="block-title">
          <TextsCombined :texts="TITLE_CHOOSE.content" />
        </span>
        <span class="subtitle">{{ $t.pages.main.main.chooseSubtitle }}</span>
        <a-button class="button">
          <span class="button__text">
            {{ $t.components.buttons.main.chooseTemplate }}
          </span>
        </a-button>
      </a-flex>
      <a-flex class="block create" align="center" vertical>
        <span class="block-title">
          <TextsCombined :texts="TITLE_CREATE.content" />
        </span>
        <a-button class="button">
          <span class="button__text">
            {{ $t.components.buttons.main.createTemplate }}
          </span>
        </a-button>
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.main-section-content {
  position: relative;
  width: 100%;

  .content-block {
    position: relative;
    width: 100%;
    border: 2px solid var(--accent-color);
    border-radius: 30px;
    padding: 100px 100px;
    gap: 60px;
    background-color: var(--opacity-background-color);
    backdrop-filter: blur(50px);
    z-index: 2;

    :deep(.title) {
      font-size: 45px;
      text-align: center;
      z-index: 1;
    }

    :deep(.accent) {
      font-weight: bold;
      color: var(--primary-color);
    }

    .subtitle {
      font-size: 30px;
      text-align: center;
    }

    .block {
      gap: 10px;

      .block-title {
        text-align: center;
      }

      .button {
        width: fit-content;
        height: fit-content;
        margin-top: 10px;
        border-radius: 15px;

        &__text {
          font-size: 30px;
        }

        &:active {
          transform: scale(0.97);
        }
      }

      &.choose {
        .button {
          border: none;
          padding: 20px 90px;
          background-color: var(--primary-color);
          box-shadow: 0 0 30px rgba($color: #cf4d9c, $alpha: 0.6);

          &:hover {
            background-color: var(--hover-primary-color);
            box-shadow: 0 0 30px rgba($color: #922065, $alpha: 0.6);
          }
        }
      }

      &.create {
        .button {
          border: 2px solid var(--accent-color);
          padding: 15px 60px;
          background-color: transparent;

          &:hover {
            background-color: var(--hover-accent-color);
            border-color: var(--hover-accent-color);
            box-shadow: 0 0 30px rgba($color: #6f76ad, $alpha: 0.6);
          }
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .main-section-content {
    .content-block {
      padding: 80px 80px;

      :deep(.title) {
        font-size: 40px;
      }

      .subtitle {
        font-size: 30px;
      }

      .block {
        gap: 10px;

        .button {
          margin-top: 10px;
          border-radius: 15px;

          &__text {
            font-size: 30px;
          }
        }

        &.choose {
          .button {
            padding: 20px 80px;
          }
        }

        &.create {
          .button {
            padding: 15px 50px;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .main-section-content {
    .content-block {
      padding: 40px 30px;
      gap: 40px;

      :deep(.title) {
        font-size: 25px;
      }

      .subtitle {
        font-size: 16px;
      }

      .block {
        gap: 20px;

        .button {
          margin-top: 0;
          border-radius: 10px;

          &__text {
            font-size: 14px;
          }
        }

        &.choose {
          .button {
            padding: 10px 40px;
          }
        }

        &.create {
          .button {
            padding: 10px 30px;
          }
        }
      }
    }
  }
}

@media (max-width: 540px) {
  .main-section-content {
    .content-block {
      padding: 30px 20px;
      gap: 30px;

      :deep(.title) {
        font-size: 18px;
      }

      .subtitle {
        font-size: 14px;
      }

      .block {
        gap: 15px;

        .button {
          border-radius: 8px;

          &__text {
            font-size: 12px;
          }
        }

        &.choose {
          .button {
            padding: 10px 40px;
          }
        }

        &.create {
          .button {
            padding: 10px 30px;
          }
        }
      }
    }
  }
}
</style>
