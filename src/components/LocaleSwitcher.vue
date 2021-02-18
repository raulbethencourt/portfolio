<template>
    <v-select
        v-model="currentLocale"
        @change="localeChanged"
        class="localeswitcher"
        :items="availableLocales"
        outlined
    >
    </v-select>
</template>

<script>
export default {
    name: 'LocaleSwitcher',
    data: function() {
        return {
            currentLocale: this.$i18n.locale.toString(),
            availableLocales: this.$i18n.availableLocales
        }
    },
    methods: {
        localeChanged() {
            this.$router.push({
                path: this.$tp(this.$route.path, this.currentLocale, true)
            })
        }
    }
}
</script>
