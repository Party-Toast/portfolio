<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
            <v-row justify="space-around">
                <v-col cols="12" md="4" class="my-auto">
                    <Card>
                        <p>
                            {{ t('contact.introduction') }}
                        </p>
                        <br>
                        <p>
                            {{ t('contact.additional_information') }}
                        </p>
                        <v-list class="pb-0">
                            <v-list-item 
                                v-for="link, index in links" :key="index"
                                rounded
                                :prepend-icon="link.icon"
                                @click="openUrl(link.url)"
                            >   
                                <v-list-item-title>{{ link.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </Card>
                </v-col>
                <v-col cols="12" md="7">
                    <Card>
                        <template v-slot:title>
                            {{ t('contact.contact_form') }}
                        </template>
                        <v-form ref="form" :disabled="sendingEmail">
                            <v-text-field
                                :label="t('contact.form.name')"
                                name="name"
                                required
                                :rules="rules.name"
                            />
                            <v-text-field
                                :label="t('contact.form.email')"
                                name="email"
                                required
                                :rules="rules.email"
                            />
                            <v-textarea
                                :label="t('contact.form.message')"
                                name="message"
                                required
                                :rules="rules.message"
                                counter
                            />
                            <div class="mt-2">
                                <v-btn 
                                    @click="validateAndSendForm()"
                                    :disabled="sendingEmail"
                                    color="primary"
                                    class="mr-2"
                                >
                                    {{ t('contact.form.send') }}
                                </v-btn>
                                <v-icon v-if="sendingEmail">mdi-loading mdi-spin</v-icon>
                                <v-icon v-else-if="emailSuccess === false" color="error">mdi-close</v-icon>
                                <v-icon v-else-if="emailSuccess" color="success">mdi-check</v-icon>
                            </div>
                        </v-form>
                    </Card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const form = ref<HTMLFormElement>()
const sendingEmail = ref(false)
const emailSuccess = ref(undefined as boolean | undefined)

const links = [
    {
        title: 'LinkedIn',
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/sytse-walraven/'
    },
    {
        title: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Party-Toast'
    },
    {
        title: 'GitLab',
        icon: 'mdi-gitlab',
        url: 'https://gitlab.com/sytsewalraven'
    }
]

const rules = {
    name: [
        (v: any) => !!v || t('contact.form.rules.required'),
        (v: any) => (v && v.length <= 50) || t('contact.form.rules.character_limit', [t('contact.form.name'), 50])
    ],
    email: [
        (v: any) => !!v || t('contact.form.rules.required'),
        (v: any) => (v && v.length <= 100) || t('contact.form.rules.character_limit', [t('contact.form.email'), 100]),
        (v: any) => /.+@.+\..+/.test(v) || t('contact.form.rules.valid_email')
    ],
    message: [
        (v: any) => !!v || t('contact.form.rules.required'),
        (v: any) => (v && v.length <= 1000) || t('contact.form.rules.character_limit', [t('contact.form.message'), 1000])
    ]
}

const openUrl = (url: string) => {
    window.open(url, '_blank')
}

const validateAndSendForm = async() => {
    form.value?.validate().then((status: any) => {
        if(status.valid) {
            sendEmail()
        }
    })
}

const sendEmail = () => {
    const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID as string
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID as string
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY as string

    emailSuccess.value = undefined
    sendingEmail.value = true
    emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        'form',
        PUBLIC_KEY
    )
    .then(response => {
        emailSuccess.value = true
    })
    .catch(error => {
        emailSuccess.value = false
    })
    .finally(() => {
        sendingEmail.value = false
    })
}

</script>