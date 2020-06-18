<template>
  <div>
    <Title :h1="post.title" :h2="post.description" />       
    <vue-markdown class="article container max-w-2xl mx-auto mt-20">{{ post.content }}</vue-markdown>
    
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
export default {
  async asyncData({ params, payload }) {
    if (payload) return { post: payload };
    else
      return {
        post: await require(`~/content/projects/${params.slug}.json`),
      };
  },
  components: {
    Title,
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: this.post.title,
      meta: [{ hid: 'description', name: 'description', content: this.post.description }]
    };
  },
};
</script>