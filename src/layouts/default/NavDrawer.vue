<template>
    <v-navigation-drawer 
        :model-value="props.show" 
        @update:model-value="$emit('showNawDrawerUpdate')"
    >
        <v-list>
            <v-list-item 
                v-for="nav, index in navs" :key="index"
                :to="nav.to"
                :active="nav.to === $route.path"
                active-color="primary"
                rounded
                class="mx-1 mb-1"
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

const props = defineProps({
    show: {
        type: Boolean
    }
})

const navs = [
    {
        title: 'Hi there!',
        icon: 'mdi-hand-wave-outline',
        to: '/'
    },
    {
        title: 'Journey',
        icon: 'mdi-map',
        to: '/journey'
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

</script>
