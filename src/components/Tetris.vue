<template>
    <section
        class="tetris-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[6].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.testimonials.title }}
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="10" offset="1">
                    <h3>Score:<span id="score">0</span></h3>
                    <v-btn id="startBtn" outlined margincolor="success" dark
                        >Start/Pause</v-btn
                    >
                </v-col>
            </v-row>
        </v-container>

        <v-container id="grid">
            <v-row v-for="i in 20" :key="i">
                <v-col cols="8" offset="4" class="d-flex flex-wrap tetris-col">
                    <div v-for="x in 10" :key="x" class="square"></div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import '~/assets/js/tetris.js'

export default {}
</script>
