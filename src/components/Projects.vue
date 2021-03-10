<template>
    <section
        class="projects-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[1].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="section-title">
                        {{ $page.texts.edges[0].node.projects.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row class="mb-8 mt-10">
                <v-col
                    cols="12"
                    md="10"
                    offset-md="1"
                    class="d-flex justify-space-between flex-wrap"
                >
                    <v-card
                        v-for="project in $page.texts.edges[0].node.projects.works"
                        :key="project.title"
                        class="mb-15 project-card"
                        data-aos="fade-up"
                    >
                        <v-img
                            aspect-ratio="2"
                            :src="require(`@/assets/images/projects/${project.image}.png`)"
                        >
                        </v-img>

                        <v-card-title class="text-uppercase font-weight-bold text-h4">
                            {{ project.title }}
                        </v-card-title>

                        <v-row class="d-flex justify-center mb-1 mt-1">
                            <v-icon
                                v-for="(icon, i) in project.icons"
                                :key="i"
                                large
                                :color="icon.color"
                                class="mr-1 ml-1"
                                >{{ icon.name }}</v-icon
                            >
                        </v-row>

                        <v-card-actions class="mb-3">
                            <div v-if="project.url">
                                <v-btn
                                    text
                                    :href="project.url"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {{ $page.texts.edges[0].node.projects.btns[0] }}
                                </v-btn>
                            </div>

                            <div v-if="project.git">
                                <v-btn
                                    text
                                    :href="project.git"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <v-icon large>mdi-github</v-icon>
                                </v-btn>
                            </div>
                            <v-spacer></v-spacer>

                            <v-btn text @click="project.btn = !project.btn">
                                {{ $page.texts.edges[0].node.projects.btns[1] }}
                            </v-btn>
                        </v-card-actions>
                        <v-overlay :absolute="absolute" opacity="0.9" :value="project.btn">
                            <div class="d-flex flex-column align-center">
                                <v-card-text class="overlay-text">
                                    {{ project.description }}
                                </v-card-text>
                                <v-btn
                                    outlined
                                    @click="project.btn = false"
                                    class="overlay-btn--exit"
                                >
                                    {{ $page.texts.edges[0].node.projects.btns[2] }}
                                </v-btn>
                            </div>
                        </v-overlay>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import AOS from 'aos';

export default {
    data: () => ({
        show: false,
        isActive: false,
        absolut: false
    }),
    mounted() {
        AOS.init({ duration: 1200 });
    }
};
</script>
