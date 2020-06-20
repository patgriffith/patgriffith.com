<template>
  <div>    
    <ProjectNav :project="project" />
    <div class="container max-w-2xl mx-auto mt-10">
      <vue-markdown class="article">{{ project.content }}</vue-markdown>
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
    }
  },
  components: {
    ProjectNav
  },
  head() {
    return {
      title: this.project.title,
      meta: [{ hid: 'description', name: 'description', content: this.project.description }]
    };
  },
};
</script>