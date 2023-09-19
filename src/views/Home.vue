<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <Card class="mb-4">
                <template v-slot:title>
                    The journey so far
                </template>
                I've been studying ICT and Software at Fontys University of Applied Sciences since 2019. In that time, I've learned a lot about software development. Here's a timeline of my studies so far. Next to each semester, you can see the grade I received for that semester according to the Fontys ICT grading standard (unsufficient, sufficient, good, outstanding).
            </Card>
            <Semesters />
        </v-responsive>
    </v-container>
</template>

<script lang="ts" setup>
import Semesters from '@/components/Semesters.vue'
import Card from '@/components/Card.vue';
</script>
