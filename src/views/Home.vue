<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <Skills class="mb-2"/>
            <Projects />
        </v-responsive>
    </v-container>
</template>

<script lang="ts" setup>
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue';
</script>
