<template>
    <section :id="`${$page.texts.edges[0].node.sidebar.items[7].title.toLowerCase()}`">
        <v-container>
            <v-row>
                <v-col cols="10" offset="1">
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.contact.title }}
                    </h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10" offset="1">
                    <v-form class="contact-form" @submit.prevent="sendEmail">
                        <v-input>
                            <v-text-field
                                outlined
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="20"
                                label="Name"
                                required
                                type="text"
                                name="from_name"
                            ></v-text-field
                        ></v-input>

                        <v-input>
                            <v-text-field
                                outlined
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                type="email"
                                name="reply_to"
                            ></v-text-field
                        ></v-input>

                        <v-textarea name="message" outlined label="Your message"></v-textarea>

                        <v-btn type="submit" value="Send">Submit</v-btn>

                        <div id="root">
                            <vue-recaptcha
                                ref="recaptcha"
                                @verify="onVerify"
                                @expired="onExpired"
                                :sitekey="sitekey"
                            >
                            </vue-recaptcha>
                            <button @click="resetRecaptcha">Reset ReCAPTCHA</button>
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';
import VueRecaptcha from 'vue-recaptcha';

export default {
    methods: {
        sendEmail: e => {
            emailjs
                .sendForm(
                    'service_2rabu7t',
                    'template_8121t2p',
                    e.target,
                    'user_PQrWgGpKRxHy54mH99sbR'
                )
                .then(
                    result => {
                        console.log('SUCCESS!', result.status, result.text);
                    },
                    error => {
                        console.log('FAILED...', error);
                    }
                );
        },
        onSubmit: function() {
            this.$refs.invisibleRecaptcha.execute();
        },
        onVerify: function(response) {
            console.log('Verify: ' + response);
        },
        onExpired: function() {
            console.log('Expired');
        },
        resetRecaptcha() {
            this.$refs.recaptcha.reset(); // Direct call reset method
        }
    },
    data() {
        return {
            sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        };
    },
    components: { VueRecaptcha }
};
</script>
