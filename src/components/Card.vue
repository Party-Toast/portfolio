<template>
    <v-card :elevation="elevation" class="rounded-md">
        <v-card-title v-if="slots.title" class="text-primary">
            <slot name="title"></slot>
        </v-card-title>
        <!-- TODO: remove line if slot is unused -->
        <v-divider v-if="slots.title" thickness="2"/>
        <v-card-text class="pa-4">
            <slot></slot>
        </v-card-text>
        <v-card-actions v-if="slots.actions">
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

defineProps({
    elevation: {
        type: Number,
        default: 4
    }
})



const slots = useSlots();
</script>