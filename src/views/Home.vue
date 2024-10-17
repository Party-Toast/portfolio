<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
            <Card class="mb-4">
                <template v-slot:title>
                    {{ $t('home.title') }}
                </template>
                <v-row>
                    <v-col>
                        <span>{{ $t('home.introduction_1') }}</span>
                        <a href="https://www.intraffic.nl/" style="text-decoration: none;">ICT InTraffic</a>
                        <span>{{ $t('home.introduction_2') }}</span>
                        <a href="https://www.iotracker.nl/" style="text-decoration: none;">ioThings</a>
                        <span>{{ $t('home.introduction_3') }}</span>
                        <p v-for="hobby, index in hobbies" :key="index">
                            <br>
                            <v-icon class="mr-1" :color="`purple-lighten-${index + 1}`">{{ hobby.icon }}</v-icon>
                            {{ hobby.description }}
                        </p>
                    </v-col>
                    <v-col cols="auto" class="ma-auto">
                        <v-img 
                            width="250px"
                            src="../assets/me.jpg"
                            lazy-src="../assets/me_lowres.jpg"
                            class="rounded-lg"
                        />
                    </v-col>
                </v-row>
            </Card>
        </v-responsive>
    </v-container>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const hobbies = computed(() => [
    {
        icon: "mdi-code-tags",
        description: t('home.programming')
    },
    {
        icon: "mdi-album",
        description: t('home.music')
    },
    {
        icon: "mdi-pot-steam",
        description: t('home.cooking')
    },
    {
        icon: "mdi-dice-3",
        description: t('home.board_gaming')
    },
    {
        icon: "mdi-bookshelf",
        description: t('home.reading')
    }
])
</script>
