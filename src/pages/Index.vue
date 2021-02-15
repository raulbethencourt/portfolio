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
                }
                about {
                    title
                    description
                }
                projects {
                    title
                    works {
                        title
                        url
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
                        description
                        year
                        color
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