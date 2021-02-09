<template>
    <section class="full-screen" id="about">
        <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row class="d-flex justify-space-around align-center">
                <v-col cols="5" class="d-flex justify-center">
                    <g-image
                        class="rounded-circle portrait"
                        alt="Example image"
                        src="~/assets/images/profile.png"
                        width="400"
                    />
                </v-col>
                <v-col cols="5">
                    <h1 class="text-h1 font-weight-bold mb-5">{{ title }}</h1>
                    <h6
                        v-for="text in description"
                        v-bind:key="text"
                        class="text-h6"
                    >
                        {{ text }}
                    </h6>
                </v-col>
            </v-row>
        </v-parallax>
    </section>
</template>

<script>
export default {
    data: () => ({
        show: false
    }),
    data() {
        return {
            title: "Hi, I'm Raul.",
            description: [
                `My goal today is to establish my expertise as a web developer for an agency.
For this, I have three pillars which are:`,
                `A technical pillar. I did my training at Élan and I am a specialist in PHP and the Symfony framework.`,
                `My second pillar is curiosity for technical innovations. What drives me right now is the use of JavaScript and in particular the Vue.js framework.`,
                `And finally a relational pillar. He seems to me to be a nice colleague and I enjoy sharing my resources and helping others.`
            ]
        }
    }
}
</script>
