<template>
  <div>    
    
    <Title :h1="h1" :h2="h2" />


    <!-- <HomeSection :data="sections('projects')"/> -->

    <div class="container mt-24">
      <div class="max-w-md md:max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a v-for="project in projects" :key="project.slug" target="_blank" class="col-span-1 relative rounded border border-1 block hover:bg-yellow-200" :href="project.link">
          <img :src="'/img/designs/' + project.slug +'.png'" :alt="project.title" class="rounded-t border-b">
          <span class="block py-2 px-4">
            <strong>{{ project.title }}</strong>
            <p class="-mt-1">{{ project.description }}</p>

          </span>
        </a>
      </div>
       

    </div>

  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
import Title from '~/components/Title.vue'
export default {
  data(){
    return {
      'h1': 'Sometimes I make websites.',
      'h2': "Despite successfully starting and selling an online company in my younger years… I don’t currently have the emotional bandwidth (or the desire) to be an entrepreneur. But I do like to make stuff. Here are some of my projects."
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    HomeSection,
    Title
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
      title: 'Websites that Patrick Lorenzut built.'
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
