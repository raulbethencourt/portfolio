<template>
    <section
        class="full-screen"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[0].title.toLowerCase()}`
        "
    >
        <v-parallax
            :src="
                $vuetify.theme.dark
                    ? require(`@/assets/images/dark-bg.png`)
                    : require(`@/assets/images/light-bg.png`)
            "
        >
            <v-row class="d-flex justify-md-space-center justify-center align-center">
                <v-col
                    cols="12"
                    md="5"
                    class="d-flex justify-center"
                >
                    <g-image
                        alt="profile image"
                        :src="
                            $vuetify.theme.dark
                                ? require(`@/assets/images/profile-dark.png`)
                                : require(`@/assets/images/profile-light.png`)
                        "
                        :class="
                            $vuetify.theme.dark
                                ? 'dark-profile rounded-circle portrait'
                                : 'light-profile rounded-circle portrait'
                        "
                    />
                </v-col>

                <v-col
                    cols="9"
                    md="4"
                    :class="$vuetify.theme.dark ? 'dark-text' : 'light-text'"
                >
                    <h1 class="parallax__title font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.about.title }}
                    </h1>
                    <h6
                        v-for="text in $page.texts.edges[0].node.about
                            .description"
                        v-bind:key="text"
                        class="parallax__text"
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


