<script lang="ts" setup>
const modalVisible = defineModel<boolean>("modalVisible", { required: true });

const closeModal = () => (modalVisible.value = false);
</script>

<template>
  <a-flex class="empty-form" justify="center" align="center" vertical>
    <span class="title">Здесь пока пусто</span>
    <a-button class="add-btn" @click="closeModal">
      <span class="btn-text">Добавить поля</span>
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.empty-form {
  gap: 20px;

  .title {
    font-size: 30px;
  }

  .add-btn {
    display: flex;
    align-items: center;
    height: fit-content;
    padding: 8px 40px;
    border: 2px solid var(--accent-color);
    border-radius: 10px;
    background-color: transparent;
    transition: 0.2s ease-in-out;

    .btn-text {
      font-size: 16px;
      color: var(--accent-color);
      transition: 0.2s ease-in-out;
    }

    &:hover {
      border-color: var(--primary-color);
      background-color: var(--primary-color);
      box-shadow: 0 0 10px var(--primary-color);

      .btn-text {
        color: white;
      }
    }

    &:active {
      border-color: var(--hover-primary-color);
      background-color: var(--hover-primary-color);
      box-shadow: 0 0 10px var(--hover-primary-color);
      transform: scale(0.95);

      .btn-text {
        color: white;
      }
    }
  }
}

@media (max-width: 1024px) {
  .empty-form {
    .title {
      font-size: 25px;
    }

    .add-btn {
      padding: 8px 30px;
      border-width: 1px;
      border-radius: 8px;

      .btn-text {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 540px) {
  .empty-form {
    gap: 15px;

    .title {
      font-size: 18px;
    }

    .add-btn {
      padding: 5px 20px;

      .btn-text {
        font-size: 12px;
      }
    }
  }
}
</style>
