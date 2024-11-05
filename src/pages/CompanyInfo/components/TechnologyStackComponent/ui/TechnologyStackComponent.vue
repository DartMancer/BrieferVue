<script setup lang="ts">
import FlutterLogo from '@/assets/images/Flutter.svg';
import DartLogo from '@/assets/images/Dart.svg';
import PythonLogo from '@/assets/images/Python.svg';
import PostgreSQLLogo from '@/assets/images/PostgreSQL.svg';

const techStack = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'Flutter', logo: FlutterLogo },
            { name: 'Dart', logo: DartLogo },
        ],
    },
    {
        category: 'Backend',
        technologies: [
            { name: 'Python', logo: PythonLogo },
        ],
    },
    {
        category: 'Data Base',
        technologies: [
            { name: 'PostgreSQL', logo: PostgreSQLLogo },
        ],
    },
];

</script>

<template>
    <div class="technology-stack">
        <h1 class="title">Технологический стэк</h1>
        <a-flex vertical>
            <div v-for="(stack, index) in techStack" :key="index">
                <a-flex horizontal justify="space-between" align="center">
                    <div class="language">{{ stack.category }}</div>
                    <a-flex v-for="(tech, techIndex) in stack.technologies" :key="techIndex" align="center">
                        <img :src="tech.logo" class="language-logo" />
                        <div class="language-title">{{ tech.name }}</div>
                    </a-flex>
                </a-flex>
                <div class="info-line" />
            </div>
        </a-flex>
    </div>
</template>

<style scoped>
.technology-stack {
    width: 100%;
    padding: 30px;
    background-color: var(--element-color);
    border-radius: 20px;
    margin-bottom: 70px;
}

.technology-stack h1 {
    color: var(--white-color);
    margin-bottom: 30px;
    font-size: 32px;
}

.technology-stack h2 {
    color: var(--white-color);
}

.info-line {
    margin-bottom: 20px;
}

.language {
    font-size: 23px;
    color: var(--white-color);
}

.language-title {
    font-size: 20px;
    color: var(--white-color);
}

.language-logo {
    margin-right: 15px;
}
</style>