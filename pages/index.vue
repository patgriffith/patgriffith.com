<template>
  <div>    
    
    <Title :h1="h1" :h2="h2" />

    <div class="text-center mt-20">
      <nuxt-link to="/#contact" class="button">Hire Me (start for free)</nuxt-link>
      <p class="mt-5 text-80 opacity-50">Or read on to see what I can do.</p>
    </div>

    <section class="mt-32">
        <div class="container text-center">
          <video autoplay loop muted class="mx-auto">
              <source src="/videos/waiting.mp4" type="video/mp4">
              <img src="/img/patandandy.jpg" class="rounded"/>
          </video>
          <p class="text-gray-500 mt-4 mx-auto max-w-xl">This is me pretending to wait for your call. Probably don't hire me for my videography or acting skills.</p>
        </div>
    </section>

    <HomeSection :data="sections('approach')"/>
    <ClickToExpand/>
    <Testimonial :data="$store.state.testimonials[0]"/>
    <HomeSection :data="sections('experience')"/>
    <Testimonial :data="$store.state.testimonials[1]"/>
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
      'h1': 'What’s your problem?',
      'h2': "With 10 years of software experience (from branding to machine learning) and 33 years of life experience (from selling a business to getting a divorce) I'm we'll positioned to solve a whole slew of problems. Is yours one of them? Email me and let's find out!"
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
      title: 'Pat Griffith: Software Generalist Human Person'
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