<template>
    <section
        class="testimonials-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[5].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="section-title">
                        {{ $page.texts.edges[0].node.testimonials.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="12"
                    md="10"
                    offset-md="1"
                    class="d-flex flex-wrap justify-space-between text-center mt-lg-10"
                >
                    <v-sheet
                        v-for="(testimony, i) in $page.texts.edges[0].node.testimonials.items"
                        :key="i"
                        elevation="24"
                        rounded="xl"
                        :class="$vuetify.theme.dark ? `sheet-dark-bg` : `sheet-light-bg`"
                    >
                        <p
                            v-for="(text, i) in testimony.texts"
                            :key="i"
                            class="testimonial-text mb-3"
                        >
                            {{ text }}
                        </p>

                        <p class="testimonial-author mb-5">
                            {{ testimony.author }},
                            <span>{{ testimony.company }}</span>
                        </p>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
