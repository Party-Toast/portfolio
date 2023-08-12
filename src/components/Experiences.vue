<template>
    <v-card elevation="10">
        <v-card-title>
            Experiences - Previous Projects at Fontys
        </v-card-title>
        <v-card-text>
            <v-chip 
                v-for="uniqueSkill, index in uniqueSkills" :key="index"
                :color="experiences[slide].skillsApplied.some(skill => skill.title === uniqueSkill?.title) ? 'primary' : ''"
                :prepend-icon="uniqueSkill?.icon"
                class="mx-2 mb-2"
            >
                {{ uniqueSkill?.title }}
            </v-chip>
            <v-carousel v-model="slide" cycle>
                <v-carousel-item 
                    v-for="experience, index in experiences" :key="index"
                    :src="experience.imageUrl"
                    cover
                >
                    <v-card-title>
                        <h1>
                            {{ experience.company }}
                        </h1>
                        <h2>
                            {{ experience.project }}
                        </h2>
                    </v-card-title>
                    <v-card-text>
                        {{ experience.description }}
                    </v-card-text>
                </v-carousel-item>
            </v-carousel>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import Experience from '@/models/experience.model';
import { ref } from 'vue';

const slide = ref(0)

const experiences: Experience[] = [
    {
        company: "OrangeNXT",
        project: "Supply Chain Monitoring using IoT Devices",
        description: "Insert description here",
        skillsApplied: [
            {
                title: "React",
                icon: "mdi-vuejs",
                description: ""
            },
            {
                title: "Google Cloud Platform",
                icon: "mdi-google-cloud",
                description: ""
            },
            {
                title: "GitLab",
                icon: "mdi-gitlab",
                description: ""
            },
            {
                title: "MySQL",
                icon: "mdi-database",
                description: ""
            },
            { 
                title: "MongoDB",
                icon: "mdi-database",
                description: ""
            },
            {
                title: "IoT",
                icon: "mdi-access-point",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=1"
    },
    {
        company: "Simac IDS",
        project: "Access Control Visualisation",
        description: "Insert description here",
        skillsApplied: [
            {
                title: "Vue",
                icon: "mdi-react",
                description: ""
            },
            {
                title: "Java",
                icon: "mdi-language-java",
                description: ""
            },
            {
                title: "GitLab",
                icon: "mdi-gitlab",
                description: ""
            },
            {
                title: "MySQL",
                icon: "mdi-database",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=2"
    },
    {
        company: "Informa Nederland BV",
        project: "Pharmaceutical Data Analysis using Machine Learning",
        description: "Insert description here",
        skillsApplied: [
            {
                title: "Python",
                icon: "mdi-language-python",
                description: ""
            },
            {
                title: "Artificial Intelligence",
                icon: "mdi-robot",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=3"
    },
    {
        company: "ioThings",
        project: "ioTracker Automated Configuration Tool",
        description: "Insert description here",
        skillsApplied: [
            {
                title: "Node",
                icon: "mdi-nodejs",
                description: ""
            },
            {
                title: "IoT",
                icon: "mdi-access-point",
                description: ""
            },
            {
                title: "GitLab",
                icon: "mdi-gitlab",
                description: ""
            },
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=4"
    },
    {
        company: "BDO Digital",
        project: "",
        description: "Insert description here",
        skillsApplied: [
            {
                title: "React",
                icon: "mdi-language-typescript",
                description: ""
            },
            {
                title: ".NET",
                icon: "mdi-language-csharp",
                description: ""
            },
            {
                title: "Azure",
                icon: "mdi-microsoft-azure",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=5"
    },
]

const uniqueSkillsTitles = Array.from(new Set(experiences.flatMap(exp => exp.skillsApplied.map(skill => skill.title))))
const uniqueSkills = uniqueSkillsTitles.map(title => experiences.find(exp => exp.skillsApplied.some(skill => skill.title === title))?.skillsApplied.find(skill => skill.title === title))
</script>