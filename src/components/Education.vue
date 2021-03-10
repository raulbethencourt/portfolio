<template>
    <section
        class="education-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[3].title.toLowerCase()}`"
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
                    <v-row align="center">
                        <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
                            <v-item
                                v-for="(n, i) in $page.texts.edges[0].node.education.diplomes"
                                :key="i"
                                v-slot="{ active, toggle }"
                            >
                                <div>
                                    <v-btn :input-value="active" icon @click="toggle">
                                        <v-icon>mdi-record</v-icon>
                                    </v-btn>
                                </div>
                            </v-item>
                        </v-item-group>

                        <v-col>
                            <v-window v-model="window" class="elevation-1" vertical>
                                <v-window-item
                                    v-for="(diplome, i) in $page.texts.edges[0].node.education
                                        .diplomes"
                                    :key="i"
                                >
                                    <v-card flat>
                                        <v-card-title>
                                            <strong class="title">{{ diplome.title }}</strong>
                                        </v-card-title>
                                        <v-card-subtitle>
                                            {{ diplome.school }} | {{ diplome.city }} |
                                            {{ diplome.year }}
                                        </v-card-subtitle>
                                        <v-card-text>
                                            <p
                                                v-for="(description, i) in diplome.description"
                                                :key="i"
                                            >
                                                {{ description }}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            model: 0,
            window: 0
        };
    }
};
</script>
