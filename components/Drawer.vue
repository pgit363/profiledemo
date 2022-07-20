<template>
<div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
        <!-- <v-list>
            <v-list-item>

            </v-list-item>
        </v-list> -->

        <v-img max-width="150" class="img-fluid img-profile rounded-circle mx-auto mt-5 mb-2" src="https://pranavkamble.in/img/pk.jpg" />
        <v-tabs vertical>
            <v-tab v-for="(item, i) in items" :key="i" v-on:click="scrollToElement(item.to)" exact>
                <v-icon aria-label="My Account" role="img" aria-hidden="false">{{ item.icon }}</v-icon>
                <v-list-item-content>
                    <v-list-item-title class="text-left ml-10" v-text="item.title" />
                </v-list-item-content>
                <!-- <v-list-item-action>
                    <v-icon aria-label="My Account" role="img" aria-hidden="false">{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                </v-list-item-content> -->
            </v-tab>
        </v-tabs>
    </v-navigation-drawer>
</div>
</template>

<script>
import { mdiAccount } from "@mdi/js";

export default {
    data() {
        return {
            clipped: false,
            drawer: true,
            fixed: false,
            icons: {
                mdiAccount
            },
            items: [{
                    icon: 'mdi-apps',
                    title: 'About',
                    to: 'about'
                },
                {
                    icon: 'mdi-domain',
                    title: 'Experience',
                    to: 'experience'
                },
                {
                    icon: 'mdi-dropbox',
                    title: 'Skills',
                    to: 'skills'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Portfolio',
                    to: 'portfolio'
                },
                {
                    icon: 'mdi-nintendo-switch',
                    title: 'Blogs',
                    to: 'blogs'
                },
                {
                    icon: 'mdi-desktop-classic',
                    title: 'Projects',
                    to: 'projects'
                },
                {
                    icon: 'mdi-message-text',
                    title: 'Contact',
                    to: 'contact'
                },
                {
                    icon: 'mdi-lifebuoy',
                    title: 'Hire Me',
                    to: 'hireme'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Pranav Kamble'
        }
    },
    methods: {
        scrollToElement(id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            });
        },
    },
}
</script>
