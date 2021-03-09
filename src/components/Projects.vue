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
                        :key="project.image"
                        class="mb-15 project-card"
                        data-aos="fade-up"
                    >
                        <v-img
                            height="400px"
                            :src="require(`@/assets/images/projects/${project.image}.png`)"
                            position="top center"
                        >
                        </v-img>

                        <v-card-title class="text-uppercase font-weight-bold text-h4">
                            {{ project.title }}
                        </v-card-title>

                        <v-row justify="center">
                            <v-icon v-for="(icon, i) in project.icons" :key="i" large>{{
                                icon
                            }}</v-icon>
                        </v-row>

                        <v-card-actions>
                            <div v-if="project.url">
                                <v-btn
                                    color="accent"
                                    text
                                    :href="project.url"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Explore
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

                            <v-btn icon @click="project.btn = !project.btn">
                                <v-icon>{{
                                    project.btn ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="project.btn">
                                <v-divider></v-divider>

                                <v-card-text class="text--primary">
                                    {{ project.description }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
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
        isActive: false
    }),
    mounted() {
        AOS.init({ duration: 1200 });
    }
};
</script>
