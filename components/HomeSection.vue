<template>
    <section class="my-40">
        <div class="container">
            <h2 class="mx-auto max-w-xl font-bold text-4xl text-purple-indigo">{{ data.title}}</h2>
            <div class="mx-auto max-w-xl text-xl mb-10"><nuxtdown-body :body="data.intro"/></div>
            <div v-for="section in data.expands" :key="section.title">
                <div class="mx-auto max-w-xl mb-2">
                    <div class="bg-purple-ghostwhite hover:bg-purple hover:text-white cursor-pointer max-w-md py-4 px-8" @click="section.visible = !section.visible" :class="{'bg-purple-indigo text-white' : section.visible}">{{ section.title }}</div>
                </div>
                <div v-if="section.visible" class="border-4 border-purple-indigo p-10 bg-purple-ghostwhite mx-auto max-w-4xl">{{ section.content }}</div>
            </div>
            <div v-if="data.outro" class="mx-auto max-w-xl text-xl mb-10"><nuxtdown-body :body="data.outro"/></div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['data']
}
</script>