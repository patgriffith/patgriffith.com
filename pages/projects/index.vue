<template>
  <div>    
    
    <Title :h1="h1" :h2="h2" />

    <div class="container mt-24">
      <div class="max-w-md md:max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <nuxt-link v-for="project in projects" :key="project.slug" class="col-span-1 relative rounded border border-1 block hover:bg-yellow-200" :to="'/projects/' + project.slug + '#giggle'">
          <img :src="'/img/designs/' + project.slug +'.png'" :alt="project.title" class="rounded-t border-b">
          <span class="block py-2 px-4">
            <strong>{{ project.title }}</strong>
            <p class="-mt-1">{{ project.description }}</p>

          </span>
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
  head() {
    return {
      title: 'Websites that Patrick Lorenzut built.'
    };
  }
}
</script>
