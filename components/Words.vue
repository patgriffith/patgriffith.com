<template>
    <div>
        <vue-markdown v-interpolation class="article" :source="content"></vue-markdown>
    </div>
</template>

<script>
import 'prismjs'
export default {
    props: ['content']
}
</script>