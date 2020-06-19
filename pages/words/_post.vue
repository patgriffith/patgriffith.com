<template>
  <div>
    <Title :h1="post.title" :h2="post.description" />   
    <vue-markdown class="article container max-w-2xl mx-auto mt-20">{{ post.content }}</vue-markdown>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
export default {
  computed: {
    post() {
      let that = this
      return this.$store.state.words.find(function(p) {
        return (p.slug == that.$route.params.post);
      });
    }
  },
  components: {
    Title,
  },
  head() {
    return {
      title: this.post.title,
      meta: [{ hid: 'description', name: 'description', content: this.post.description }]
    };
  },
};
</script>