<template>
    <v-row>
        <v-col class="my-auto">
            <Card>
                <template v-slot:title>
                    Portfolio
                </template>
                <p class="mb-4">
                    Here is an overview of the projects I have worked on during my studies at Fontys University of Applied Sciences. Below you will find some of the skills and fields of knowledge that I have applied during these projects.
                </p>
                <div class="text-center">
                    <v-chip 
                        v-for="uniqueSkill, index in uniqueSkills.sort((a, b)=>orderSkills(a, b))" :key="index"
                        :color="projects[slide].skillsApplied.some(skill => skill.title === uniqueSkill.title) ? 'primary' : ''"
                        :prepend-icon="uniqueSkill.icon"
                        class="mx-2 mb-2"
                    >
                        {{ uniqueSkill.title }}
                    </v-chip>
                </div>
            </Card>
        </v-col>
        <v-col cols="12" md="8" class="my-auto">
            <v-carousel v-model="slide" show-arrows="hover">
                <v-carousel-item 
                    v-for="project, index in projects" :key="index"
                    cover
                >
                    <v-parallax
                        :src="project.imageUrl"
                        height="100%"
                    >
                        <v-sheet class="text-center" style="background: rgba(0,0,0,0.7);" height="100%"> 
                            <h1>
                                {{ project.company }}
                            </h1>
                            <h2>
                                {{ project.project }}
                            </h2>
                            <h4>
                                {{ project.type}}
                            </h4>
                            <p>
                                {{ project.description }}
                            </p>
                        </v-sheet>
                    </v-parallax>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import Project from '@/models/project.model';
import Skill from '@/models/skill.model';
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const slide = ref(0);

const projects: Project[] = [
{
        company: "ioThings",
        project: "ioTracker Automated Configuration Tool",
        description: "Insert description here",
        skillsApplied: [
            {
                title: "Node.js",
                icon: "mdi-nodejs",
                description: ""
            },
            {
                title: "IoT",
                icon: "mdi-access-point",
                description: ""
            },
            {
                title: "Vue",
                icon: "mdi-vuejs",
                description: ""
            },
        ],
        imageUrl: "https://www.iotracker.nl/uploads/images/3/d/3d0098b28e66386d05dcd7ca768d572926a934c8.jpg",
        type: "Internship Project"
    },
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
        imageUrl: "https://www.ict.eu/sites/corporate/files/images/orangenxt-mobilenxt-710x375.png",
        type: "Group Project"
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
                title: "MySQL",
                icon: "mdi-database",
                description: ""
            }
        ],
        imageUrl: "https://www.simac-ids.co.uk/uploads/cache/fb_og_image/uploads/media/5d820843ca2df/simac-sign.jpg",
        type: "Group Project"
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
        imageUrl: "https://www.informa.nl/wp-content/uploads/2018/08/lowHeader_multi.jpg",
        type: "Group Project"
    },
    {
        company: "BDO Digital",
        project: "INSERT TITLE",
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
        imageUrl: "https://www.accountancydaily.co/sites/default/files/styles/media_thumbnail/public/field/image/bdo_291054856_editorial_use_only_2.jpg?itok=MpyXYyro",
        type: "Group Project"
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