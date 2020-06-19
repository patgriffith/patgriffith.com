<template>
    <div id="giggle" class="relative hidden lg:block lg:sticky lg:left-0 lg:top-0 lg:right-0 bg-white">
        <ul class="font-bold text-80 text-center p-4 mx-auto max-w-lg lg:max-w-none">
            <li class="mr-2"><nuxt-link @click="logNav('Hire Me')" to="/#giggle">Hire Me</nuxt-link></li>
            <li class="mr-2"><nuxt-link @click="logNav('Portfolio')" to="/projects#giggle">Portfolio</nuxt-link></li>
            <!-- <li class="mr-2"><nuxt-link @click="logNav('Writing')" to="/words#giggle">Writing</nuxt-link></li> -->
            <!-- <li class="mr-2"><nuxt-link @click="logNav('About Me')" to="/words/about#giggle">About Me</nuxt-link></li>                                -->
            <li class="mr-2"><nuxt-link to="/resume" @click="logNav('Resume')" target="_blank">Résumé</nuxt-link></li>
            <li class="mr-2"><a @click="logNav('GitHub')" href="https://github.com/patricklorenzut" target="_blank">GitHub</a></li>
            <li><a @click="logNav('Email')" href="mailto:patrick.lorenzut@gmail.com">Email Me</a></li>
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