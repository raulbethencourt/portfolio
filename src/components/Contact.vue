<template>
    <section
        class="full-screen"
        :id="
            `${$page.texts.edges[0].node.sidebar.items[3].title.toLowerCase()}`
        "
    >
        <form class="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send" />
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
        </form>
    </section>
</template>

<script>
import emailjs from 'emailjs-com'
import VueRecaptcha from 'vue-recaptcha'

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
                        console.log('SUCCESS!', result.status, result.text)
                    },
                    error => {
                        console.log('FAILED...', error)
                    }
                )
        },
        onSubmit: function() {
            this.$refs.invisibleRecaptcha.execute()
        },
        onVerify: function(response) {
            console.log('Verify: ' + response)
        },
        onExpired: function() {
            console.log('Expired')
        },
        resetRecaptcha() {
            this.$refs.recaptcha.reset() // Direct call reset method
        }
    },
    data() {
        return {
            sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
        }
    },
    components: { VueRecaptcha }
}
</script>
