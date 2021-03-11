<template>
    <section
        :class="
            $vuetify.theme.dark ? `tetris-section tetris-dark-bg` : `tetris-section tetris-light-bg`
        "
        :id="`${$page.texts.edges[0].node.sidebar.items[6].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center">
                    <h2 class="tetris-title">
                        {{ $page.texts.edges[0].node.tetris.title }}
                    </h2>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="mt-10 d-flex justify-center">
            <v-row class="d-flex justify-center tetris-container">
                <v-col cols="3">
                    <div id="grid" class="d-flex flex-wrap tetris__grid">
                        <div v-for="i in 200" :key="i" class="square"></div>
                        
                        <div v-for="j in taken" :key="j" class="square taken d-none"></div>
                    </div>
                </v-col>

                <v-col cols="3" class="d-flex flex-column align-end justify-space-between">
                    <v-row>
                        <v-col cols="12">
                            <div id="mini-grid" class="d-flex flex-wrap mini-tetris__grid">
                                <div v-for="i in 16" v-bind:key="i" class="square"></div>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3>
                                {{ $page.texts.edges[0].node.tetris.data[0] }}
                                <span id="score">{{
                                    $page.texts.edges[0].node.tetris.data[2]
                                }}</span>
                            </h3>
                            <h2>
                                {{ $page.texts.edges[0].node.tetris.data[1] }}
                                <span id="lines">{{
                                    $page.texts.edges[0].node.tetris.data[2]
                                }}</span>
                            </h2>
                            <v-btn id="startBtn" outlined margincolor="success" dark>{{
                                $page.texts.edges[0].node.tetris.btn
                            }}</v-btn>
                            <embed src="" type="" class="d-none">
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { tetris } from '~/js/tetris/tetris.js';

export default {
    data() {
        return { taken: ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k'] };
    },
    mounted() {
        tetris();
    }
};
</script>
