<template>
  <div>
    <header class="container max-w-2xl mx-auto mt-20">
      <h1 class="text-purple-800 font-bold leading-1 text-200">{{ post.title }}</h1>
      <h2 class="mt-3 text-110 text-purple-800">{{ post.description }}</h2>      
    </header>

       
    <vue-markdown class="article container max-w-2xl mx-auto mt-20">{{ post.content }}</vue-markdown>
    
  </div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { post: payload };
    else
      return {
        post: await require(`~/content/words/${params.slug}.json`),
      };
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: this.post.title,
      meta: [{ hid: 'description', name: 'description', content: this.post.description }]
    };
  },
};
</script>