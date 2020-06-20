<template>
    <div class="container mt-24">
      <div class="max-w-md md:max-w-4xl mx-auto mb-4">                  
        <PortfolioItem :project="project" v-for="project in projects" :key="project.slug"/>        
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
    projects() {
      return this.$store.state.projects.filter(function(p) {
          return (p.visible);
      });
    }
  }
}
</script>