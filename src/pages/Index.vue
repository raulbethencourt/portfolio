<template>
    <Layout>
        <About />
        <Projects />
        <Education />
        <Contact />
    </Layout>
</template>

<script>
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Education from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'

export default {
    metaInfo: {
        title: 'Raul Bethencourt (G)'
    },
    components: {
        About,
        Contact,
        Education,
        Projects
    }
}
</script>
