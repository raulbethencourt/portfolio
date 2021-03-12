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
            <v-row class="d-flex justify-center align-center tetris-container">
                <v-col cols="3">
                    <div
                        id="grid"
                        :class="
                            $vuetify.theme.dark
                                ? `d-flex flex-wrap tetris__grid grid-dark-bg`
                                : `d-flex flex-wrap tetris__grid grid-light-bg`
                        "
                    >
                        <div v-for="i in 200" :key="i" class="square"></div>

                        <div v-for="j in taken" :key="j" class="square taken d-none"></div>
                    </div>
                </v-col>

                <v-col cols="3" offset="1">
                    <v-card class="d-flex flex-column align-center" elevation="14">
                        <div
                            id="mini-grid"
                            :class="
                                $vuetify.theme.dark
                                    ? `d-flex flex-wrap mini-tetris__grid grid-dark-bg mt-10`
                                    : `d-flex flex-wrap mini-tetris__grid grid-light-bg mt-10`
                            "
                        >
                            <div v-for="i in 16" v-bind:key="i" class="square"></div>
                        </div>

                        <div class="d-flex flex-column mt-5 mb-5 score">
                            <v-chip color="info">
                                <h3>
                                    {{ $page.texts.edges[0].node.tetris.data[0] }}
                                    <span id="score">{{ $page.texts.edges[0].node.tetris.data[2] }}</span>
                                </h3>
                            </v-chip>

                            <v-chip color="info">
                                <h3>
                                    {{ $page.texts.edges[0].node.tetris.data[1] }}
                                    <span id="lines">{{ $page.texts.edges[0].node.tetris.data[2] }}</span>
                                </h3>
                            </v-chip>
                        </div>

                        <v-btn id="startBtn" @click="sound(start), (start = !start)" class="mb-10" rounded>{{
                            $page.texts.edges[0].node.tetris.btn
                        }}</v-btn>

                        <audio
                            id="audio"
                            :src="require(`@/assets/audios/tetris.mp3`)"
                            type="audio/mpeg"
                            loop
                        ></audio>
                    </v-card>
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
        tetris();
    },
    methods: {
        sound: function(start) {
            if (start) {
                document.getElementById('audio').play();
            } else {
                document.getElementById('audio').pause();
            }
        }
    }
};
</script>
