<template>
    <v-navigation-drawer>
        <v-list>
            <v-list-item 
                v-for="nav, index in navs" :key="index"
                :to="nav.to"
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
const navs = [
    {
        title: 'Hi there!',
        icon: 'mdi-hand-wave-outline',
        to: '/'
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
        title: 'Resume',
        icon: 'mdi-file-document-outline',
        to: '/resume'
    },
    {
        title: 'Contact',
        icon: 'mdi-email-outline',
        to: '/contact'
    },

]
</script>
