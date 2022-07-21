<template>
<div id="portfolio">
    <v-img src="https://pranavkamble.in/img/portfolio/bg-3.jpg">

        <v-row class="pa-5" no-gutters>
            <v-tabs color="deep-purple accent-4" right align-with-title>
                <v-tab>All</v-tab>
                <v-tab>Admin Panel</v-tab>
                <v-tab>Websites</v-tab>
                <v-tab>Apps</v-tab>

                <v-tab-item v-for="n in 4" :key="n">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="i in 6" :key="i" cols="12" md="4">
                                <v-img max-width="256" max-heigth="256" src="https://pranavkamble.in/img/projects/T-1.PNG" lazy-src="https://pranavkamble.in/img/projects/T-1.PNG"></v-img>
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
            skills: [{
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                    title: 'Laravel',
                    proficiency: '90%'
                },
                {
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png',
                    title: 'Nuxt Js',
                    proficiency: '70%'
                },
                {
                    icon: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
                    title: 'Node Js',
                    proficiency: '50%'
                },
                {
                    icon: 'https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png',
                    title: 'PHP',
                    proficiency: '70%'
                },
                {
                    icon: 'https://pngimg.com/uploads/mysql/mysql_PNG29.png',
                    title: 'MySQL',
                    proficiency: '80%'
                },
                {
                    icon: 'https://ih1.redbubble.net/image.2107976074.2036/st,small,845x845-pad,1000x1000,f8f8f8.jpg',
                    title: 'AWS services',
                    proficiency: '50%'
                },
                {
                    icon: 'https://w7.pngwing.com/pngs/362/1/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png',
                    title: 'VSCode',
                    proficiency: ''
                },
                {
                    icon: 'https://www.nicepng.com/png/detail/776-7760129_update-native-postman-on-ubuntu-postman-tool.png',
                    title: 'Postman',
                    proficiency: ''
                }
            ],
        };
    },
};
</script>
