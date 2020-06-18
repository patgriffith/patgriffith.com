<template>
    <header class="container max-w-5xl mt-20">
      <div class="text-center">
        <h1 class="text-purple-800 font-bold leading-1 text-200 md:text-300 mx-auto max-w-5xl" v-html="h1"></h1>
        <h2 v-if="h2" class="mt-6 text-110 max-w-4xl mx-auto" v-html="h2"></h2>        
      </div>
    </header>
</template>
<script>
export default {
    props: ['h1', 'h2']
}
</script>