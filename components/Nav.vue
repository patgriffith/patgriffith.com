<template>
    <div class="relative lg:sticky lg:left-0 lg:top-0 lg:right-0 bg-white" style="z-index: 999998">
        <ul class="font-bold text-80 text-center p-4 mx-auto max-w-lg lg:max-w-none">
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('values')" href="/#values">Values</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('approach')" href="/#approach">Approach</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('skills')" href="/#skills">Skills &amp; Experience</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('pricing')" href="/#pricing">Pricing</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('projects')" href="/#projects">Side Projects</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('faq')" href="/#faq">FAQ</a></li>            
            <li class="mt-2 inline-block"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('contact')" href="/#contact">Contact Me</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
        logNav(item){
            this.$ga.event('Nav', 'Click', item)
        }
    }
}
</script>