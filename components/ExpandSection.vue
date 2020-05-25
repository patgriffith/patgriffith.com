<template>
    <div>
        <div class="mx-auto max-w-xl select-none">
            <a :href="section.link" v-if="section.link" class="block relative section-expand cursor-pointer max-w-md py-4 px-6 bg-purple-100 hover:bg-purple-800 hover:text-white">
                {{ section.title }}
                <span class="font-bold text-150">&rarr;</span>
            </a>
            <div v-else class="relative section-expand cursor-pointer max-w-md py-4 px-6" @click="setVisibility" :class="{'bg-purple-800 text-white' : visible, 'bg-purple-100 hover:bg-purple-800 hover:text-white' : !visible}">
                {{ section.title }}
                <span class="font-bold text-150">{{ visible ? '-' : '+' }}</span>
            </div>
        </div>
        <div v-show="visible" class="article border-t-4 border-purple-800 bg-pink-100 p-10 mx-auto max-w-4xl">
            <vue-markdown>{{ section.content }}</vue-markdown>
        </div>
    </div>
</template>
<script>
export default {
    props: ['section'],
    data(){
        return{
            visible: false
        }
    },
    methods: {
        setVisibility(){
            if(this.visible){
                this.visible = false
                this.$ga.event('Accordion', 'Close', this.$parent.data.title + ' - ' + this.section.title)
            }
            else{
                this.visible = true
                this.$ga.event('Accordion', 'Open', this.$parent.data.title + ' - ' + this.section.title)
            }
        }
    }
}
</script>