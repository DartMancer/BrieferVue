<script setup lang="ts">
import GlobalTexts from "@/app/locale";
import VueLogo from "@/assets/images/VueLogo.svg";
import PythonLogo from "@/assets/images/Python.svg";
import PostgreSQLLogo from "@/assets/images/PostgreSQL.svg";

const techStack = [
  {
    category: GlobalTexts.companyInfo.technology.frontend,
    technologies: [
      { name: GlobalTexts.companyInfo.technology.vue, logo: VueLogo },
    ],
  },
  {
    category: GlobalTexts.companyInfo.technology.backend,
    technologies: [
      { name: GlobalTexts.companyInfo.technology.python, logo: PythonLogo },
    ],
  },
  {
    category: GlobalTexts.companyInfo.technology.dataBade,
    technologies: [
      {
        name: GlobalTexts.companyInfo.technology.postgreSQL,
        logo: PostgreSQLLogo,
      },
    ],
  },
];
</script>

<template>
  <div class="technology-stack">
    <h1 class="title">{{ $t.companyInfo.technology.title }}</h1>
    <a-flex vertical>
      <div v-for="(stack, index) in techStack" :key="index">
        <a-flex horizontal justify="space-between" align="center">
          <div class="language">{{ stack.category }}</div>
          <a-flex
            v-for="(tech, techIndex) in stack.technologies"
            :key="techIndex"
            align="center"
          >
            <img :src="tech.logo" class="language__logo" />
            <div class="language__title">{{ tech.name }}</div>
          </a-flex>
        </a-flex>
        <div class="info-line" />
      </div>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.technology-stack {
  width: 100%;
  padding: 30px;
  background-color: var(--element-color);
  border-radius: 20px;
  margin-top: 35px;
  margin-bottom: 70px;

  & h1 {
    margin-bottom: 30px;
    font-size: 32px;
  }
}

.language {
  font-size: 23px;
  color: var(--white-color);

  &__title {
    font-size: 20px;
    color: var(--white-color);
  }

  &__logo {
    margin-right: 15px;

    :deep(img),
    :deep(svg) {
      max-width: 60px;
      max-height: 60px;
    }
  }
}

.info-line {
  margin-bottom: 20px;
}

@media (max-width: 1207px) {
  .technology-stack {
    width: 100%;
    padding: 30px;
    background-color: var(--element-color);
    border-radius: 20px;
    margin-top: 70px;

    & h1 {
      margin-bottom: 30px;
      font-size: 28px;
    }
  }

  .language {
    font-size: 20px;
    color: var(--white-color);

    &__title {
      font-size: 18px;
      color: var(--white-color);
    }

    &__logo {
      margin-right: 10px;
      transform: scale(0.7);
    }
  }

  .info-line {
    margin-bottom: 10px;
  }
}
</style>
