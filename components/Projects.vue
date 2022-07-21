<template>
<div id="projects">
    <v-timeline class="pa-5" align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
            <v-card :color="item.color" dark>
                <v-card-title class="text-h6">
                   {{item.title}}
                </v-card-title>
                <v-card-text class="white text--primary">    
                    <p>{{item.description}}</p>
                    <v-btn :color="item.color" class="mx-0" outlined>
                        Button
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            items: [{
                    color: 'purple darken-1',
                    icon: 'mdi-star',
                    title: 'Tender Alerts India',
                    link: 'tenderalertsindia.com',
                    type: 'Dynamic',
                    client: 'B S S P TECHNOLOGY AND CORPORATE SERVICES PRIVATE LIMITED',
                    technology: 'React Js, PHP Laravel',
                    description: 'Tender Alerts India Team, With B S S P TECHNOLOGY AND CORPORATE SERVICES PRIVATE LIMITED, are Providing the Services in different fields in different Firm’s name From Last 10 Years, The Whole Team Had An Experienced of more than 10 years in Tender Consulting, and related services. We Have A List of More than 1200 Happy clients with Satisfactory And continues Support. We have An Slogan with “Our Perfection is Our Reputation”, And We had proved that already with proper support to our clients.',
                },
                {
                    color: 'green lighten-1',
                    icon: 'mdi-book-variant',
                    title: 'Global Arey Trading Comopany',
                    link: 'globalarey.in',
                    type: 'Static profile',
                    client: 'Global Arey Trading Comopany PVT LTD',
                    technology: 'HTML, CSS, JavaScript',
                    description: 'Established in 2018 Global arey trading company we are wholesaler, trader, exporter best quality product of indian origin. We procure all products from land of farmers which are processed with superior technology in keeping with food industry standards. our products are extensively demanded and cheered delicious decent and healthy and long shelf life, we present with various packaging options according to requirements.We supply both organic and non organic products, we have our own Alphonso Mango farm and also we procure best quality Mangoes from bestsellers in our town.Our Fresh Product we procure from land of farmers who cultivate superior quality of product assurance. We believe in quality and punctuality of delivery.',
                },
                {
                    color: 'red lighten-2',
                    icon: 'mdi-airballoon',
                    title: 'Universal Fluid Technologies',
                    link: 'universalfluid.com',
                    type: 'Static profile',
                    client: 'Universal Fluid Technologies PVT LTD',
                    technology: 'HTML, CSS, JavaScript',
                    description: 'UFT is established since 2016 and since beginning its core business was in the semiconductor and Photovoltaic industry but later by increased team, we entered Industrial segment also viz Oil & Gas, Chemicals, Automotive, Alternate Fuel etc. We have been doing installation and trading of Industrial and Ultra High Purity products like valves, fittings, tubes, manifolds, regulators and customise assemblies to our customers in limited regions of India till 2020. Later we took distributorship of TK-Fujikin, a Japanese Korean joint venture company and established team in major cities of India to provide timely services and quality product in right applications all over India.',
                },
                {
                    color: 'indigo',
                    icon: 'mdi-buffer',
                    title: 'Prnav Kamble',
                    link: 'pranavkamble.in',
                    type: 'Static profile',
                    client: 'Personal Profile Website',
                    technology: 'Nuxt Js, Vuetify',
                    description: 'This is my personal profile website',
                },
            ],
        };
    },
};
</script>
