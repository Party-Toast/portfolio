<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
            <Card class="mb-6 mx-auto" :width="$vuetify.display.lgAndUp ? '85%' : '100%'">
                <template v-slot:title>
                    {{ t('journey.title')}}
                </template>
                <p>
                    {{ t('journey.introduction')}}
                </p>
            </Card>
            <Semesters/>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import Semesters from '@/components/Semesters.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>