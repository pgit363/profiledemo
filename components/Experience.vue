<template>
<div>
    <v-img src="/images/bg-1.jpg">
        <v-row class="pa-5" no-gutters>
            <v-col v-for="n in 4" :key="n" cols="6" md="4">
                <!-- <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card> -->
                <v-card class="mx-auto pa-2 mt-5" max-width="344">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>
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
        };
    },
};
</script>
