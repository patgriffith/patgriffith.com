<template>
  <div>    
    
    <Title :h1="h1" :h2="h2" />
    <div class="container max-w-xl mt-20">        
      <div v-for="word in words" :key="word.slug" class="mb-6">
          <nuxt-link :to="word.slug + '#giggle'" class="font-bold link">
              {{ word.title }}
              <span>&rarr;</span>
          </nuxt-link>
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
      'h1': "Narcisstically sharing my thoughts since... recently.",
      'h2': "Writing has always been how I've processed feelings and made decisions. Back in the day I used to blog a lot, but I deleted all of those posts when I went full Tyler Durden on my life. Now that I've burnt it all down, I'm slowly building it back up, this time trying to be ever-so-slightly less pretentious in the process, avoiding preachy asshole syndrome."
    }
  },
  computed: {
    words() {
      return this.$store.state.words;
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
