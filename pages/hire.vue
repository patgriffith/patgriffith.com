<template>
  <div>    
    
    <Title :h1="h1" :h2="h2" />

    <div class="text-center mt-20">
      <a class="button" href="mailto:mister@patgriffith.com">Try me for free.</a>
      <p class="mt-5 text-80">One-week free trial. Then $250+ per week.</p>
    </div>

    <HomeSection :data="sections('contact')"/>
    
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import HomeSection from '~/components/HomeSection.vue'
import Testimonial from '~/components/Testimonial.vue'
import ClickToExpand from '~/components/ClickToExpand.vue'
export default {
  data(){
    return {
      'h1': 'Hire a ',
      'h2': "I’m really good at what I do. But you can’t know that yet. So... let’s work together in a fresh way that doesn’t require a leap of faith."
    }
  },
  components: {
    Title,
    HomeSection,
    Testimonial,
    ClickToExpand
  },
  methods: {
    sections(slug) {
      return this.$store.state.sections.find(obj => {
        return obj.slug === slug
      })
    },
    externalLinks(){
      for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
        var b = c[a];    
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")  
      } 
    }
  },
  head() {
    return {      
      title: 'Hire Pat Griffith'
    };
  },
  mounted: function() {
    this.externalLinks()
    window.onclick = function (e) {
      if (e.target.localName == 'a') {
          
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  
}
</style>