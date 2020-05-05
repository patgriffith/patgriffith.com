<template>
  <div class="container">    
    <h2>From the Blog</h2>
    <ul>
      <li v-for="post in blogPosts" :key="post.slug">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
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
