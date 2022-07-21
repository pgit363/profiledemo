<template>
<div>
    <v-img src="https://pranavkamble.in/img/portfolio/bgcar.jpg">
        <v-row class="pa-5" no-gutters>
            <v-col v-for="n in 4" :key="n" cols="8" md="4" sm="4">
                <!-- <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card> -->
                <v-card class="mx-auto pa-2 mt-5 justify-center" max-width="330">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange lighten-2" text>
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
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
            items: [{
                    icon: 'mdi-apps',
                    title: 'About',
                    to: '/'
                },
                {
                    icon: 'mdi-domain',
                    title: 'Experience',
                    to: '/experience'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Portfolio',
                    to: '/portfolio'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Skills',
                    to: '/skills'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Blogs',
                    to: '/blogs'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Projects',
                    to: '/projects'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Contact',
                    to: '/contact'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Hire Me',
                    to: '/hireme'
                }
            ],
        };
    },
};
</script>
