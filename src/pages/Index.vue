<template>
    <Layout>
        <section>
            <v-container>
                <v-row no-gutters>
                    <v-col sm="6">
                        <g-image
                            alt="Example image"
                            src="~/assets/images/profile.png"
                            width="400"
                        />
                    </v-col>
                    <v-col sm="6">
                        <div class="d-flex flex-column">
                            <h1 class="text-h1 font-weight-bold">
                                Hi, I'm Raul.
                            </h1>
                            <p class="text-h4">I'm a Web developer...</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </Layout>
</template>

<script>
// TODO import components 1:59
export default {
    metaInfo: {
        title: 'Raul Bethencourt (G)'
    }
}
</script>
