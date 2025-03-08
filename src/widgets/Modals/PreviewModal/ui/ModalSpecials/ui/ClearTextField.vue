<script lang="ts" setup>
import { FieldBlockBase } from "@/entities/form";

const field = defineModel<FieldBlockBase>("field", { required: true });
</script>

<template>
  <a-flex class="form-body" vertical>
    <span class="title">{{ field.question }}</span>
    <a-flex class="form-body-content" vertical>
      <span v-if="field.commentary" class="commentary">
        {{ field.commentary }}
      </span>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.form-body {
  width: 100%;
  height: fit-content;
  gap: 20px;
  padding: 40px;
  border-radius: 12px;
  background-color: var(--background-color);
  box-shadow: 0 0 20px var(--hover-accent-color);

  .title {
    font-size: 24px;
  }

  .form-body-content {
    gap: 30px;

    .commentary {
      font-size: 16px;
    }
  }
}

@media (max-width: 1280px) {
  .form-body {
    padding: 30px;

    .title {
      font-size: 22px;
    }

    .form-body-content {
      .commentary {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .form-body {
    gap: 15px;
    padding: 30px;

    .title {
      font-size: 20px;
    }

    .form-body-content {
      gap: 20px;

      .commentary {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 540px) {
  .form-body {
    gap: 10px;
    padding: 20px;

    .title {
      font-size: 16px;
    }

    .form-body-content {
      gap: 10px;

      .commentary {
        font-size: 10px;
      }
    }
  }
}
</style>
