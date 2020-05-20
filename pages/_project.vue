<template>
    <article>
        <h1 class="text-3xl font-bold">{{post.title}}</h1>
        <vue-markdown>{{ post.intro }}</vue-markdown>
        
        
        <div v-if="post.updates">
          <div v-for="update in post.updates" :key="update.id" :id="update.id">
            this is an update
          </div>
        </div>
        
      
        <vue-markdown>{{ post.intro }}</vue-markdown>



    </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { post: payload };
    else
      return {
        post: await require(`~/content/projects/${params.slug}.json`),
      };
  },
};
</script>