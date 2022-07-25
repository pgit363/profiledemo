<template>
<v-img height="100vh" src="https://pranavkamble.in/img/portfolio/bgcar.jpg">
    <v-card class="bg pa-2" height="100vh">
        <v-card-title class="mb-0" style="margin-top: 22%; font-size: 80px">Pranav
            <span class="text-primary">Kamble</span>
        </v-card-title>
        <v-card-subtitle class="heading mb-5" style="margin-top: 2%; font-size: 20px">
            SOFTWARE ENGINEER.
        </v-card-subtitle>
        <v-card-text class="" style="max-width: 420px;">Formulates policies and recommendations, decides or guides the course
            of action during projects to help the management in every possible way.
        </v-card-text>
        <v-card-actions class="justify-start">
            <v-btn v-for="(social, i) in socials" :key="i" :color="social.color" class="white--text" fab icon large>
                <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</v-img>
</template>

<style scoped>
.text-primary {
    color: #2196f3 !important;
}

.bg {
    background-color: rgba(0, 0, 0, 0.1)
}
</style>

<script>
export default {
    data() {
        return {
            socials: [{
                    icon: 'mdi-facebook',
                    color: 'indigo',
                },
                {
                    icon: 'mdi-linkedin',
                    color: 'cyan darken-1',
                },
                {
                    icon: 'mdi-instagram',
                    color: 'red darken-3',
                },
                 {
                    icon: 'mdi-twitter',
                    color: 'blue darken-3',
                },
            ],
        }
    },
}
</script>
