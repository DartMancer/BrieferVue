<template>
  <div class="body">
    <a-flex class="body__empty-list" justify="center" align="center">
      <div class="body__empty-list__title">Начните создавать анкету сейчас</div>
      <div class="body__empty-list__subtitle" align="center">
        Перетащите сюда блок из списка слева
      </div>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.body {
  width: 100%;
  height: 100%;
  padding: 24px;
  border: solid 0.15vw var(--accent-color);
  border-top: none;
  font-size: 17px;
  font-family: "Nunito";
  padding: 44px;

  &__empty-list {
    width: 100%;
    flex-direction: column;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23959BCDFF' stroke-width='5' stroke-dasharray='20%2c20' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 20px;

    &__title {
      margin-top: 3.65vw;
      font-size: 2vw;
      font-family: "Montserrat Alternates";
      color: var(--white-color);
      margin-bottom: 15px;
      text-align: center;
    }

    &__subtitle {
      width: 50%;
      margin-bottom: 3.65vw;
      font-size: 1.5vw;
      font-family: "Montserrat Alternates";
      color: var(--accent-color);
      text-align: center;
    }
  }
}
</style>
