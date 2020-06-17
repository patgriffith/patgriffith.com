<template>
  <div>    
    
    <header class="container max-w-5xl mt-20">
      <div class="text-center">
        <h1 class="text-purple-800 font-bold leading-1 text-200 md:text-300 mx-auto max-w-5xl">Software Engineer Generalist Seeks Meaningful Work</h1>
        <h2 class="mt-6 text-110 max-w-4xl mx-auto">Hey, I'm Patrick, a pragmatic egalitarian - and situational goofball - who likes to leverage his <a href="/#experience" class="link">diverse tech skills</a> for social good. Please <a href="mailto:patrick.lorenzut@gmail.com" class="link">email me</a> to see how I can help.</h2>        
      </div>
    </header>


    <section class="mt-20">
        <div class="container text-center">
          <video autoplay loop muted class="mx-auto">
              <source src="/videos/waiting.mp4" type="video/mp4">
              <img src="/img/patandandy.jpg" class="rounded"/>
          </video>
          <p class="text-gray-500 mt-4 mx-auto max-w-xl">This is me pretending to wait for your call. Probably don't hire me for my videography or acting skills.</p>
        </div>
    </section>


    <!-- <HomeSection :data="sections('values')"/>     -->

    <HomeSection :data="sections('approach')"/>
    <ClickToExpand/>

    <Testimonial :data="$store.state.testimonials[0]"/>

    <HomeSection :data="sections('experience')"/>
    <!-- <HomeSection :data="sections('projects')"/> -->

    <Testimonial :data="$store.state.testimonials[1]"/>

    <!-- <HomeSection :data="sections('pricing')"/> -->
    <HomeSection :data="sections('contact')"/>
    
  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
import Testimonial from '~/components/Testimonial.vue'
import ClickToExpand from '~/components/ClickToExpand.vue'
export default {
  data(){
    return {
      
    }
  },
  components: {
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
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: 'Patrick Lorenzut: Silly Online Business Consultant'
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
