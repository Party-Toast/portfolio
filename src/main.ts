/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json'
import nl from '@/locales/nl.json'

const app = createApp(App);

const i18n = createI18n({
    locale: localStorage.getItem('locale') ?? 'en',
    fallbackLocale: 'en',
    messages: {
        en: en as any,
        nl: nl as any
    },
    legacy: false
});

registerPlugins(app);

app.use(i18n);
app.mount('#app');
