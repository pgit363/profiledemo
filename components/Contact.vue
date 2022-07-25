<template>
<div>
    <v-img src="/images/bgcar.jpg">
        <v-row>
            <v-col md="8">
col1
            </v-col>
            <v-col>
col2
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
