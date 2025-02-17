<script setup lang="ts">
import { BrieferText } from "@/shared/ui";
import LogoIcon from "@/assets/icons/Other/LogoIcon.vue";
import { footerContactItems, FOOTER_ITEMS } from "@/shared/constants";

const goToLink = (link: string) => {
  window.open(link, "_blank");
};
</script>

<template>
  <footer class="footer top">
    <a-flex class="footer-top" justify="space-between">
      <a-flex class="logo" align="center">
        <LogoIcon />
        <a-flex class="logo-text" vertical>
          <BrieferText class="logo-title" />
          <span class="title logo-subtitle">
            {{ $t.pages.main.appSubtitle }}
          </span>
        </a-flex>
      </a-flex>
      <a-flex class="footer-item" v-for="item in FOOTER_ITEMS" vertical>
        <span class="title">{{ item.title }}</span>
        <a-flex vertical>
          <div v-for="(subItem, index) in item.items" :key="index">
            <router-link :to="subItem.route" exact-active-class="active-link">
              <span class="subItem">{{ subItem.title }}</span>
            </router-link>
          </div>
        </a-flex>
      </a-flex>
      <a-flex class="contacts" vertical>
        <span class="title">{{ $t.components.footer.contacts }}</span>
        <a-flex class="contact">
          <a-flex v-for="contact in footerContactItems">
            <a-button
              class="contact-btn"
              type="text"
              shape="circle"
              @click="goToLink(contact.link)"
            >
              <component :is="contact.icon" />
            </a-button>
          </a-flex>
        </a-flex>
      </a-flex>
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
  padding: 30px 80px;
  border-top: solid 1px var(--accent-color);

  &.top {
    padding: 30px 80px;
    background-color: var(--background-color);
  }

  &.bottom {
    padding: 26px 80px;
    background-color: black;
  }

  .footer-top {
    .title {
      font-size: 20px;
    }

    .logo {
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

    .footer-item {
      gap: 15px;

      .subItem:hover {
        color: var(--primary-color);
        transition: 0.3s ease;
      }
    }

    .contacts {
      gap: 15px;

      .contact {
        gap: 30px;

        .contact-btn {
          svg {
            max-width: 23px;
            max-height: 23px;
            fill: var(--accent-color);
            transition: 0.3s ease;
          }

          &:hover {
            svg {
              fill: var(--primary-color);
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    .company {
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
</style>
