<template>
    <section
        class="contact-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[7].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col>
                    <h2 class="section-title">
                        {{ $page.texts.edges[0].node.contact.title }}
                    </h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10" offset="1" md="8" offset-md="2" class="mb-15">
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="contact-form"
                        @submit.prevent="sendEmail"
                    >
                        <v-input>
                            <v-text-field
                                v-model="firstName"
                                type="text"
                                name="from_name"
                                :label="$page.texts.edges[0].node.contact.items[0]"
                                :rules="nameRules"
                                :counter="20"
                                outlined
                                filled
                                clearable
                                required
                            ></v-text-field
                        ></v-input>

                        <v-input>
                            <v-text-field
                                v-model="email"
                                type="email"
                                name="reply_to"
                                :rules="emailRules"
                                :label="$page.texts.edges[0].node.contact.items[1]"
                                outlined
                                filled
                                clearable
                                required
                            ></v-text-field
                        ></v-input>

                        <v-textarea
                            name="message"
                            :label="$page.texts.edges[0].node.contact.items[2]"
                            filled
                            clearable
                            outlined
                            required
                        ></v-textarea>

                        <div id="root">
                            <vue-recaptcha
                                ref="recaptcha"
                                @verify="onVerify"
                                @expired="onExpired"
                                :sitekey="sitekey"
                                style="transform:scale(0.8);transform-origin:0 0;"
                                theme="dark"
                            >
                            </vue-recaptcha>
                            <v-btn
                                id="resetCaptcha"
                                @click="resetRecaptcha"
                                class="d-none mb-4"
                                rounded
                                color="error"
                            >
                                Reset
                            </v-btn>
                        </div>

                        <v-alert dense text type="success" id="emailSuccess" class="d-none"
                            >Email Success</v-alert
                        >
                        <v-alert dense text type="error" id="emailError" class="d-none"
                            >Email Error</v-alert
                        >
                        <v-alert dense text type="error" id="clickCaptcha" class="d-none"
                            >click captacha</v-alert
                        >

                        <v-btn
                            type="submit"
                            value="Send"
                            class="mb-10"
                            rounded
                            large
                            :disabled="!valid"
                            @click="validate"
                            >{{ $page.texts.edges[0].node.contact.items[3] }}</v-btn
                        >
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <div class="map-content">
            <ClientOnly>
                <MglMap :mapboxGl="mapbox" :accessToken="accessToken" :mapStyle.sync="mapStyle" />
            </ClientOnly>
        </div>
    </section>
</template>

<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css');
</style>

<script>
import emailjs from 'emailjs-com';
import VueRecaptcha from 'vue-recaptcha';
import Mapbox from 'mapbox-gl';

export default {
    data() {
        return {
            sitekey: '6LcaaoAaAAAAAKq9q9K0vNBRxC-c31UlNkSIZ5GV',
            valid: true,
            firstName: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            accessToken:
                'pk.eyJ1IjoicmF1bGJldGhlbmNvdXJ0IiwiYSI6ImNrbWFkOTA5cDFxaGEyeGtuczVlZ2JqNDUifQ.dCD0kSV0jWA7P-cZ_Z6KQg',
            mapStyle: 'mapbox://styles/raulbethencourt/ckmapv3jl3nxd17qinxjcll9a'
        };
    },
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        sendEmail: evt => {
            const error = document.getElementById('emailError');
            const success = document.getElementById('emailSuccess');
            if (evt.target[9].classList.contains('verified')) {
                emailjs
                    .sendForm(
                        'service_2rabu7t',
                        'template_8121t2p',
                        evt.target,
                        'user_PQrWgGpKRxHy54mH99sbR'
                    )
                    .then(
                        result => {
                            console.log('SUCCESS!', result.status, result.text);
                            success.classList.remove('d-none');
                            success.classList.add('d-flex');
                            if (error.classList.contains('d-flex')) {
                                error.classList.remove('d-flex');
                                error.classList.add('d-none');
                            }
                        },
                        error => {
                            console.log('FAILED...', error);
                            error.classList.remove('d-none');
                            error.classList.add('d-flex');
                        }
                    );
            } else {
                const clickCaptcha = document.getElementById('clickCaptcha');
                clickCaptcha.classList.remove('d-none');
                clickCaptcha.classList.add('d-flex');
            }
        },
        onVerify(response) {
            const clickCaptcha = document.getElementById('clickCaptcha');
            if (response) {
                const captchaResponse = document.getElementById('g-recaptcha-response');
                captchaResponse.classList.add('verified');
                if (clickCaptcha.classList.contains('d-flex')) {
                    clickCaptcha.classList.remove('d-flex');
                    clickCaptcha.classList.add('d-none');
                }
            }
        },
        onExpired() {
            const reset = document.getElementById('resetCaptcha');
            reset.classList.remove('d-none');
            reset.classList.add('d-flex');
        },
        resetRecaptcha() {
            const reset = document.getElementById('resetCaptcha');
            this.$refs.recaptcha.reset();
            reset.classList.remove('d-flex');
            reset.classList.add('d-none');
        }
    },
    created() {
        // We need to set mapbox-gl library here in order to use it in template
        this.mapbox = Mapbox;
    },
    components: {
        VueRecaptcha,
        MglMap: () =>
            import('vue-mapbox')
                .then(m => m.MglMap)
                .catch()
    }
};
</script>
