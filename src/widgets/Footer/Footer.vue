<script setup lang="ts">
import { BrieferText } from "@/shared/ui/Logo";
import { FOOTER_ITEMS } from "@/shared/constants";
import LogoIcon from "@/assets/icons/Other/LogoIcon.vue";
import FooterItems from "./FooterItems.vue";
</script>

<template>
  <footer class="footer top">
    <a-flex class="footer-top" justify="space-between" align="start">
      <a-flex class="logo" align="center">
        <LogoIcon />
        <a-flex class="logo-text" vertical>
          <BrieferText class="logo-title" />
          <span class="logo-subtitle">
            {{ $t.components.footer.subtitle }}
          </span>
        </a-flex>
      </a-flex>
      <div class="footer-items">
        <FooterItems
          v-for="(section, index) in FOOTER_ITEMS"
          :key="index"
          :title="section.title"
          :items="section.items"
        />
      </div>
    </a-flex>
  </footer>
  <footer class="footer bottom">
    <a-flex class="footer-bottom" justify="space-between" align="center">
      <a-flex class="company">
        <span>
          <span class="accent">{{ $t.components.footer.companyFirst }}</span>
          {{ $t.components.footer.companySecond }}
        </span>
        <span>
          <span class="accent">{{ $t.components.footer.innFirst }}</span>
          {{ $t.components.footer.innSecond }}
        </span>
      </a-flex>
      <span>{{ $t.components.footer.copyrigth }}</span>
    </a-flex>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  border-top: solid 1px var(--accent-color);

  &.top {
    padding: 22px 75px;
    background-color: var(--background-color);
  }

  &.bottom {
    padding: 22px 75px;
    background-color: black;
  }

  .footer-top {
    .logo {
      min-width: 300px;
      gap: 12px;

      svg {
        max-width: 60px;
        max-height: 60px;
      }

      .logo-text {
        max-width: 134px;
      }

      .logo-title {
        font-size: 30px;
      }

      .logo-subtitle {
        font-size: 12px;
      }
    }

    .footer-items {
      display: flex;
      flex-wrap: wrap;
      gap: 45px 40px;
    }
  }

  .footer-bottom {
    font-size: 16px;

    .company {
      font-size: 16px;
      gap: 30px;

      .accent {
        color: var(--accent-color);
      }
    }
  }
}

.copy-text {
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 1280px) {
  .footer {
    &.top,
    &.bottom {
      padding: 22px 50px;
    }

    .footer-top {
      .logo {
        min-width: 250px;
      }
    }
  }
}

@media (max-width: 540px) {
  .footer {
    &.top,
    &.bottom {
      padding: 20px;
    }

    .footer-top {
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .logo {
        min-width: fit-content;
        gap: 12px;

        svg {
          max-width: 40px;
          max-height: 40px;
        }

        .logo-subtitle {
          display: none;
        }
      }

      .footer-items {
        gap: 20px;
      }
    }

    .footer-bottom {
      flex-direction: column;
      font-size: 10px;
      gap: 5px;

      .company {
        flex-direction: column;
        align-items: center;
        font-size: 10px;
        gap: 5px;

        .accent {
          color: var(--accent-color);
        }
      }
    }
  }
}
</style>
