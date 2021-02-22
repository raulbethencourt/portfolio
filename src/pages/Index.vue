<template>
    <Layout>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Tetris />
        <Contact />
    </Layout>
</template>

<script>
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Education from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import Tetris from '@/components/Tetris.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
    metaInfo: {
        title: 'Raul Bethencourt (G)'
    },
    components: {
        About,
        Contact,
        Education,
        Projects,
        Experience,
        Skills,
        Tetris,
        Testimonials
    }
}
</script>

<page-query>
query sidebar($locale: String) {
    texts: allDocuments(filter: { lang: { eq: $locale } }) {
        edges {
            node {
                sidebar {
                    title
                    subtitle
                    items {
                        title
                        icon
                    }
                    append {
                        title
                        icon
                    }
                }
                about {
                    path
                    title
                    description
                }
                projects {
                    title
                    works {
                        title
                        url
                        git
                        description
                        image
                    }
                }
                experience {
                    title
                    jobs {
                        title
                        company
                        city
                        description
                        year
                    }
                }
                education {
                    title
                    diplomes {
                        title
                        school
                        city
                        description
                        year
                        color
                    }
                }
            }
        }
    }
}
</page-query>
