<template>
  <div>        
    <Title :h1="h1" :h2="h2" />
    <PortfolioGrid />    
  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
import Title from '~/components/Title.vue'
import PortfolioGrid from '~/components/PortfolioGrid.vue'
export default {
  data(){
    return {
      'h1': 'Proof that I really am a web developer, designer, copywriter, and machine learning engineer.',
      'h2': "I've ditched my scatterbrained affinity for frivolous side projects in the interest of building <a href='https://yaywork.com' target='_blank'>a real business that actually helps people</a>. That said, for the purposes of showing off some skillz, here are some of my projects from days past:"
    }
  },
  components: {
    HomeSection,
    Title,
    PortfolioGrid
  },
  head() {
    return {
      title: 'Websites that Pat Griffith built.'
    };
  }
}
</script>
