<template>
<div id="posrtfolio">
    <!-- <v-img src="/images/bg-1.jpg"> -->
    <v-row class="pa-5" no-gutters>
        <!-- <v-card> -->
            <v-tabs color="deep-purple accent-4" right align-with-title>
                <v-tab>Landscape</v-tab>
                <v-tab>City</v-tab>
                <v-tab>Abstract</v-tab>

                <v-tab-item v-for="n in 3" :key="n">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="i in 6" :key="i" cols="12" md="4">
                                <v-img :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`" aspect-ratio="1"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>
            </v-tabs>
        <!-- </v-card> -->
        <!-- <v-col v-for="n in 4" :key="n" cols="6" md="4">
                <v-card class="mx-auto pa-2 mt-5" max-width="344">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>
                </v-card>
            </v-col> -->
    </v-row>
    <!-- </v-img> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>
