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
                    <h3>Score: <span id="score">0</span></h3>
                    <h2>Lines: <span id="lines">0</span></h2>
                    <v-btn id="startBtn" outlined margincolor="success" dark>Start/Pause</v-btn>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-col cols="5" offset="1" id="grid" class="d-flex flex-wrap tetris__grid">
                    <div v-for="i in 200" :key="i" class="square"></div>

                    <div v-for="j in taken" :key="j" class="square taken d-none"></div>
                </v-col>

                <v-col cols="5" offset="1">
                    <v-container id="mini-grid">
                        <v-row>
                            <v-col cols="12" class="d-flex flex-wrap mini-tetris__grid">
                                <div v-for="i in 16" v-bind:key="i" class="square"></div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return { taken: ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k'] };
    }
};
</script>
