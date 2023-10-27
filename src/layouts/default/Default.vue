<template>
    <v-app>
        <AppBar @burgerClick="showNavDrawer = !showNavDrawer"/>
        <NavDrawer :show="showNavDrawer" @showNawDrawerUpdate="showNavDrawer = !showNavDrawer"/>
        <View />
    </v-app>
</template>

<script lang="ts" setup>
    import AppBar from './AppBar.vue';
    import View from './View.vue';
    import NavDrawer from './NavDrawer.vue';

    import { ref } from 'vue';

    const showNavDrawer = ref();

</script>
 