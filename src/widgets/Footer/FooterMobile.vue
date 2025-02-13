<script setup lang="ts">
import { BrieferText } from "@/shared/ui";
import BrieferLogoIcon from "@/assets/icons/BrieferLogoIcon.vue";
import { footerContactItems, footerItems } from "@/shared/constants";

const goToLink = (link: string) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div class="footer top">
    <a-flex class="footer-top" justify="center" align="center" vertical>
      <a-flex class="logo" align="center">
        <BrieferLogoIcon />
        <a-flex class="logo-text" vertical>
          <BrieferText class="logo-title" />
        </a-flex>
      </a-flex>
      <a-flex class="footer-item" v-for="item in footerItems" vertical>
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
        <span class="title">{{ $t.footer.contacts }}</span>
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
  </div>
  <div class="footer bottom">
    <a-flex
      class="footer-bottom"
      justify="space-between"
      align="center"
      vertical
    >
      <span>
        <span class="accent">{{ $t.footer.companyFirst }}</span>
        {{ $t.footer.companySecond }}
      </span>
      <span>
        <span class="accent">{{ $t.footer.innFirst }}</span>
        {{ $t.footer.innSecond }}
      </span>
      <span>{{ $t.footer.copyrigth }}</span>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 22px 75px;
  border-top: solid 1px var(--accent-color);

  &.top {
    background-color: var(--background-color);
  }

  &.bottom {
    background-color: black;
  }

  .footer-top {
    gap: 20px;

    .title {
      font-size: 20px;
      text-align: center;
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
      gap: 7px;
      text-align: center;

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
    gap: 5px;

    .accent {
      color: var(--accent-color);
    }
  }
}

.copy-text {
  cursor: pointer;
  text-decoration: underline;
}
</style>
