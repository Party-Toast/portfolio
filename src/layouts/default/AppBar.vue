<template>
    <v-app-bar>
        <v-app-bar-title>
        <v-icon icon="mdi-circle-slice-6" />
            Essentials Preset
        </v-app-bar-title>
        <v-btn icon @click="currentTheme = currentTheme === 'dark' ? 'light' : 'dark'">
            <v-icon v-if="currentTheme === 'dark'">mdi-weather-night</v-icon>
            <v-icon v-else>mdi-weather-sunny</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
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

</script>
