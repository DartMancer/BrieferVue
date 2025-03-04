<template>
  <div class="gradient blue" />
  <div class="gradient purple" />
  <div class="gradient pink" />
  <div class="gradient orange" />
  <div class="gradient purple-pink" />
</template>

<style lang="scss" scoped>
.gradient {
  position: absolute;
  border-radius: 20px;
  filter: blur(60px);
  z-index: 0;

  &.blue {
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background: linear-gradient(45deg, #17ead9, #6078ea);
  }

  &.purple {
    top: 0;
    right: 0;
    width: 55%;
    height: 50%;
    background: linear-gradient(45deg, #6094ea, #f02fc2);
  }

  &.pink {
    bottom: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background: linear-gradient(45deg, #f17b41, #e05ba2, #6078ea);
  }

  &.orange {
    bottom: 0;
    right: 0;
    width: 55%;
    height: 55%;
    background: linear-gradient(45deg, #ea5a6f, #de791e, #fccf3a);
  }

  &.purple-pink {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 55%;
    background: linear-gradient(45deg, #879af2, #d3208b, #fda000);
  }
}
</style>
