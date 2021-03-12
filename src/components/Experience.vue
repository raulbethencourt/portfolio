<template>
    <section
        :class="
            $vuetify.theme.dark
                ? `experience-section experience-dark-bg`
                : `experience-section experience-light-bg`
        "
        :id="`${$page.texts.edges[0].node.sidebar.items[2].title.toLowerCase()}`"
    >
        <v-container class="mb-0">
            <v-row>
                <v-col
                    cols="10"
                    offset="1"
                    class="d-flex justify-center"
                >
                    <div class="ballon">
                        <h2 class="section-title">
                            {{ $page.texts.edges[0].node.experience.title }}
                        </h2>
                    </div>
                </v-col>
            </v-row>

            <v-row class="mt-0">
                <v-col class="col-10 offset-1 pt-0 pb-0">
                    <v-timeline
                        reverse
                        class="timeline"
                    >
                        <v-timeline-item
                            v-for="(job, i) in $page.texts.edges[0].node.experience.jobs"
                            :key="i"
                            color="secondary"
                            small
                        >
                            <template v-slot:opposite>
                                <span
                                    class="
                                        `headline text-h5 font-weight-bold secondary--text`
                                    "
                                    v-text="job.year"
                                ></span>
                            </template>
                            <v-card>
                                <v-card-title class="secondary">
                                    <h4 class="display-1 font-weight-bold text-h4">
                                        {{ job.title }}
                                    </h4>
                                </v-card-title>
                                <v-container class="pl-0 pr-0">
                                    <v-row class="ml-2 mr-2">
                                        <v-col cols="12">
                                            <h5 class="text-h5">
                                                {{ job.company }}
                                            </h5>
                                            <h6 class="text-h6 subtitle mb-1">
                                                {{ job.city }}
                                            </h6>
                                        </v-col>
                                    </v-row>
                                    <v-divider class="divider"></v-divider>
                                    <v-row class="ml-2 mr-2 mt-1">
                                        <v-col>
                                            <p
                                                v-for="(text, i) in job.description"
                                                :key="i"
                                            >
                                                {{ text }}
                                            </p>
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
};
</script>
