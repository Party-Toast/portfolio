<template>
    <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
            <Card class="mb-4">
                <template v-slot:title>
                    Hi there!
                </template>
                <v-row>
                    <v-col>
                        <p>
                            My name is Sytse and I'm a ICT & Software graduate at Fontys University of Applied sciences, software developer at <a href="https://www.iotracker.eu/" style="text-decoration: none;">ioTracker</a>, and soon-to-be software engineer at <a href="https://www.intraffic.nl/">InTraffic</a>. 
                            I have a particular interest in full-stack web development and hardware interfacing.
                        </p>
                        <p v-for="hobby, index in hobbies" :key="index">
                            <br>
                            <v-icon class="mr-1" :color="`purple-lighten-${index + 1}`">{{ hobby.icon }}</v-icon>
                            {{ hobby.description }}
                        </p>
                    </v-col>
                    <v-col cols="auto" class="ma-auto">
                        <v-img 
                            width="250px"
                            src="../assets/me.jpg"
                            lazy-src="../assets/me_lowres.jpg"
                            class="rounded-lg"
                        />
                    </v-col>
                </v-row>
            </Card>
        </v-responsive>
    </v-container>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue';

const hobbies = [
    {
        icon: "mdi-code-tags",
        description: "I've been programming since high school, which is where I was inspired to follow my current path as a software developer. Apart from Fontys' assignments, I'm always looking for new things to learn and new projects to work on. From working on this very website and setting up my own home server on a Raspberry Pi, to creating custom software and hardware solutions for my other hobbies."
    },
    {
        icon: "mdi-album",
        description: "Music is one of my greatest passions. I play the saxophone, collect and listen to vinyl records — especially funk, soul, and prog-rock — and enjoy going to concerts and festivals. In addition, I like tinkering with and repairing vintage HiFi equipment."
    },
    {
        icon: "mdi-pot-steam",
        description: "I love cooking and dining with friends and family and am specifically fond of Mediterranean and Asian cuisine. Experimenting with new recipes and ingredients is one of my favorite ways of finishing a busy day."
    },
    {
        icon: "mdi-dice-3",
        description: "Whenever possible, I will try to get a group of friends together for a board game night. Longer games and social deduction games are my favorite, but I'm always open to trying something new."
    },
    {
        icon: "mdi-bookshelf",
        description: "If I'm not busy with any of the above, I'm probably reading a book. I mainly enjoy reading fiction, particularly science fiction and adventure novels."
    }
]
</script>
