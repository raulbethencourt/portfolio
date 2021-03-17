<template>
    <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
        <v-app-bar
            fixed
            flat
            class="d-md-none"
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            width="190px"
            class="nav-bar"
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            fixed
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img
                        :src="
                            $vuetify.theme.dark
                                ? require(`@/assets/images/icon-sidebar-dark.png`)
                                : require(`@/assets/images/icon-sidebar-light.png`)
                        "
                        :class="$vuetify.theme.dark ? 'dark-profile' : 'light-profile'"
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content class="nav-bar__title">
                    <v-list-item-title class="text-h6">{{
                        $page.texts.edges[0].node.sidebar.title.toUpperCase()
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-1"
                        >{{ $page.texts.edges[0].node.sidebar.subtitle }}
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="item in $page.texts.edges[0].node.sidebar.items"
                    :key="item.title"
                    link
                    :to="`#${item.title.toLowerCase()}`"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <v-list dense>
                    <v-list-item class="list-link">
                        <v-list-item-icon>
                            <v-icon>{{ $page.texts.edges[0].node.sidebar.append[0].icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <a
                                :href="pdfLink"
                                download="download"
                                :class="$vuetify.theme.dark ? 'light' : 'dark'"
                            >
                                <v-list-item-title>{{
                                    $page.texts.edges[0].node.sidebar.append[0].title
                                }}</v-list-item-title>
                            </a>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="list-link">
                        <v-list-item-icon>
                            <v-icon>{{ $page.texts.edges[0].node.sidebar.append[3].icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <a
                                href="https://github.com/raulbethencourt/portfolio"
                                target="_blank"
                                download="download"
                                rel="noreferrer noopener"
                                :class="$vuetify.theme.dark ? 'light' : 'dark'"
                            >
                                <v-list-item-title>{{
                                    $page.texts.edges[0].node.sidebar.append[3].title
                                }}</v-list-item-title>
                            </a>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="list-locale d-none">
                        <v-list-item-icon>
                            <v-icon>{{ $page.texts.edges[0].node.sidebar.append[1].icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <LocaleSwitcher />
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="list-color">
                        <v-list-item-icon>
                            <v-icon>{{ $page.texts.edges[0].node.sidebar.append[2].icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-switch
                                v-model="$vuetify.theme.dark"
                                inset
                                persistent-hint
                            ></v-switch>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>
        <v-main>
            <slot />
            <v-footer
                v-bind="localAttrs"
                :padless="padless"
            >
                <v-card
                    height="230px"
                    dark
                    flat
                    tile
                    width="100%"
                    class="text-center d-flex flex-column justify-center"
                >
                    <v-card-text class="d-flex justify-center">
                        <div v-for="(icon, i) in $page.texts.edges[0].node.footer.icons" :key="i">
                            <v-btn
                                class="mx-4"
                                icon
                                :href="icon.url"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <v-icon size="30px">
                                    {{ icon.name }}
                                </v-icon>
                            </v-btn>
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} —
                        <strong>{{ $page.texts.edges[0].node.footer.author }}</strong> / {{ $page.texts.edges[0].node.footer.version }}
                    </v-card-text>
                </v-card>
            </v-footer>
        </v-main>
    </v-app>
</template>

<script>
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

export default {
    data() {
        return {
            right: null,
            pdfLink: require('@/assets/CV_Raul_Bethencourt.pdf'),
            drawer: false,
            group: null,
            mini: true,
            padless: true,
            variant: 'default'
        };
    },
    components: {
        LocaleSwitcher
    },
    props: {
        attrs: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        theme() {
            return this.$vuetify.theme.dark ? 'dark' : 'light';
        },
        localAttrs() {
            const attrs = {};

            if (this.variant === 'default') {
                attrs.absolute = false;
                attrs.fixed = false;
            } else {
                attrs[this.variant] = true;
            }
            return attrs;
        }
    }
};
</script>
