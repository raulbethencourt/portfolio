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
                    v-for="(testimony, i) in $page.texts.edges[0].node
                        .testimonials.items"
                    :key="i"
                    cols="12"
                    md="4"
                    offset-md="1"
                    class="d-flex flex-column align-items-center text-center"
                >
                    <p
                        v-for="(text, i) in testimony.texts"
                        :key="i"
                        class="mb-3"
                    >
                        &laquo; {{ text }} &raquo;
                    </p>
                    <p class="mb-5">
                        {{ testimony.author }},
                        <span>{{ testimony.company }}</span>
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

