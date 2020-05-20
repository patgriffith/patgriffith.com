<template>
    <section class="py-32 my-8 article" :id="data.slug">
        <div class="container">
            <h2 class="mx-auto max-w-xl font-bold text-200 leading-1 text-purple-800 mb-4"><span>{{ data.title}}</span></h2>
            <div class="mx-auto max-w-xl mb-10">
                <vue-markdown>{{ data.intro }}</vue-markdown>
            </div>
            <template v-if="data.expands && data.expands.length > 0">
                <div v-for="(section, index) in data.expands" :key="section.title" class="mb-2">
                    <div class="mx-auto max-w-xl select-none">
                        <div class="cursor-pointer max-w-md py-4 px-6" @click="setVisibility(index)" :class="{'bg-purple-800 text-white' : (visible == index), 'bg-purple-100 hover:bg-purple-800 hover:text-white' : !(visible == index)}">
                            {{ section.title }}
                            <span class="float-right font-bold -mt-3 text-150">+</span>
                        </div>
                    </div>
                    <div v-if="visible == index" class="border-t-4 border-purple-800 bg-pink-100 p-10 mx-auto max-w-4xl">
                        <vue-markdown>{{ section.content }}</vue-markdown>
                    </div>
                </div>
                <div class="mx-auto max-w-xl">
                    <div class="max-w-md text-right">
                        <img src="/img/click-to-expand.png" alt="Click to expand." width="212" height="49" class="inline-block mr-12 mt-4"/>
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
        setVisibility(index){
            if(this.visible == index){
                this.visible = -1
            }
            else this.visible = index
        }
    }
}
</script>