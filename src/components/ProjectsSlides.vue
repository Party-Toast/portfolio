<template>
    <v-row>
        <v-col class="my-auto">
            <Card>
                <template v-slot:title>
                    Portfolio
                </template>
                <p class="mb-4">
                    Here is an overview of the projects I have worked on during my studies at Fontys University of Applied Sciences. Below you will find some of the skills and knowlegde domains that I have applied during these projects.
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
            <v-carousel 
                v-model="slide" 
                :show-arrows="$vuetify.display.mobile ? false : 'hover'"
            >
                <v-carousel-item 
                    v-for="project, index in projects" :key="index"
                    cover
                >
                    <v-parallax
                        :src="project.imageUrl"
                        height="100%"
                    >
                        <v-sheet class="text-center" style="background: rgba(0,0,0,0.7);" height="100%"> 
                            <div class="pa-3">
                                <p :class="$vuetify.display.mdAndUp ? 'text-h2 pt-6' : 'text-h3'">
                                    {{ project.company }}
                                </p>
                                <p :class="$vuetify.display.mdAndUp ? 'text-h4 pt-2' : 'text-h5 pt-1'">
                                    {{ project.project }}
                                </p>
                                <p :class="$vuetify.display.mdAndUp ? 'text-subtitle-1' : 'text-subtitle-2'">
                                    {{ project.type}}
                                </p>
                                <p :class="$vuetify.display.mdAndUp ? 'px-16 pt-3' : 'pt-1'">
                                    {{ project.description }}
                                </p>
                            </div>
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
        description: "During my internship at ioThings, I was tasked to create a solution for the manual, time-consuming, and error prone configuration process of the ioTracker IoT device. I researched and designed a custom domain-specific language for storing the configurator protocol specification as code. I then used this specification to generate a dynamic web-based configurator tool that allowed for the automatic generation of configuration downlinks, which could later be transferred to the ioTracker using a mobile app.",
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
        description: "Due to increased demand for one of their client's services during the pandemic, OrangeNXT was tasked to create a solution for fresh grocery supply chain monitoring that could easily be retrofitted into existing standard delivery vans. We were given a Ruuvi Tag IoT device and were instructed to created a web interface to monitor the location, temperature, and humidity of the cargo area of a delivery van. Furthermore, notifications would be sent to the driver and monitoring if certain sensor thresholds were exceeded.",
        skillsApplied: [
            {
                title: "React",
                icon: "mdi-react",
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
        description: "Simac IDS specialises in the development of access control systems. For this project, we were tasked to create a web-based visualisation tool for a real-time access control system. We created a proof of concept where customers could import their own maps and floor plans, and allowed them to drag and drop components onto the map and draw custom access control zones. This allowed for customers to easily visualise their access control environment and improved the overall monitoring experience.",
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
        company: "Informa",
        project: "Pharmaceutical Data Analysis using Machine Learning",
        description: "During my ICT & Artificial Intelligence specialisation, I worked with a team of students on a machine learning project for Informa. A large set of pharmaceutical data was provided and we were asked to come up with an out-of-the-box vision on how to use this data to create value for their customers. After performing exploratory data analyses and experimenting with various machine learning models, we created an application that would give sales insights and suggestions for the customers based on their own sales data.",
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
        project: "Data Extractor",
        description: "For the BDO Data Extractor project, we created a proof of concept for a one-size-fits-all data extraction tool that allowed BDO to safely extract data from their clients for business intelligence purposes. The tool was configured on the client's side and allowed for them to specify which data they wanted to share with BDO and how often the data should be extracted and sent to BDO. The data would then be stored in a secure Azure environment where it could be accessed by BDO for analysis.",
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
            },
            {
                title: "MySQL",
                icon: "mdi-database",
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