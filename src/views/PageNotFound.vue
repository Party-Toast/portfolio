<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-row>
                <v-col>
                    <h1>{{ t('pageNotFound.whoops') }}</h1>
                    <h2>{{ t('pageNotFound.title') }}</h2>
                    <p>{{ t('pageNotFound.information') }}</p>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>