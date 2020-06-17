<template>
  <div>    
    
    <header class="container max-w-5xl mt-20">
      <div class="text-center">
        <h1 class="text-purple-800 font-bold leading-1 text-200 md:text-300 mx-auto max-w-5xl">Sometimes I Make Websites</h1>
            
      </div>
    </header>


    <!-- <HomeSection :data="sections('projects')"/> -->

    <div class="container max-w-3xl mt-10">
        <div class="article text-110">
            <p>Despite successfully starting and selling an online company in my younger years… I don’t currently have the emotional bandwidth (or the desire) to be a full-time entrepreneur.</p>
                
            <vue-markdown>But I do like to make stuff. Here are some of my side projects. All code is publicly available here: https://github.com/patricklorenzut</vue-markdown>
        </div>
        <div class="mt-10 expand-wrapper">
            <div class="expand-title">
                <a href="https://practicar.mx">
                    practicar.mx
                    <span>&rarr;</span>
                </a>
            </div>
            <div class="expand-title">
                <a href="https://underpolished.com">
                    underpolished.com
                    <span>&rarr;</span>
                </a>
            </div>
            <div class="expand-title">
                <a href="https://forhumansake.org">
                    forhumansake.org
                    <span>&rarr;</span>
                </a>
            </div>
            <div class="expand-title">
                <a href="https://radicallymarginal.com">
                    radicallymarginal.com
                    <span>&rarr;</span>
                </a>
            </div>
            <div class="expand-title">
                <a href="https://remotefaces.com">
                    remotefaces.com
                    <span>&rarr;</span>
                </a>
            </div>
        </div>

    </div>

  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
export default {
  data(){
    return {
      
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    HomeSection,
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
