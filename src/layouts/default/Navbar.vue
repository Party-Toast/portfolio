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
        title: 'Home',
        icon: 'mdi-home',
        to: '/'
    },
    {
        title: 'About',
        icon: 'mdi-information',
        to: '/about'
    }
]
</script>
