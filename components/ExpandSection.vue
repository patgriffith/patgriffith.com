<template>
    <div class="expand-wrapper">
        <div class="expand-title">
            <a :href="section.link" v-if="section.link">
                {{ section.title }}
                <span>&rarr;</span>
            </a>
            <div v-else class="" @click="setVisibility" :class="{'bg-purple-800 text-white' : visible, 'bg-purple-100 hover:bg-purple-800 hover:text-white' : !visible}">
                {{ section.title }}
                <span>{{ visible ? '-' : '+' }}</span>
            </div>
        </div>
        <div v-show="visible" class="article border-t-4 border-purple-800 bg-pink-100 p-10 mx-auto max-w-4xl">
            <vue-markdown v-interpolation :source="section.content"></vue-markdown>
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