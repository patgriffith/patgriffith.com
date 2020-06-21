<template>
  <div>
    <Title :h1="post.title" :h2="post.description" />   
    <div class="max-w-4xl mx-auto mt-20">
      <div v-if="post.image">
          <img :src="post.image" class="mx-auto border-8 border-purple-100" :alt="post.title"/>
      </div>
      <hr v-else class=""/>
    </div>
    <div class="container max-w-2xl mx-auto mt-20">
      <Words :content="post.content" />    
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Words from '~/components/Words.vue'
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
    Words
  },
  head() {
    return {
      title: this.post.title,
      meta: [{ hid: 'description', name: 'description', content: this.post.description }]
    };
  },
};
</script>