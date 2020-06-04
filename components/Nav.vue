<template>
    <div class="relative lg:sticky lg:left-0 lg:top-0 lg:right-0 bg-white" style="z-index: 999998">
        <ul class="font-bold text-80 text-center p-4 mx-auto max-w-lg lg:max-w-none">
            <!-- <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('values')" href="/#values">Values</a></li> -->
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('approach')" href="/#approach">Approach</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('experience')" href="/#experience">Experience</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('projects')" href="/#projects">Side Projects</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('pricing')" href="/#pricing">Pricing</a></li>            
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('contact')" href="/#contact">Contact Me</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" href="https://github.com/patricklorenzut">Public Code</a></li>
            <li class="mt-2 inline-block"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" href="https://docs.google.com/document/d/1VP9QyA_wGLdSWg6rZHX0NoLZo8nrZv8Z0_QTN08ey5c/edit?usp=sharing">Résumé</a></li>
        </ul>
        <ul class="hidden font-bold text-80 text-center p-4 mx-auto max-w-lg lg:max-w-none">
            <!-- <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('values')" href="/#values">Values</a></li> -->
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('approach')" href="/#approach">Hire Me</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('experience')" href="/#experience">About Me</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('projects')" href="/#projects">Projects</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('pricing')" href="/#pricing">Pretentious Writing</a></li>            
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('contact')" href="/#contact">I Try Stuff</a></li>
            <li class="mt-2 inline-block mr-2"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('contact')" href="/#contact">Contact Me</a></li>
            <li class="mt-2 inline-block"><a class="inline-block text-purple-800 py-2 px-4 bg-purple-100 hover:bg-purple-800 hover:text-white rounded" @click="logNav('contact')" href="https://docs.google.com/document/d/1VP9QyA_wGLdSWg6rZHX0NoLZo8nrZv8Z0_QTN08ey5c/edit?usp=sharing">Résumé</a></li>
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