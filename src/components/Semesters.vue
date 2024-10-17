<template>
    <v-timeline 
        truncate-line="both"
        side="end"
        align="start"
    >
        <v-timeline-item
            v-for="semester, index in semesters" :key="index"
            dot-color="white"
        >
            <!-- <v-expansion-panels 
                class="mt-n1" 
                selected-class="mt-n5"
                :style="`width: ${$vuetify.display.mdAndUp ? '50vw' : '65vw'};`" 
                variant="popout" 
            >
                <v-expansion-panel :bg-color="getColorByType(semester.type)">
                    <template #title >
                        <b v-if="$vuetify.display.mdAndUp && semester.type">{{ semester.type }} |&nbsp;</b>
                        {{ semester.title }}
                    </template>
                    <template #text>
                        {{ semester.description }}
                    </template>
                </v-expansion-panel>
            </v-expansion-panels> -->
            <template #opposite v-if="$vuetify.display.mdAndUp && semester.grade">
                <v-chip color="primary" class="mt-1">
                    {{ semester.grade }}
                </v-chip>
            </template>
            <template #icon>
                <v-icon color="purple-darken-3">mdi-numeric-{{ index + 1 }}-circle{{ semester.grade ? '' : '-outline' }}</v-icon>
            </template>
            <v-alert
                variant="elevated"
                :color="getColorByType(semester.type)"
                :style="`width: ${$vuetify.display.mdAndUp ? '35vw' : '65vw'};`" 
                class="mt-n2"
            >
                <b v-if="semester.type">{{ semester.type + " | "}}</b>
                {{ semester.title }} 
                <p v-if="!$vuetify.display.mdAndUp && semester.grade" class="text-overline">{{ semester.grade }}</p>
            </v-alert>
        </v-timeline-item>
    </v-timeline>
</template>

<script setup lang="ts">
import Semester from '@/models/semester.model'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const semesters: Semester[] = [
    {
        title: "First Semester",
        grade: t('general.grade.outstanding')
    },
    {
        title: "Basic Software Engineering",
        grade: t('general.grade.good')
    },
    {
        title: "Agile Development of Client-server Applications",
        grade: t('general.grade.outstanding')
    },
    {
        title: "ICT & Artificial Intelligence",
        grade: t('general.grade.good'),
        type: t('general.type.specialisation')
    },
    {
        title: "ioTracker",
        grade: t('general.grade.outstanding'),
        type: t('general.type.internship')
    },
    {
        title: "Embrace TEC",
        grade: t('general.grade.completed'),
        type: t('general.type.minor'),
    },
    {
        title: "Enterprise Software Engineering",
        grade: t('general.grade.outstanding')
    },
    {
        title: "Motar",
        type: t('general.type.graduation_internship'),
        grade: t('general.grade.outstanding')
    },

]

function getColorByType(type: Semester["type"]) {
    switch(type) {  
        // case "Internship":
        //     return "purple-darken-1"
        // case "Minor": 
        //     return "purple-lighten-2"
        // case "Specialisation":
        //     return "purple-lighten-1";
        // default: 
        //     return "primary"
        default: 
            return "purple-darken-1"
    }
}

</script>