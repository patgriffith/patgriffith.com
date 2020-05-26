<template>
  <div>    
    
    <header class="container max-w-4xl mt-20">
      <div class="text-center">
        <h1 class="text-purple-800 font-bold leading-1 text-300">Hire me to code, design,<br/> and market your project.</h1>
        <h2 class="mt-6 text-110">Hey, I'm Patrick. I use empathy, creativity, and nerdery to find and solve a wide array of business problems. For ethical teams that put people over profit. Read on to see how I can help <em>your</em> organization... and then <nuxt-link to="/#contact" class="text-green-700 hover:text-black underline">contact me</nuxt-link>. If you want to.</h2>
      </div>
    </header>


    <section class="mt-40 hidden">
        <div class="container text-center">
          <iframe width="887" height="499" src="https://www.youtube.com/embed/jizdJBmLvos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto"></iframe>
        </div>
    </section>

    <!-- <HomeSection :data="sections('values')"/> -->    
    <HomeSection :data="sections('approach')"/>
    <ClickToExpand/>    
    <Testimonial :data="testimonials[0]"/>
    <HomeSection :data="sections('experience')"/>
    <HomeSection :data="sections('projects')"/>
    <Testimonial :data="testimonials[1]"/>
    <HomeSection :data="sections('faq')"/>
    <HomeSection :data="sections('contact')"/>
    
    <section class="fixed top-0 right-0 left-0 bottom-0 bg-white" v-show="charmingSmile">
      <div class="container h-screen flex items-stretch">
        <img src="/img/charming-smile.gif" alt="Patrick smiling" class="self-center mx-auto" width="1200"/>
      </div>
    </section>


    <section class="container max-w-xl pt-40 hidden">      
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.slug">
          <nuxt-link :to="'/' + project.slug">{{ project.title }}</nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
import Testimonial from '~/components/Testimonial.vue'
import ClickToExpand from '~/components/ClickToExpand.vue'
export default {
  data(){
    return {
      charmingSmile: false,
      testimonials: [
        {
          img: "/img/testies/anthony.png",
          name: "Anthony Ongaro",
          position: "BreakTheTwitch.com",
          website: "https://www.breakthetwitch.com",
          content: "Dude, you're like a highly skilled ninja assassin operative creator coder. One of the smartest people I know. It's crazy how fast you can build stuff. I really appreciate your help."
        },
        {
          img: "/img/testies/capers.png",
          name: "Capers Rumph",
          position: "theoppositeofwar.com",
          website: "https://theoppositeofwar.com",
          content: "Patrick is an actual ray of actual light. His energy, enthusiasm, openness, thoughtfulness, and inquisitive nature are exemplary."
        },
      ]
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    HomeSection,
    Testimonial,
    ClickToExpand
  },
  methods: {
    startCharm(){
      this.charmingSmile = true
      setTimeout(this.stopCharm, 500);
    },
    stopCharm(){
      this.charmingSmile = false
    },
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
      title: 'Patrick Lorenzut: Ethical Online Business Consultant'
    };
  },
  mounted: function() {
    // let charmingDiv = document.getElementById('charming-smile');
    // charmingDiv.addEventListener('click', this.startCharm);
    this.externalLinks()
    window.onclick = function (e) {
      if (e.target.localName == 'a') {
          
      }
    }
  }
}
</script>
