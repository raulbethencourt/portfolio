<template>
    <section class="education-section" id="education">
        <v-container>
            <v-row>
                <h2 class="text-h2"></h2>
            </v-row>

            <v-row>
                <v-timeline reverse>
                    <v-timeline-item
                        v-for="(diplome, i) in $static.texts.edges[0].node.education.diplomes"
                        :key="i"
                        :color="diplome.color"
                        small
                    >
                        <template v-slot:opposite>
                            <span
                                :class="
                                    `headline font-weight-bold ${
                                        diplome.color
                                    }--text`
                                "
                                v-text="diplome.year"
                            ></span>
                        </template>
                        <v-card>
                            <v-card-title class="purple lighten-2">
                                <h2
                                    class="display-1 white--text font-weight-light"
                                >
                                    {{ diplome.title }}
                                </h2>
                            </v-card-title>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="10">
                                        Lorem ipsum dolor sit amet, no nam
                                        oblique veritus. Commune scaevola
                                        imperdiet nec ut, sed euismod convenire
                                        principes at. Est et nobis iisque
                                        percipit.
                                    </v-col>
                                    <v-col
                                        class="hidden-sm-and-down text-right"
                                        md="2"
                                    >
                                        <v-icon size="64">
                                            mdi-calendar-text
                                        </v-icon>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
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

<static-query>
query($locale: String) {
    texts: allDocuments(lang: $locale) {
        edges {
            node {
                education {
                    title
                    diplomes {
                        title
                        school
                        city
                        description
                        year
                        color
                    }
                }
            }
        }
    }
}
</static-query>
