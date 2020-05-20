<template>
    <article>
        <h1 class="text-3xl font-bold">{{post.title}}</h1>
        <vue-markdown>{{ post.intro }}</vue-markdown>
                
        <div v-if="post.expands">
          <div v-for="expand in post.expands" :key="expand.title" :id="expand.title">
            {{ expand.title }}
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
        post: await require(`~/content/sections/${params.slug}.json`),
      };
  },
};
</script>