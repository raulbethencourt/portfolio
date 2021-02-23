<template>
    <section
        class="skills-section"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[4].title.toLowerCase()}`
        "
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.skills.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="10"
                    offset="1"
                    class="d-flex justify-content-between"
                >
                    <v-hover
                        v-for="(logo, i) in $page.texts.edges[0].node.skills
                            .logos"
                        :key="i"
                        v-slot="{ hover }"
                        open-delay="100"
                    >
                        <v-card
                            :elevation="hover ? 16 : 2"
                            :class="{ 'on-hover': hover }"
                            class="mx-auto"
                            height="100"
                            width="100"
                        >
                            <v-btn
                                text
                                :href="logo.url"
                                target="_blank"
                                rel="noreferrer noopener"
                                width="100"
                                height="100"
                            >
                                <v-img
                                    width="100"
                                    height="100"
                                    :src="
                                        require(`@/assets/images/logos/${
                                            logo.icon
                                        }.png`)
                                    "
                                    class="skill-logo"
                                ></v-img>
                            </v-btn>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
