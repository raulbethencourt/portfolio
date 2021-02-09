<template>
    <section class="projects-section" id="projects">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Projects</h1>
                </v-col>
            </v-row>
            <v-row class="justify-space-around mb-8 mt-10">
                <template>
                    <v-lazy
                        v-for="project in projects"
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
                                    require(`@/assets/images/${project.image}.png`)
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
        
    }),
    data() {
        return {
            projects: [
                {
                    title: 'Plataforme',
                    url: 'https://github.com/raulbethencourt/plataform',
                    description:
                        'A pedagogique platafomr, handcraft made for Contact et propotion.',
                    image: 'plateforme'
                },
                {
                    title: 'Dynamo-Location',
                    url: 'https://www.dynamo-location.fr',
                    description:
                        'In this project I actuallised the front side.',
                    image: 'dynamo'
                },
                {
                    title: 'Agence inmobilier',
                    url: 'https://github.com/raulbethencourt/inmogence',
                    description:
                        'Grafikart tutorial to learn how to use Symfony. Its realstates agency project.',
                    image: 'inmoagence'
                },
                {
                    title: 'todo-list',
                    url: 'https://raulbethencourt.github.io/todo_list/',
                    description:
                        'This is a vanilla Javascript project, to creates a ToDo App.',
                    image: 'todo'
                },
                {
                    title: 'morpion',
                    url: 'https://raulbethencourt.github.io/morpion/',
                    description:
                        'This is a JQuery project to do a Morpion Game',
                    image: 'morpion'
                },
                {
                    title: 'cauldron-overflow',
                    url: 'https://github.com/raulbethencourt/cauldron_overflow',
                    description: 'Here I have another Symfony project',
                    image: 'cauldron'
                }
            ],
            isActive: false
        }
    },
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
