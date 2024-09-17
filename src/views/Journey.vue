<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
            <Card class="mb-6 mx-auto" :width="$vuetify.display.lgAndUp ? '85%' : '100%'">
                <template v-slot:title>
                    Journey
                </template>
                <p>
                    I've studied at Fontys from 2019 to 2024. In that time, I've learned a lot about software development and its envolved processes. Below is a timeline of my studies. Next to each semester, you can see the grade I received for that semester according to the Fontys ICT grading standard (unsufficient, sufficient, good, outstanding). 
                </p>
            </Card>
            <Semesters/>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import Semesters from '@/components/Semesters.vue';

</script>