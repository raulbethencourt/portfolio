<template>
    <section
        class="education-section"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[3].title.toLowerCase()}`
            "
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.education.title }}
                    </h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10" offset="1">
                    <v-carousel v-model="model" hide-delimiter-background dark>
                        <v-carousel-item
                            v-for="(diplome, i) in $page.texts.edges[0].node
                                .education.diplomes"
                            :key="i"
                        >
                            <v-card height="100%">
                                <v-card-title>
                                    {{ diplome.title }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ diplome.school }} | {{ diplome.city }} | {{diplome.year}}
                                </v-card-subtitle>

                                <v-card-text
                                    v-for="(description,
                                    i) in diplome.description"
                                    :key="i"
                                >
                                    {{ description }}
                                </v-card-text>
                            </v-card>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            e1: 1,
            model: 0
        }
    }
}
</script>
