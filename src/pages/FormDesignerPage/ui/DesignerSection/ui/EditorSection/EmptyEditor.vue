<template>
  <div class="body">
    <a-flex class="body__empty-list" justify="center" align="center">
      <div class="body__empty-list__title title">
        Начните создавать анкету сейчас
      </div>
      <div class="body__empty-list__subtitle title" align="center">
        Перетащите сюда блок из списка слева
      </div>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.body {
  width: 100%;
  height: 100%;
  border-top: none;
  padding: 30px;

  &__empty-list {
    width: 100%;
    flex-direction: column;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23959BCDFF' stroke-width='5' stroke-dasharray='20%2c20' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 20px;
    padding: 90px;
    gap: 10px;

    &__title {
      font-size: 35px;
      text-align: center;
    }

    &__subtitle {
      font-size: 25px;
      color: var(--accent-color);
      text-align: center;
    }
  }
}
</style>
