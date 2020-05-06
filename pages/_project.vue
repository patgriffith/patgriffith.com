<template>
    <article>
        <h1>{{post.title}}</h1>
        <nuxtdown-body :body="post.body"/>
    </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { post: payload };
    else
      return {
        post: await require(`~/content/projects/${params.project}.json`),
      };
  },
};
</script>