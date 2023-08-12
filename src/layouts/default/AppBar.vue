<template>
    <v-app-bar>
        <v-app-bar-title>
            <b>Portfolio</b> by Sytse Walraven
        </v-app-bar-title>
        <v-spacer />
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    color="primary"
                    v-bind="props"
                    icon
                >
                    {{ locale }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(language, index) in languages" :key="index"
                    :value="language.locale"
                    @click="locale = language.locale"
                >
                    <v-list-item-title>{{ language.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn icon @click="currentTheme = currentTheme === 'dark' ? 'light' : 'dark'">
            <v-icon v-if="currentTheme === 'dark'">mdi-weather-night</v-icon>
            <v-icon v-else>mdi-weather-sunny</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const currentTheme = computed({
    get() {
        return theme.global.name.value;
    },
    set(val) {
        theme.global.name.value = val;
    }
})

const locale = ref('en');

const languages = [
    {
        title: 'English',
        locale: 'en',
    },
    {
        title: 'Nederlands',
        locale: 'nl',
    }
]

</script>
