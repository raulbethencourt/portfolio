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

        <v-container class="mt-2 mt-md-10">
            <v-row>
                <v-col cols="12" md="10" offset-md="1">
                    <div
                        class="d-flex flex-column flex-md-row align-center justify-md-space-around align-center"
                    >
                        <div
                            id="grid"
                            :class="$vuetify.theme.dark ? `grid-dark-bg` : `grid-light-bg`"
                            class="d-flex flex-wrap tetris__grid"
                        >
                            <div v-for="i in 200" :key="i" class="square"></div>

                            <div
                                v-for="j in taken"
                                :key="j"
                                class="square takenBottom d-none"
                            ></div>
                        </div>

                        <v-sheet
                            id="scoreblock"
                            :class="$vuetify.theme.dark ? `sheet-dark-bg` : `sheet-light-bg`"
                            class="d-flex flex-row flex-md-column align-center"
                            elevation="14"
                        >
                            <div
                                id="mini-grid"
                                :class="$vuetify.theme.dark ? `grid-dark-bg` : `grid-light-bg`"
                                class="d-flex flex-wrap mini-tetris__grid mt-md-10"
                            >
                                <div v-for="i in 16" v-bind:key="i" class="square"></div>
                            </div>

                            <div class="d-flex flex-column justify-space-around mt-5 mb-5 score">
                                <v-chip color="info">
                                    {{ $page.texts.edges[0].node.tetris.data[0] }}
                                    <span id="score">{{ 0 }}</span>
                                </v-chip>

                                <v-chip color="success">
                                    {{ $page.texts.edges[0].node.tetris.data[1] }}
                                    <span id="lines">{{ 0 }}</span>
                                </v-chip>
                            </div>

                            <v-btn
                                id="startBtn"
                                @click="start = !start"
                                class="mb-md-10"
                                rounded
                                elevation="0"
                                color="accent"
                                >{{ $page.texts.edges[0].node.tetris.btn[0] }}</v-btn
                            >

                            <audio
                                id="audio"
                                :src="require(`@/assets/audios/tetris.mp3`)"
                                type="audio/mpeg"
                                loop
                            ></audio>
                        </v-sheet>

                        <div id="gameover" class="d-none flex-column align-center gameover ml-5">
                            <h3 class="gameover-text">GAME OVER</h3>

                            <div class="d-flex flex-column mt-5 mb-5 score">
                                <v-chip color="info" class="d-flex justify-center mt-7 chip">
                                    <h2>
                                        {{ $page.texts.edges[0].node.tetris.data[2] }}
                                        <span id="gScore">{{ 0 }}</span>
                                    </h2>
                                </v-chip>

                                <v-chip color="success" class="mt-3 mb-5 chip">
                                    <h2>
                                        {{ $page.texts.edges[0].node.tetris.data[3] }}
                                        <span id="gLines">{{ 0 }}</span>
                                    </h2>
                                </v-chip>
                            </div>

                            <v-btn
                                id="restartBtn"
                                class="mb-10 gameover-btn"
                                rounded
                                elevation="0"
                                color="accent"
                                >{{ $page.texts.edges[0].node.tetris.btn[1] }}</v-btn
                            >
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { tetris } from '~/js/tetris/tetris.js';

export default {
    data() {
        return { taken: ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k'], start: true };
    },
    mounted() {
        tetris(this.$vuetify.breakpoint.mdAndUp);
    }
};
</script>
