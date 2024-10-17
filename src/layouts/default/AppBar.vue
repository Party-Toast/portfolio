<template>
    <v-app-bar>
        <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" @click="$emit('burgerClick')"/>
        <v-app-bar-title class="text-h5">
            <span class="text-primary">{&nbsp;</span>sytse<span class="text-primary">.dev</span><span class="text-primary">&nbsp;}</span>
        </v-app-bar-title>
        <v-divider vertical class="mr-2" thickness="2"/>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    color="primary"
                    v-bind="props"
                    icon
                >
                    {{ $i18n.locale }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(language, index) in languages" :key="index"
                    :value="$i18n.locale"
                    @click="$i18n.locale = language.locale"
                >
                    <v-list-item-title>{{ language.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- <v-btn icon @click="currentTheme = currentTheme === 'dark' ? 'light' : 'dark'">
            <v-icon>{{ currentTheme === 'dark' ? 'mdi-light-switch-off' : 'mdi-light-switch'}}</v-icon>
        </v-btn>
        <v-icon class="mr-2">{{ currentTheme === 'dark' ? 'mdi-lightbulb-outline' : 'mdi-lightbulb'}}</v-icon> -->
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

const languages = [
    {
        title: 'Nederlands',
        locale: 'nl',
    },
    {
        title: 'English',
        locale: 'en',
    }
]

</script>
