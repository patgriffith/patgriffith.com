<template>
    <div class="container mt-24">
      <div class="max-w-md md:max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <nuxt-link v-for="project in projects" :key="project.slug" class="col-span-1 relative block hover:bg-yellow-200" :to="project.slug + '#giggle'">          
          <span class="block py-2 px-4">
            <p class="mb-1"><strong>{{ project.title }}</strong></p>
            <img v-if="project.image" :src="project.image"/>
            <p class="mt-3 leading-3">{{ project.subtitle }}</p>
            <strong class="block text-200 -mt-2">&rarr;</strong>
          </span>
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