<template>
    <v-list>
        <v-list-item
            v-for="skill, index in skills" :key="index"
            :prepend-icon="skill.icon"
        >
            <v-list-item-title 
                v-text="skill.title"
            ></v-list-item-title>
            <v-list-item-subtitle
                v-text="skill.description"
            ></v-list-item-subtitle>
        </v-list-item>
    </v-list>
</template>

<script lang="ts" setup>
import Skill from '@/models/skill.model';

const skills: Skill[] = [
    // {
    //     title: "Javascript",
    //     icon: "mdi-language-javascript",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed euismod, nisl quis aliquam aliquet, nisl nisi aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed vitae eros quis nisl aliquam aliquet. Sed euismod, nisl quis aliquam aliquet, nisl nisi aliquam nunc, vitae aliquam nisl nisl vitae nisl."
    // },
    // {
    //     title: "Typescript",
    //     icon: "mdi-language-typescript",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed euismod, nisl quis aliquam aliquet, nisl nisi aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed vitae eros quis nisl aliquam aliquet. Sed euismod, nisl quis aliquam aliquet, nisl nisi aliquam nunc, vitae aliquam nisl nisl vitae nisl."
    // },
    // {
    //     title: "Vue",
    //     icon: "mdi-vuejs",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed euismod, nisl quis aliquam aliquet, nisl nisi aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed vitae eros quis nisl aliquam aliquet. Sed euismod, nisl quis aliquam aliquet, nisl nisi aliquam nunc, vitae aliquam nisl nisl vitae nisl."
    // },
]
  //
</script>
