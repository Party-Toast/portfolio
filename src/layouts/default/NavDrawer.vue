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
                color="primary"
                rounded
                class="mx-1 mb-1"
            >
                <template v-slot:prepend>
                    <v-icon>{{ nav.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ nav.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    show: {
        type: Boolean
    }
})

const navs = computed(() => [
    {
        title: t('home.title'),
        icon: 'mdi-hand-wave-outline',
        to: '/'
    },
    {
        title: t('journey.title'),
        icon: 'mdi-map',
        to: '/journey'
    },
    {
        title: t('portfolio.title'),
        icon: 'mdi-briefcase-outline',
        to: '/portfolio'
    },
    {
        title: t('contact.title'),
        icon: 'mdi-email-outline',
        to: '/contact'
    },
])

</script>
