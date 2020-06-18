<template>
    <div id="giggle" class="relative hidden lg:block lg:sticky lg:left-0 lg:top-0 lg:right-0 bg-white">
        <ul class="font-bold text-80 text-center p-4 mx-auto max-w-lg lg:max-w-none">
            <li class="mr-2"><nuxt-link @click="logNav('Hire Me')" to="/#approach">Approach</nuxt-link></li>
            <li class="mr-2"><nuxt-link @click="logNav('Hire Me')" to="/#experience">Experience</nuxt-link></li>
            <li class="mr-2"><nuxt-link @click="logNav('Hire Me')" to="/#projects">Projects</nuxt-link></li>
            <!-- <li class="mr-2"><nuxt-link @click="logNav('Hire Me')" to="/writing#giggle">Writing</nuxt-link></li>
            <li class="mr-2"><nuxt-link @click="logNav('About')" to="/about#giggle">About Me</nuxt-link></li>                                -->
            <li class="mr-2"><nuxt-link to="/resume" @click="logNav('Resume')" target="_blank">Résumé</nuxt-link></li>
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