<template>
    <section class="pt-24 md:pt-32 mt-8" :id="data.slug">
        <div class="container">
            <h2 class="mx-auto max-w-xl font-bold text-200 leading-1 text-purple-800 mb-4"><span>{{ data.title}}</span></h2>
            <div v-if="data.intro" class="article mx-auto max-w-xl mb-10">
                <vue-markdown>{{ data.intro }}</vue-markdown>
            </div>
            <template v-if="data.expands && data.expands.length > 0">                
                <div v-for="section in data.expands" :key="section.title" class="mb-2">
                    <ExpandSection :section="section"/>                    
                </div>
            </template>
            <div v-if="data.outro" class="article mx-auto max-w-xl mt-10 mb-10">
                <vue-markdown>{{ data.outro }}</vue-markdown>
            </div>
        </div>
    </section>
</template>
<script>
import ExpandSection from '~/components/ExpandSection.vue'
export default {
    props: ['data'],
    components: {
        ExpandSection   
    },
}
</script>