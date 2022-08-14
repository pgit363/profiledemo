<template>
<div>
    <v-img src="/images/bg/bg-1.jpg">
        <v-row class="pa-5" no-gutters>
            <v-col v-for="(item, i) in experience" :key="i" cols="12" md="4">
                <!-- <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card> -->
                <v-card rounded class="mx-auto pa-2 mt-5" max-width="344">
                    <v-img :src="item.icon" height="200px"></v-img>

                    <v-card-title>
                        {{item.title}}
                    </v-card-title>

                    <v-card-actions>
                        <v-btn @click="show = !show" color="orange lighten-2" text>
                            Explore
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                {{item.description}}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-img>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            experience: [{
                    icon: 'https://pranavkamble.in/img/portfolio/indigital.png',
                    title: 'Associate Software Engineer',
                    description: 'Working at Indigital Technologies as Associate Software Engineer. Indigital Technologies is a research based digital healthcare technology company with 3 provisional patents on our name having offices in India, USA and UAE.'
                },
                {
                    icon: 'https://pranavkamble.in/img/portfolio/home.png',
                    title: ' Software Developer Intern',
                    description: 'Hands on experience on LMS & E-Leraning website which is developed in HTML, CSS, JAVASCRIPT, PHP. Worked as a part of team of 3 members and added some security features in existing website.'
                },
                {
                    icon: 'https://pranavkamble.in/img/portfolio/freelance.jpg',
                    title: 'Freelancer',
                    description: 'Freelance for various companies like E-commerce Tender Alerts Web Application for BSSP technology, Nashik. Also static profile websites for Global Arey trending Comppany.'
                },
            ],
        };
    },
};
</script>
