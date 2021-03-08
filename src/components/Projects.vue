<template>
    <section
        class="projects-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[1].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.projects.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row class="mb-8 mt-10">
                <template>
                    <v-col
                        v-for="project in $page.texts.edges[0].node.projects.works"
                        :key="project.image"
                        cols="11"
                        md="5"
                        offset="1"
                    >
                        <v-lazy
                            v-model="isActive"
                            :options="{
                                threshold: 1
                            }"
                            transition="fade-transition"
                        >
                            <v-card class="mb-15">
                                <v-img
                                    height="400px"
                                    :src="require(`@/assets/images/projects/${project.image}.png`)"
                                    position="top center"
                                >
                                </v-img>

                                <v-card-title class="text-uppercase font-weight-bold text-h4">
                                    {{ project.title }}
                                </v-card-title>

                                <v-card-text class="text--primary">
                                    {{ truncate(project.description) }}
                                </v-card-text>

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
                                </v-card-actions>
                            </v-card>
                        </v-lazy>
                    </v-col>
                </template>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data: () => ({
        show: false,
        isActive: false
    }),
    methods: {
        truncate(str) {
            if (str.length > 80) {
                return str.slice(0, 79) + '...';
            }
            return str;
        }
    }
};
</script>
