<template>
  <div>    
    
    <header class="container max-w-4xl mt-20">
      <div class="text-center">
        <h1 class="text-purple-800 font-bold leading-1 text-300">Hire me to grow<br class="hidden md:block"/> your ethical business.</h1>
        <h2 class="mt-6 text-110">Hey, I'm Patrick. I use empathy, creativity, and nerdery to solve a wide array of business problems -- ranging from code to design to marketing and beyond. Read on to see how I can help <em>your</em> business... and then <nuxt-link to="/#contact" class="text-green-700 hover:text-black underline">contact me</nuxt-link>. If you want to.</h2>
      </div>
    </header>


    <section class="mt-40">
        <div class="container text-center">
          <iframe width="887" height="499" src="https://www.youtube.com/embed/jizdJBmLvos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto"></iframe>
        </div>
    </section>

    <HomeSection :data="sections('values')"/>
    <Testimonial/>
    <HomeSection :data="sections('approach')"/>
    <Testimonial/>
    <HomeSection :data="sections('skills')"/>
    <Testimonial/>
    <HomeSection :data="sections('pricing')"/>
    <Testimonial/>
    <HomeSection :data="sections('faq')"/>
    <Testimonial/>
    <!-- <HomeSection :data="sections('projects')"/> -->
    <!-- <Testimonial/> -->
    <HomeSection :data="sections('contact')"/>
    
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
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    HomeSection,
    Testimonial
  },
  methods: {
    sections(slug) {
      return this.$store.state.sections.find(obj => {
        return obj.slug === slug
      })
    },
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: 'Patrick Lorenzut: Ethical Online Business Consultant'
    };
  },
}
</script>
