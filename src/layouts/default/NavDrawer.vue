<template>
    <v-navigation-drawer v-model:model-value="show">
        <v-list>
            <v-list-item 
                v-for="nav, index in navs" :key="index"
                :to="nav.to"
                :active="nav.to === $route.path"
            >
                <template v-slot:prepend>
                    <v-icon>{{ nav.icon }}</v-icon>
                </template>
                <v-list-item-title v-text="nav.title" />
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const navs = [
    {
        title: 'Hi there!',
        icon: 'mdi-hand-wave-outline',
        to: '/'
    },
    {
        title: 'Journey so far',
        icon: 'mdi-map',
        to: '/journey'
    },
    {
        title: 'Skills',
        icon: 'mdi-lightbulb-outline',
        to: '/skills'
    },
    {
        title: 'Portfolio',
        icon: 'mdi-briefcase-outline',
        to: '/portfolio'
    },
    {
        title: 'Contact',
        icon: 'mdi-email-outline',
        to: '/contact'
    },

]

const show = ref(true)
</script>
