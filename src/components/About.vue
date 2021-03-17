<template>
    <section
        class="full-screen"
        :id="`${$page.texts.edges[0].node.sidebar.items[0].title.toLowerCase()}`"
    >
        <v-parallax
            :src="
                $vuetify.theme.dark
                    ? require(`@/assets/images/dark-bg.png`)
                    : require(`@/assets/images/light-bg.png`)
            "
            height="auto"
        >
            <v-row class="d-flex justify-md-space-center justify-center align-center">
                <v-col cols="12" md="5" class="d-flex justify-center">
                    <g-image
                        alt="profile image"
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
                        class="rounded-circle portrait"
                    />
                </v-col>

                <v-col cols="9" md="4" :class="$vuetify.theme.dark ? 'dark-text' : 'light-text'">
                    <h1 class="parallax__title font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.about.title }}
                    </h1>

                    <h6 class="parallax__text presentation">
                        {{ $page.texts.edges[0].node.about.description.text }}
                    </h6>

                    <v-expansion-panels class="mt-5">
                        <v-expansion-panel
                            v-for="(text, i) in $page.texts.edges[0].node.about.description.list"
                            :key="i"
                            :class="$vuetify.theme.dark ? 'dark-panel' : 'light-panel'"
                        >
                            <v-expansion-panel-header expand-icon="mdi-menu-down" class="font-weight-bold">
                                {{ i + 1 }} 
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                {{ text }}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
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
};
</script>
