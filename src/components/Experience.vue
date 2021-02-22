<template>
    <section
        class="experience-section"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[2].title.toLowerCase()}`
        "
    >
        <v-container>
            <v-row>
                <v-col>
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.experience.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="col-10 offset-1">
                    <v-timeline reverse>
                        <v-timeline-item
                            v-for="(job, i) in $page.texts.edges[0].node
                                .experience.jobs"
                            :key="i"
                            color="secondary"
                            small
                        >
                            <template v-slot:opposite>
                                <span
                                    class="
                                        `headline font-weight-bold secondary--text`
                                    "
                                    v-text="job.year"
                                ></span>
                            </template>
                            <v-card>
                                <v-card-title class="secondary lighten-2">
                                    <h2
                                        class="display-1 font-weight-light"
                                    >
                                        {{ job.title }}
                                    </h2>
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <h6 class="text-h6">
                                                {{ job.company }}
                                            </h6>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data: () => ({
        show: false
    })
}
</script>
