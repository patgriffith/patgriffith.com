<template>
  <div>    
    <ProjectNav :project="project" />
    <div class="container max-w-2xl mx-auto mt-10">
      <Words :content="project.content" />
      
      <div v-for="link in project.links" :key="link.title" >
        <a class="bg-purple-200 hover:bg-gray-400 text-purple-800 font-bold text-80 py-2 px-4 rounded inline-flex items-center mb-2 mr-2" target="_blank" :href="link.url">                            
          <span>{{ link.title }} &rarr;</span>
        </a>
      </div>
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
    }
  },
  components: {
    ProjectNav,
    Words
  },
  head() {
    return {
      title: this.project.title,
      meta: [{ hid: 'description', name: 'description', content: this.project.description }]
    };
  },
};
</script>