<template>
    <section
        class="full-screen"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[0].title.toLowerCase()}`
        "
    >
        <v-parallax
            dark
            :src="
                $vuetify.theme.dark
                    ? require(`@/assets/images/dark-bg.png`)
                    : require(`@/assets/images/light-bg.png`)
            "
        >
            <v-row class="d-flex justify-space-around align-center">
                <v-col
                    cols="12"
                    md="5"
                    class="d-flex justify-center justify-md-end"
                >
                    <g-image
                        class="rounded-circle portrait"
                        alt="Example image"
                        :src="
                            $vuetify.theme.dark
                                ? require(`@/assets/images/profile-dark.png`)
                                : require(`@/assets/images/profile-light.png`)
                        "
                        :class="
                            $vuetify.theme.dark
                                ? 'dark-profile'
                                : 'light-profile'
                        "
                    />
                </v-col>
                <!-- TODO responsif -->
                <v-col
                    cols="9"
                    md="5"
                    :class="
                        $vuetify.theme.dark ? 'dark-text' : 'light-text'
                    "
                >
                    <h1 class="text-h1 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.about.title }}
                    </h1>
                    <h6
                        v-for="text in $page.texts.edges[0].node.about
                            .description"
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
