<template>
  <a-flex class="main-section">
    <div class="gradient blue" />
    <div class="gradient blue" />
    <a-flex class="content-block" justify="flex-start" align="start" vertical>
      <a-flex vertical>
        <span class="title">
          {{ $t.main.chooseTemplateFirst }}
        </span>
        <span class="title accent">
          {{ $t.main.chooseTemplateSecond }}
        </span>
        <span class="title subtitle">
          {{ $t.main.chooseTemplateSubtitle }}
        </span>
      </a-flex>
      <a-flex>
        <span class="title"> {{ $t.main.createTemplateFirst }} </span>
        <span class="title accent">
          {{ $t.main.createTemplateSecond }}
        </span>
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.main-section {
  position: relative;
  width: 100%;

  .gradient {
    position: absolute;
    border-radius: 50px;
    filter: blur(40px);
    z-index: 0;

    &.blue {
      top: 0;
      left: 0;
      width: 50%;
      height: 472px;
      background: linear-gradient(45deg, #17ead9, #6078ea);
    }

    &.blue {
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      background-color: blue;
    }
  }

  .content-block {
    position: relative;
    width: 100%;
    background-color: var(--opacity-background-color);
    padding: 120px 20px;
    border: 3px solid var(--accent-color);
    border-radius: 50px;
    z-index: 2;

    .title {
      font-size: 3.25vw;
      text-align: center;
      z-index: 1;

      &.accent {
        font-weight: bold;
        color: var(--primary-color);
      }
    }

    .subtitle {
      font-size: 2.08vw;
      text-align: center;
    }
  }
}
</style>
