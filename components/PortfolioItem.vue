<template>
    <nuxt-link class="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative block hover:bg-yellow-200 p-4" :to="project.slug"> 
        <span class="col-span-1">
            <img v-if="project.image" :src="project.image" :alt="project.title" class=""/>
        </span>
        <span class="col-span-1 relative">
            <p class="mb-1"><strong>{{ project.title }}</strong></p>
            <p class="mt-3 leading-3">{{ project.description }}</p>
            <strong class="block text-150">&rarr;</strong>
        </span>
    </nuxt-link>
</template>
<script>
export default {
    props: ['project']
}
</script>