<template>
    <section class="py-32 my-8 article" :id="data.slug">
        <div class="container">
            <h2 class="mx-auto max-w-xl font-bold text-200 leading-1 text-purple-800 mb-4"><span>{{ data.title}}</span></h2>
            <div v-if="data.intro" class="mx-auto max-w-xl mb-10">
                <vue-markdown>{{ data.intro }}</vue-markdown>
            </div>
            <template v-if="data.expands && data.expands.length > 0">
                <div v-for="(section, index) in data.expands" :key="section.title" class="mb-2">
                    <div class="mx-auto max-w-xl select-none">
                        <div class="relative section-expand cursor-pointer max-w-md py-4 px-6" @click="setVisibility(index, section.title, data.title)" :class="{'bg-purple-800 text-white' : (visible == index), 'bg-purple-100 hover:bg-purple-800 hover:text-white' : !(visible == index)}">
                            {{ section.title }}
                            <span class="font-bold text-150">+</span>
                        </div>
                    </div>
                    <div v-if="visible == index" class="border-t-4 border-purple-800 bg-pink-100 p-10 mx-auto max-w-4xl">
                        <vue-markdown>{{ section.content }}</vue-markdown>
                    </div>
                </div>
            </template>
            <div v-if="data.outro" class="mx-auto max-w-xl mt-10 mb-10">
                <vue-markdown>{{ data.outro }}</vue-markdown>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['data'],
    data(){
        return {
            visible: -1
        }
    },
    methods: {
        setVisibility(index, section_title, data_title){
            if(this.visible == index){
                this.visible = -1
                this.$ga.event('Accordion', 'Close', data_title + ' - ' + section_title)
            }
            else{
                this.visible = index
                this.$ga.event('Accordion', 'Open', data_title + ' - ' + section_title)
            }
        }
    }
}
</script>