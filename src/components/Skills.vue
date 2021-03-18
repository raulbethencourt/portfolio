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

            <v-row class="mt-md-5">
                <v-col cols="12" lg="8" offset-lg="2" class="d-flex flex-wrap justify-center">
                    <div
                        v-for="(logo, i) in $page.texts.edges[0].node.skills.logos"
                        :key="i"
                        class="skill__container"
                    >
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-hover v-slot="{ hover }" open-delay="100">
                                    <v-btn
                                        fab
                                        :href="logo.url"
                                        target="_blank"
                                        :elevation="hover ? 16 : 2"
                                        :class="{ 'on-hover': hover } + 'mx-auto'"
                                        v-bind="attrs"
                                        v-on="on"
                                        rel="noreferrer noopener"
                                        :width="$vuetify.breakpoint.mdAndUp ? 100 : 70"
                                        :height="$vuetify.breakpoint.mdAndUp ? 100 : 70"
                                    >
                                        <v-img
                                            :max-width="$vuetify.breakpoint.mdAndUp ? 70 : 40"
                                            :max-height="$vuetify.breakpoint.mdAndUp ? 70 : 40"
                                            :src="require(`@/assets/images/logos/${logo.icon}.png`)"
                                            class="skill-logo"
                                        ></v-img>
                                    </v-btn>
                                </v-hover>
                            </template>
                            <span class="d-none">My tooltip</span>
                        </v-tooltip>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
