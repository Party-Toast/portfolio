<template>
    <v-card elevation="10">
        <v-card-title>
            Experiences
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
                        {{ experience.company }}
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
        project: "",
        description: "Insert description here",
        company: "OrangeNXT",
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
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=1"
    },
    {
        project: "",
        description: "Insert description here",
        company: "Simac IDS",
        skillsApplied: [
            {
                title: "Vue",
                icon: "mdi-react",
                description: ""
            },
            {
                title: "Javascript",
                icon: "mdi-language-javascript",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=2"
    },
    {
        project: "",
        description: "Insert description here",
        company: "Informa Nederland BV",
        skillsApplied: [
            {
                title: "Scrum",
                icon: "mdi-account-group",
                description: ""
            },
            {
                title: "Typescript",
                icon: "mdi-language-typescript",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=3"
    },
    {
        project: "",
        description: "Insert description here",
        company: "ioThings",
        skillsApplied: [
            {
                title: "Scrum",
                icon: "mdi-account-group",
                description: ""
            },
            {
                title: "Typescript",
                icon: "mdi-language-typescript",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=4"
    },
    {
        project: "",
        description: "Insert description here",
        company: "BDO Digital",
        skillsApplied: [
            {
                title: "Scrum",
                icon: "mdi-account-group",
                description: ""
            },
            {
                title: "Typescript",
                icon: "mdi-language-typescript",
                description: ""
            }
        ],
        imageUrl: "https://picsum.photos/1920/1080/?random=5"
    },
    

]

const uniqueSkillsTitles = Array.from(new Set(experiences.flatMap(exp => exp.skillsApplied.map(skill => skill.title))))
const uniqueSkills = uniqueSkillsTitles.map(title => experiences.find(exp => exp.skillsApplied.some(skill => skill.title === title))?.skillsApplied.find(skill => skill.title === title))
</script>