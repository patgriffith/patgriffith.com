<template>
    <div class="container mt-24">
      <div class="max-w-md md:max-w-4xl mx-auto mb-4">          
        
        <PortfolioItem :project="project" v-for="project in my_projects" :key="project.slug"/>
        
        <h2 class="mt-24 mb-10 font-bold text-150 text-purple-800 mx-auto max-w-2xl text-center">And here are some projects that I either sold, worked on for others, or shut down.</h2>      
        <PortfolioItem :project="project" v-for="project in not_my_projects" :key="project.slug"/>
      </div>       
    </div>
</template>
<script>
import PortfolioItem from '~/components/PortfolioItem.vue'
export default { 
  components: {
    PortfolioItem
  },
  computed: {
    my_projects() {
      return this.$store.state.projects.filter(function(p) {
          return (p.visible && p.mine);
      });
    },
    not_my_projects() {
      return this.$store.state.projects.filter(function(p) {
          return (p.visible && !p.mine);
      });
    },
  }
}
</script>