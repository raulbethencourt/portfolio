<template>
    <section
        class="contact-section"
        :id="`${$page.texts.edges[0].node.sidebar.items[7].title.toLowerCase()}`"
    >
        <v-container>
            <v-row>
                <v-col cols="6" offset="3">
                    <h2 class="text-h2 font-weight-bold mb-5">
                        {{ $page.texts.edges[0].node.contact.title }}
                    </h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" offset="3">
                    <v-form class="contact-form" @submit.prevent="sendEmail">
                        <v-input>
                            <v-text-field
                                v-model="firstname"
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

                        <v-btn type="submit" value="Send">{{
                            $page.texts.edges[0].node.contact.items[3]
                        }}</v-btn>

                        <div id="root">
                            <vue-recaptcha
                                ref="recaptcha"
                                @verify="onVerify"
                                @expired="onExpired"
                                :sitekey="sitekey"
                            >
                            </vue-recaptcha>
                            <button @click="resetRecaptcha" class="d-none">Reset ReCAPTCHA</button>
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
