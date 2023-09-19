<template>
    <v-card :elevation="elevation">
        <v-card-title v-if="slots.title" :class="`bg-${titleColor}`">
            <slot name="title"></slot>
        </v-card-title>
        <v-divider v-if="!titleColor && slots.title" thickness="2"/>   
        <v-card-text class="pa-4">
            <slot></slot>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

defineProps({
    titleColor: {
        type: String
    },
    elevation: {
        type: Number,
        default: 0
    }
})

const slots = useSlots();
</script>