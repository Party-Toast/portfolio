<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
            <v-row justify="space-around">
                <v-col cols="12" md="4" class="my-auto">
                    <Card>
                        <p>
                            Feel free to contact me using the contact form. I will try to get back to you as soon as possible. My resume and references are available upon request.
                        </p>
                        <br>
                        <p>
                            For additional information, please check out the following resources:
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
                            Contact form
                        </template>
                        <v-form ref="form" :disabled="sendingEmail">
                            <v-text-field
                                label="Name"
                                name="name"
                                required
                                :rules="rules.name"
                            />
                            <v-text-field
                                label="Email"
                                name="email"
                                required
                                :rules="rules.email"
                            />
                            <v-textarea
                                label="Message"
                                required
                                name="message"
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
                                    Send
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
        title: 'GitLab',
        icon: 'mdi-gitlab',
        url: 'https://gitlab.com/sytsewalraven'
    },
    {
        title: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Party-Toast'
    }
]

const rules = {
    name: [
        (v: any) => !!v || "Required",
        (v: any) => (v && v.length <= 50) || "Name cannot be longer than 50 characters"
    ],
    email: [
        (v: any) => !!v || "Required",
        (v: any) => (v && v.length <= 100) || "Email cannot be longer than 100 characters",
        (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: [
        (v: any) => !!v || "Required",
        (v: any) => (v && v.length <= 1000) || "Message cannot be longer than 1000 characters"
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