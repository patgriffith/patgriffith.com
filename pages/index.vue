<template>
  <div>    
    
    <header class="container max-w-5xl mt-20">
      <div class="text-center">
        <h1 class="text-purple-800 font-bold leading-1 text-200 md:text-300 mx-auto max-w-5xl">Software Engineer Generalist Seeks Meaningful Work</h1>
        <h2 class="mt-6 text-110 max-w-4xl mx-auto">Hey, I'm Patrick, a pragmatic egalitarian - and situational goofball - who likes to combine his <a href="/#experience" class="text-green-700 hover:text-black underline">diverse tech skills</a> for social good. Please <a href="/#contact" class="text-green-700 hover:text-black underline">contact me</a> to see how I can help.</h2>        
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



    
    
    <section class="pt-32 mt-8 hidden">
        <div class="container">
            <h2 class="mx-auto max-w-xl font-bold text-200 leading-1 text-purple-800 mb-4"><span>tl;dr</span></h2>
            <div class="article mx-auto max-w-xl mb-10">
                <vue-markdown>Name's Patrick. You can call me... Patrick. 🤷‍♂️

I have 11 years of professional tech-industry experience spanning the following roles:

- UI/UX Designer
- Full-Stack Developer (main stack is NuxtJS, VueJS, Lumen, MySQL, NetlifyCMS, TailwindCSS)
- Machine Learning Engineer (primarily with semantic segmentation)
- Conversion Rate Optimizer (behavioural design + split tests)
- Copywriter (style bounces between irreverent and tear-jerking)
- Search Engine Optimizer (on-site only)

These skills are not rare. But they are rare in combination. This interdisciplinary capability - and more importantly, the knowledge and empathy from having all of these perspectives - is what makes me different from other coders. When we work together you get:

- An empathetic strategist who understands the "why" behind each task. 
- A purpose-driven and results-driven worker.
- Someone who looks for shortcuts (whether that's a framework, library, template, or different solution altogether) when appropriate, as speed and cost are two important factors in results-driven engineering.
- Someone who can manage and execute a web project in its entirety, without you needing to hire people with different specialties.
- A legitimate team-player who doesn't soak up the glory, doesn't defer the blame, and is otherwise generally not an asshole.
- A dude who laughs a lot, sees the good in people, and believes that **the good of all is for the good of all**.

Okay, tl;dr complete.

Have I yet swooned you? [Contact me](/#contact), please.

Not convinced? Cool. Many more words to follow.


        </vue-markdown> 
            </div>
        </div>
    </section>

    <!-- <HomeSection :data="sections('values')"/> -->    
    <HomeSection :data="sections('approach')"/>
    <ClickToExpand/>    
    <Testimonial :data="testimonials[0]"/>
    <HomeSection :data="sections('experience')"/>
    <HomeSection :data="sections('projects')"/>
    <Testimonial :data="testimonials[1]"/>
    <HomeSection :data="sections('pricing')"/>
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
