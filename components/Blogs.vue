<template>
<div id="blogs">
    <v-img src="/images/bg/bg-stats.jpg">
        <v-row class="pa-5" no-gutters>
            <v-col v-for="(item, i) in items" :key="i" router exact cols="8" md="4" sm="4">
                <!-- <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card> -->
                <v-card class="mx-auto pa-2 mt-5 justify-center" max-width="330">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                    <v-card-title>
                        {{item.title}}
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
                                The major part is to deploy Laravel application there are so manny options but i choose Cpanel hosting because Capnel hosting is lower in cost and affordable for small scale business.
                                In this blog, I'm trying to explain how we can deploy our production ready laravel 8 application on Cpanel shared hosting with GitHub.
                            </v-card-text>
                            <v-card-action>
                                <v-btn
                                    class="ma-2"
                                    :loading="loading"
                                    :disabled="loading"
                                    color="primary"
                                    @click="loader = 'loading'"
                                    >
                                        See More
                                </v-btn>
                            </v-card-action>
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
            loader: null,
            loading: false,
            items: [{
                icon: 'mdi-apps',
                title: 'DEPLOY LARAVEL 8 APPLICATION ON SHARED HOSTING',
                to: '/blog/larave8'
            }],
        };
    },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
};
</script>
