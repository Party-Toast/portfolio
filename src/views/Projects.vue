<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <Card>
                <ProjectSlides />
            </Card>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">   
import ProjectSlides from '@/components/ProjectsSlides.vue'
import Card from '@/components/Card.vue';

</script>