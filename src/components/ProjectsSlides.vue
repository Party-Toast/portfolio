<template>
    <v-row>
        <v-col>
            <p class="mb-2">
                Here is an overview of the group projects I have worked on during my studies at Fontys University of Applied Sciences.
            </p>
            <v-chip 
                v-for="uniqueSkill, index in uniqueSkills.sort((a, b)=>orderSkills(a, b))" :key="index"
                :color="projects[slide].skillsApplied.some(skill => skill.title === uniqueSkill.title) ? 'primary' : ''"
                :prepend-icon="uniqueSkill.icon"
                class="mx-2 mb-2"
            >
                {{ uniqueSkill.title }}
            </v-chip>
        </v-col>
        <v-col cols="8">
            <v-carousel v-model="slide" cycle>
                <v-carousel-item 
                    v-for="project, index in projects" :key="index"
                    cover
                >
                    <v-parallax
                        :src="project.imageUrl"
                        height="100%"
                    >
                        <v-card-title>
                            <h1>
                                {{ project.company }}
                            </h1>
                            <h2>
                                {{ project.project }}
                            </h2>
                        </v-card-title>
                        <v-card-text>
                            {{ project.description }}
                        </v-card-text>
                    </v-parallax>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import Project from '@/models/project.model';
import Skill from '@/models/skill.model';
import { ref } from 'vue';

const slide = ref(0);

const projects: Project[] = [
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
];

const uniqueSkillsTitles = Array.from(new Set(projects.flatMap(project => project.skillsApplied.map(skill => skill.title))));
const uniqueSkills = uniqueSkillsTitles.map(title => projects.find(project => project.skillsApplied.some(skill => skill.title === title))?.skillsApplied.find(skill => skill.title === title)).filter((skill): skill is Skill => skill !== undefined);

function orderSkills(a: Skill, b: Skill) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}
</script>