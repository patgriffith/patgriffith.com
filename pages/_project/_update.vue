<template>
  <div>
    <ProjectNav :project="project" :title="post.title" :subtitle="post.description" />
    <div class="container max-w-2xl mx-auto mt-10">      
      <vue-markdown class="article">{{ post.content }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import ProjectNav from '~/components/ProjectNav.vue'
export default {
  computed: {
    project() {
      let that = this
      return this.$store.state.projects.find(function(p) {
        return (p.slug == that.$route.params.project);
      });
    },
    post() {
      let that = this
      return this.$store.state.words.find(function(p) {
        return (p.slug == that.$route.params.update);
      });
    }
  },
  components: {
    Title,
    ProjectNav
  },
  head() {
    return {
      title: this.post.title,
      meta: [{ hid: 'description', name: 'description', content: this.post.description }]
    };
  },
};
</script>