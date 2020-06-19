<template>
    <div class="container mt-24">
      <div class="max-w-md md:max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <nuxt-link v-for="project in projects" :key="project.slug" class="col-span-1 relative block bg-purple-100 border border-purple-200 hover:bg-yellow-200 py-2 px-4 pt-3" :to="project.slug + '#giggle'">          
          <p class="mb-1"><strong>{{ project.title }}</strong></p>
          <img v-if="project.image" :src="project.image" :alt="project.title" class=""/>
          <p class="mt-3 leading-3">{{ project.subtitle }}</p>
          <strong class="block text-150 -mt-2 text-purple-600">&rarr;</strong>
        </nuxt-link>
      </div>       
    </div>
</template>
<script>
export default {    
    computed: {
        projects() {
        return this.$store.state.projects.filter(function(p) {
            return (p.visible);
        });
        },
    }
}
</script>