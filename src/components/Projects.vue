<template>
    <section class="projects-section" id="projects">
        <v-container>
            <v-row>
                <v-col>
                    <h1>{{ $static.texts.edges[0].node.projects.title }}</h1>
                </v-col>
            </v-row>
            <v-row class="justify-space-around mb-8 mt-10">
                <template>
                    <v-lazy
                        v-for="project in $static.texts.edges[0].node.projects.works"
                        :key="project.image"
                        v-model="isActive"
                        :options="{
                            threshold: 1
                        }"
                        min-height="200"
                        transition="fade-transition"
                        class="mb-15"
                        max-width="40%"
                    >
                        <v-card>
                            <v-img
                                height="300px"
                                :src="
                                    require(`@/assets/images/${
                                        project.image
                                    }.png`)
                                "
                                position="top center"
                            >
                            </v-img>

                            <v-card-title
                                class="text-uppercase font-weight-bold text-h4"
                            >
                                {{ project.title }}
                            </v-card-title>

                            <v-card-text class="text--primary">
                                {{ truncate(project.description) }}
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    color="orange lighten-2"
                                    text
                                    :href="project.url"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Explore
                                </v-btn>

                                <v-btn text>
                                    <v-icon large>mdi-github</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-lazy>
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
                return str.slice(0, 79) + '...'
            }
            return str
        }
    }
}
</script>

<static-query>
query($locale: String) {
    texts: allDocuments {
        edges {
            node {
                projects {
                    title
                    works {
                        title
                        url
                        description
                        image
                    }
                }
            }
        }
    }
}
</static-query>
