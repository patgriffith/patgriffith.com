<template>
  <div>
    <ProjectNav :project="project" :post="post" />
    <div class="container max-w-2xl mx-auto mt-10">      
      <Words :content="post.content" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import ProjectNav from '~/components/ProjectNav.vue'
import Words from '~/components/Words.vue'
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
    ProjectNav,
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