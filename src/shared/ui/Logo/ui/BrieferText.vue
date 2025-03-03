<template>
  <span class="logo_title">
    <span class="logo_title start">Brief</span>
    <span class="logo_title end">er</span>
  </span>
</template>

<style lang="scss" scoped>
.logo_title {
  font-family: "Montserrat Alternates";
  height: 45px;
  display: flex;
  align-items: center;
  transition: height 0.3s ease;

  &.start {
    font-weight: bold;
  }

  &.end {
    font-style: italic;
    font-weight: 200;
  }
}

@media (max-width: 1280px) {
  .logo_title {
    height: 33px;
  }
}

@media (max-width: 1024px) {
  .logo_title {
    height: 30px;
  }
}
</style>
