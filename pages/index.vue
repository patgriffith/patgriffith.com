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

    <HomeSection :data="profit"/>    
    
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
  data () {
    return {
     profit: {
        title: 'Turn visitors into profit.',
        intro: 'It’s difficult to say the word “funnel” without vomitting a little in your mouth. I understand. And yet, it’s pretty nuts what happens when we’re able to optimize all of these steps.\n\nDouchey marketing jargon or not, 10x is a real thing.',
        outro: '',
        expands: [
          {
            title: 'Warm up visitors.',
            content: 'la la info here.',
            visible: false
          },
        ]
     }
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    sections() {
      return this.$store.state.sections;
    },
  },
  components: {
    HomeSection
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
