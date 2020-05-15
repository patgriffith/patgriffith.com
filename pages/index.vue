<template>
  <div>    
    
    <header>
      <h1>Hire me to grow<br class="hidden md:block"/> your internet business.</h1>
      <h2>I use nerdery, empathy, and the scientific method to help people-first businesses increase revenues and reduce costs. Because you shouldn’t have to choose between helping people and making money.</h2>
      <ul class="list">
        <li>Hypothesize</li>
        <li>Implemenet</li>
        <li>Test</li>
        <li>Repeat</li>
      </ul>
    </header>


    <HomeSection :data="sections('build-with-intention')"/>
    <HomeSection :data="sections('turn-visitors-into-profit')"/>
    
    <section class="container max-w-xl pt-40 hidden">      
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.slug">
          <nuxt-link :to="'/' + project.slug">{{ project.title }}</nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    HomeSection
  },
  methods: {
    sections(slug) {
      console.log(slug)
      return this.$store.state.sections.find(obj => {
        return obj.slug === slug
      })
    },
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: 'Patrick Lorenzut: Web Consultant',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    };
  },
}
</script>
