<template>
<div id="portfolio">
    <v-img src="/images/bg/bg-3.jpg">

        <v-row class="pa-5" no-gutters>
            <v-tabs color="deep-purple accent-4" right align-with-title>
                <v-tab>All</v-tab>
                <v-tab>Admin Panel</v-tab>
                <v-tab>Websites</v-tab>
                <v-tab>Apps</v-tab>

                <v-tab-item>
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="(item, i) in all" :key="i" cols="12" md="4">
                                <v-img max-width="256" max-heigth="256" :src="item.image" :lazy-src="item.icom"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>

                 <v-tab-item>
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="(item, i) in admin" :key="i" cols="12" md="4">
                                <v-img max-width="256" max-heigth="256" :src="item.image" :lazy-src="item.icom"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>
                <v-tab-item>
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="(item, i) in websites" :key="i" cols="12" md="4">
                                <v-img max-width="256" max-heigth="256" :src="item.image" :lazy-src="item.icom"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>
                <v-tab-item>
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="(item, i) in apps" :key="i" cols="12" md="4">
                                <v-img max-width="256" max-heigth="256" :src="item.image" :lazy-src="item.icom"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>
            </v-tabs>
        </v-row>
    </v-img>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            all: [{
                    image: '/images/admin/TA-1.PNG',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    image: '/images/admin/BB-AD-1.jpeg',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    image: '/images/admin/BB-AD-2.jpeg',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    image: '/images/admin/BB-AD-3.jpeg',
                    title: 'PHP',
                    proficiency: '70%'
                },
                {
                    title: 'MySQL',
                    image: '/images/admin/BB-AD-4.jpeg',
                    proficiency: '80%'
                },
                {
                    image: '/images/websites/BE-1.PNG',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    image: '/images/websites/G-1.PNG',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    image: '/images/websites/T-1.PNG',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    image: '/images/websites/t.PNG',
                    title: 'PHP',
                    proficiency: '70%'
                },
            ],
            admin: [{
                    image: '/images/admin/TA-1.PNG',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    image: '/images/admin/BB-AD-1.jpeg',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    image: '/images/admin/BB-AD-2.jpeg',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    image: '/images/admin/BB-AD-3.jpeg',
                    title: 'PHP',
                    proficiency: '70%'
                },
                {
                    image: '/images/admin/BB-AD-4.jpeg',
                    title: 'MySQL',
                    proficiency: '80%'
                },
            ],
             websites: [{
                    image: '/images/websites/BE-1.PNG',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    image: '/images/websites/G-1.PNG',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    image: '/images/websites/T-1.PNG',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    image: '/images/websites/t.PNG',
                    title: 'PHP',
                    proficiency: '70%'
                }
            ],
            apps: [{
                    image: '/images/app/App-1.jpeg',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    image: '/images/app/App-2.jpeg',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    image: '/images/app/App-3.jpeg',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    image: '/images/app/App-4.jpeg',
                    title: 'PHP',
                    proficiency: '70%'
                },
                {
                    image: '/images/app/App-5.jpeg',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    image: '/images/app/App-6.jpeg',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    image: '/images/app/App-3.jpeg',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    image: '/images/app/App-7.jpeg',
                    title: 'PHP',
                    proficiency: '70%'
                },
                {
                    image: '/images/app/App-8.jpeg',
                    title: 'PHP',
                    proficiency: '70%'
                }
            ]
        };
    },
};
</script>
