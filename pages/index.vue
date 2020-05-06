<template>
  <div class="container">    
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.slug">
        <nuxt-link :to="'/' + project.slug">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Patrick Lorenzut: Professional Optimist',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>
