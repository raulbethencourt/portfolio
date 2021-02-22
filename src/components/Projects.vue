<template>
    <section
        class="projects-section"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[1].title.toLowerCase()}`
        "
    >
        <v-container>
            <v-row>
                <v-col>
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.projects.title }}
                    </h2>
                </v-col>
            </v-row>
            <v-row class="justify-space-around mb-8 mt-10">
                <template>
                    <v-lazy
                        v-for="project in $page.texts.edges[0].node.projects
                            .works"
                        :key="project.image"
                        v-model="isActive"
                        :options="{
                            threshold: 1
                        }"
                        transition="fade-transition"
                        class="col-12 col-md-5"
                    >
                        <v-card class="mb-15">
                            <v-img
                                height="400px"
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
