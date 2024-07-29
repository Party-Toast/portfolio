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

const semesters: Semester[] = [
    {
        title: "First Semester",
        description: "INSERT DESCRIPTION HERE",
        grade: "Outstanding"
    },
    {
        title: "Basic Software Engineering",
        description: "INSERT DESCRIPTION HERE",
        grade: "Good"
    },
    {
        title: "Agile Development of Client-server Applications",
        description: "INSERT DESCRIPTION HERE",
        grade: "Outstanding"
    },
    {
        title: "ICT & Artificial Intelligence",
        description: "INSERT DESCRIPTION HERE",
        grade: "Good",
        type: "Specialisation"
    },
    {
        title: "ioTracker",
        description: "INSERT DESCRIPTION HERE",
        grade: "Outstanding",
        type: "Internship"
    },
    {
        title: "Embrace TEC",
        grade: "Completed",
        type: "Minor",
        description: "For my minor, I decided to do the Embrace Technology, Entrepreneurship and Creativity minor at Fontys Pulsed. The minor was all about creating solutions for various entities within short timeframes. There was an explicit focus on design based working, technical integration, and personal development. I worked on multiple projects with students from varying domains, some completely unrelated to ICT. This was a great experience, as it allowed me to learn about the different ways people approach problems and how we can combine our strengths. For my personal project, I worked on an device (which incorporated a Raspberry Pi and ESP32 microcontroller) that allowed me to connect wirelessly to an old cassette deck and control it and stream music to it using my phone.",
    },
    {
        title: "Enterprise Software Engineering",
        description: "INSERT DESCRIPTION HERE",
        grade: "Outstanding"
    },
    {
        title: "Motar",
        description: "INSERT DESCRIPTION HERE",
        type: "Graduation Internship",
        grade: "Outstanding"
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