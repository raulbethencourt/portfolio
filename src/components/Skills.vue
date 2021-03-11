<template>
    <section
        :class="
            $vuetify.theme.dark ? `skills-section skills-dark-bg` : `skills-section skills-light-bg`
        "
        :id="`${$page.texts.edges[0].node.sidebar.items[4].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1" class="d-flex justify-center">
                    <h2 class="section-title">
                        {{ $page.texts.edges[0].node.skills.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row class="mt-10">
                <v-col cols="8" offset="2">
                    <v-row>
                        <v-col
                            v-for="(logo, i) in $page.texts.edges[0].node.skills.logos"
                            :key="i"
                            cols="2"
                            class="d-flex justify-center"
                        >
                            <v-hover v-slot="{ hover }" open-delay="100">
                                <v-btn
                                    fab
                                    :href="logo.url"
                                    target="_blank"
                                    :elevation="hover ? 16 : 2"
                                    :class="{ 'on-hover': hover } + 'mx-auto'"
                                    rel="noreferrer noopener"
                                    width="100"
                                    height="100"
                                >
                                    <v-img
                                        max-width="70"
                                        max-height="70"
                                        :src="require(`@/assets/images/logos/${logo.icon}.png`)"
                                        class="skill-logo"
                                    ></v-img>
                                </v-btn>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
