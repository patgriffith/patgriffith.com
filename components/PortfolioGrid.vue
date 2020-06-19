<template>
    <div class="container mt-24">
      <div class="max-w-md md:max-w-4xl mx-auto mb-4">
        <nuxt-link v-for="project in projects" :key="project.slug" class="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 relative block hover:bg-yellow-200 p-4" :to="project.slug + '#giggle'">                    
          <span class="col-span-1">
            <img v-if="project.image" :src="project.image" :alt="project.title" class=""/>
          </span>
          <span class="col-span-1 relative">
            <p class="mb-1"><strong>{{ project.title }}</strong></p>
            <p class="mt-3 leading-3">{{ project.description }}</p>
            <strong class="block text-150">&rarr;</strong>
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