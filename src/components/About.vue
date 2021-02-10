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
                    <h1 class="text-h1 font-weight-bold mb-5">{{ $static.texts.edges[0].node.about.title }}</h1>
                    <h6
                        v-for="text in $static.texts.edges[0].node.about.description"
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
    })
}
</script>

<static-query>
query {
    texts: allEnglishTexts {
        edges {
            node {
                about {
                    title
                    description
                }
            }
        }
    }
}
</static-query>

