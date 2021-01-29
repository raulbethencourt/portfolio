<template>
    <Layout>

        <section>

            <g-image alt="Example image" src="~/assets/images/profile.png" width="400" />
            <div
              :class="`text-${classes[0][0]}`"
              class="transition-swing"
              v-text="text"
            >
            </div>

        </section>

    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Raul Bethencourt (G)'
    },
    data: () => ({
      model: null,
      classes: [
        ['h1', "Hi, I'm Raul"],
        ],
    }),
}
</script>

