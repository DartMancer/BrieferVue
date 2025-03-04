<script setup lang="ts">
import { computed, h } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  title: string;
  items: { title?: string; route?: string; icon?: any; link?: string }[];
}>();

const isContactsSection = computed(() =>
  props.items.every((item) => !!item.link)
);

const goToLink = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div class="footer-item">
    <span class="title">{{ title }}</span>
    <a-flex
      :class="['subitems', { contacts: isContactsSection }]"
      :vertical="!isContactsSection"
    >
      <template v-for="(item, index) in items" :key="index">
        <router-link
          v-if="item.route"
          :to="item.route"
          exact-active-class="active-link"
        >
          <span class="subtitle">{{ item.title }}</span>
        </router-link>
        <a-button
          v-else-if="item.link"
          class="contact-btn"
          type="text"
          shape="circle"
          :icon="h(item.icon)"
          @click="goToLink(item.link)"
        />
      </template>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.footer-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px 0 20px;

  .title {
    font-size: 18px;
  }

  .subitems {
    .subtitle {
      font-size: 16px;
      transition: 0.2s ease-in-out;

      &:hover {
        color: var(--primary-color);
      }
    }

    .contact-btn {
      width: 22px;
      min-width: 22px;
      height: 22px;
      padding: 0;

      svg {
        max-width: 22px;
        max-height: 22px;
        fill: var(--accent-color);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        svg {
          fill: var(--primary-color);
        }
      }
    }

    &.contacts {
      gap: 30px;
    }
  }
}

@media (max-width: 1280px) {
  .footer-item {
    gap: 10px;

    .subitems {
      .subtitle {
        font-size: 14px;
      }

      .contact-btn {
        width: 20px;
        min-width: 20px;
        height: 20px;

        svg {
          max-width: 20px;
          max-height: 20px;
        }
      }

      &.contacts {
        gap: 25px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .footer-item {
    .title {
      font-size: 16px;
    }

    .subitems {
      .subtitle {
        font-size: 12px;
      }

      .contact-btn {
        width: 23px;
        min-width: 23px;
        height: 23px;

        svg {
          max-width: 23px;
          max-height: 23px;
        }
      }

      &.contacts {
        gap: 25px;
      }
    }
  }
}

@media (max-width: 540px) {
  .footer-item {
    .subitems {
      .contact-btn {
        width: 20px;
        min-width: 20px;
        height: 20px;

        svg {
          max-width: 20px;
          max-height: 20px;
        }
      }
    }
  }
}
</style>
