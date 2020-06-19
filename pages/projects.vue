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
      'h2': "Despite successfully starting and selling an online company in my younger years… I don’t currently have the emotional bandwidth (or the desire) to be a solo entrepreneur. But I do like to make stuff. Here are some of my solo projects, plus some work I’ve done for others."
    }
  },
  components: {
    HomeSection,
    Title,
    PortfolioGrid
  },
  head() {
    return {
      title: 'Websites that Patrick Lorenzut built.'
    };
  }
}
</script>
