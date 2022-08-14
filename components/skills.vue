<template>
<div>
    <v-img src="/images/bg/bg-3.jpg">
        <v-container class="lighten-5">
            <v-row no-gutters>
                <template v-for="(item, i) in skills">
                    <v-col class="pa-3" :key="i">
                        <v-card  max-width="344" class="pa-2 lighten-2 fill-height d-flex flex-column justify-center align-center" outlined tile>
                            <div class="skill-item text-center">
                                <v-img width="100" :src="item.icon"></v-img>
                                <v-card-text>
                                    <h2><span class="counter">{{item.proficiency}}</span></h2>
                                    <!-- {{item.title}} -->
                                </v-card-text>
                            </div>
                        </v-card>
                    </v-col>
                    <v-responsive v-if="i === 3" :key="`width-${i}`" width="100%"></v-responsive>
                </template>
            </v-row>
        </v-container>
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
