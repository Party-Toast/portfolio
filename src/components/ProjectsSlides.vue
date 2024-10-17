<template>
    <v-row>
        <v-col class="my-auto">
            <Card>
                <template v-slot:title>
                    {{ $t('portfolio.title') }}
                </template>
                <p class="mb-4">
                    {{ $t('portfolio.introduction') }}
                </p>
                <div class="text-center">
                    <v-chip 
                        v-for="skill, index in Object.values(skills)" :key="index"
                        :color="projects[slide].skillsApplied.some(appliedSkill => appliedSkill.title === skill.title) ? 'primary' : ''"
                        :prepend-icon="skill.icon"
                        class="mx-2 mb-2"
                    >
                        {{ skill.title }}
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
                                    {{ project.title }}
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
import { Skills } from '@/models/skill.model';
import Card from '@/components/Card.vue';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const slide = ref(0);

const skills: Skills = {
    ai: {
        title: "Artificial Intelligence",
        icon: "mdi-robot"
    },
    azure: {
        title: "Azure",
        icon: "mdi-microsoft-azure",
    },
    dotNet: {
        title: ".NET",
        icon: "mdi-language-csharp",
    },
    googleCloudPlatform: {
        title: "Google Cloud Platform",
        icon: "mdi-google-cloud",
    },
    iot: {
        title: "IoT",
        icon: "mdi-access-point",
    },
    java: {
        title: "Java",
        icon: "mdi-language-java"
    },
    javaScript: {
        title: "JavaScript",
        icon: "mdi-language-javascript",
    },
    lowCode: {
        title: "Low-code",
        icon: "mdi-code-braces",
    },
    mongoDB: { 
        title: "MongoDB",
        icon: "mdi-database",
    },
    mySQL: {
        title: "MySQL",
        icon: "mdi-database",
    },
    node: {
        title: "Node.js",
        icon: "mdi-nodejs",
    },
    python: {
        title: "Python",
        icon: "mdi-language-python",
    },
    react: {
        title: "React",
        icon: "mdi-react",
    },
    typeScript: {
        title: "TypeScript",
        icon: "mdi-language-typescript",
    },
    vsCodeArchitecture: {
        title: "VS Code Architecture",
        icon: "mdi-microsoft-visual-studio-code",
    },
    vue: {
        title: "Vue",
        icon: "mdi-vuejs",
    },
}

const projects = computed<Project[]>(() => [
    {
        company: "Motar",
        title: t('portfolio.projects.motar.title'),
        description: t('portfolio.projects.motar.description'),
        skillsApplied: [ 
            skills.typeScript, 
            skills.javaScript, 
            skills.vsCodeArchitecture,
            skills.lowCode
        ],
        imageUrl: "https://www.ict.eu/sites/corporate/files/images/Motar-Machine_edit%20copy.jpg",
        type: t('general.type.internship_project')
    },
    {
        company: "ioThings",
        title: t('portfolio.projects.ioThings.title'),
        description: t('portfolio.projects.ioThings.description'),
        skillsApplied: [
            skills.node,
            skills.iot,
            skills.vue
        ],
        imageUrl: "https://www.iotracker.nl/uploads/images/3/d/3d0098b28e66386d05dcd7ca768d572926a934c8.jpg",
        type: t('general.type.internship_project')
    },
    {
        company: "OrangeNXT",
        title: t('portfolio.projects.orangeNXT.title'),
        description: t('portfolio.projects.orangeNXT.description'),
        skillsApplied: [
            skills.react,
            skills.googleCloudPlatform,
            skills.mySQL,
            skills.mongoDB,
            skills.iot
        ],
        imageUrl: "https://www.ict.eu/sites/corporate/files/images/orangenxt-mobilenxt-710x375.png",
        type: t('general.type.group_project')
    },
    {
        company: "Simac IDS",
        title: t('portfolio.projects.simacIDS.title'),
        description: t('portfolio.projects.simacIDS.description'),
        skillsApplied: [
            skills.vue,
            skills.java,
            skills.mySQL
        ],
        imageUrl: "https://www.simac-ids.co.uk/uploads/cache/fb_og_image/uploads/media/5d820843ca2df/simac-sign.jpg",
        type: t('general.type.group_project')
    },
    {
        company: "Informa",
        title: t('portfolio.projects.informa.title'),
        description: t('portfolio.projects.informa.description'),
        skillsApplied: [
            skills.python,
            skills.ai
        ],
        imageUrl: "https://www.informa.nl/wp-content/uploads/2018/08/lowHeader_multi.jpg",
        type: t('general.type.group_project')
    },
    {
        company: "BDO Digital",
        title: t('portfolio.projects.bdoDigital.title'),
        description: t('portfolio.projects.bdoDigital.description'),
        skillsApplied: [
            skills.react,
            skills.dotNet,
            skills.azure,
            skills.mySQL
        ],
        imageUrl: "https://www.accountancydaily.co/sites/default/files/styles/media_thumbnail/public/field/image/bdo_291054856_editorial_use_only_2.jpg?itok=MpyXYyro",
        type: t('general.type.group_project')
    },
]);

</script>