<script setup lang="ts">
import { BrieferText } from "@/shared/ui/Logo";
import { FOOTER_ITEMS } from "@/shared/constants";
import LogoIcon from "@/assets/icons/Other/LogoIcon.vue";
import FooterItems from "./FooterItems.vue";
</script>

<template>
  <footer class="footer top">
    <div class="footer-top">
      <div class="logo">
        <div class="logo-title">
          <LogoIcon />
          <BrieferText class="logo-title-text" />
        </div>
        <span class="logo-subtitle">
          {{ $t.components.footer.subtitle }}
        </span>
      </div>

      <FooterItems
        class="footer-items"
        v-for="(section, index) in FOOTER_ITEMS"
        :key="index"
        :title="section.title"
        :items="section.items"
      />
    </div>
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
    padding: 20px;
    background-color: var(--background-color);
  }

  &.bottom {
    padding: 20px;
    background-color: black;
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 50px;

    .logo {
      display: flex;
      flex-direction: column;
      padding: 0 20px 0 20px;
      gap: 10px;

      .logo-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        svg {
          max-width: 40px;
          max-height: 40px;
        }

        .logo-title-text {
          font-size: 30px;
        }
      }

      .logo-subtitle {
        max-width: 140px;
        font-size: 14px;
      }
    }
  }

  .footer-bottom {
    font-size: 12px;

    .company {
      font-size: 12px;
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

// @media (max-width: 540px) {
//   .footer {
//     &.top,
//     &.bottom {
//       padding: 20px;
//     }

//     .footer-top {
//       display: flex;
//       flex-direction: column;
//       gap: 30px;

//       .logo {
//         display: flex;
//         flex-direction: column;
//         padding: 0 20px 0 20px;
//         gap: 10px;

//         .logo-title {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           gap: 12px;

//           svg {
//             max-width: 40px;
//             max-height: 40px;
//           }

//           .logo-title-text {
//             font-size: 30px;
//           }
//         }

//         .logo-subtitle {
//           max-width: 140px;
//           font-size: 14px;
//         }
//       }
//     }

//     .footer-bottom {
//       flex-direction: column;
//       font-size: 10px;
//       gap: 5px;

//       .company {
//         flex-direction: column;
//         align-items: center;
//         font-size: 10px;
//         gap: 5px;

//         .accent {
//           color: var(--accent-color);
//         }
//       }
//     }
//   }
// }
</style>
