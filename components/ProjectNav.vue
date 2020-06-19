<template>
    <div>
        <div class="container mt-24">
            <div class="max-w-md md:max-w-4xl mx-auto mb-4 grid grid-cols-2 md:grid-cols-5 gap-16">
                <div class="col-span-2 md:col-span-5 text-center">
                    <h1 class="text-300 font-bold text-purple-800 leading-1 mb-2">{{ title }}</h1>
                    <nuxt-link v-if="$route.params.update" :to="'/' + project.slug + '#giggle'" class="link font-bold mt-4 bg-yellow-200">&larr; Back to project overview.</nuxt-link>
                </div>
                <div class="col-span-2" :class="{'text-center md:col-span-5 -mt-16' : posts.length === 0 }">                    
                    <h2 v-html="subtitle" class="mb-4"></h2>
                    <a v-if="project.link" class="bg-purple-200 hover:bg-gray-400 text-purple-800 font-bold text-80 py-2 px-4 rounded inline-flex items-center mb-2 mr-2" target="_blank" :href="project.link">                            
                        <span>Website</span>
                    </a>
                    <a v-if="project.ios" class="bg-purple-200 hover:bg-gray-400 text-purple-800 font-bold text-80 py-2 px-4 rounded inline-flex items-center mb-2 mr-2" target="_blank" :href="project.ios">                            
                        <span>iOS App</span>
                    </a>
                    <a v-if="project.github" class="bg-purple-200 hover:bg-gray-400 text-purple-800 font-bold text-80 py-2 px-4 rounded inline-flex items-center" target="_blank" :href="project.github">                            
                        <span>Source Code</span>
                    </a>
                </div>
                <div class="col-span-2 md:col-span-3 font-bold" v-if="posts.length > 0">
                    <div class="article">
                        <h2>Updates</h2>
                        <ol>
                            <li class="mt-2" v-for="post in posts" :key="post.slug"><nuxt-link :to="'/' + project.slug + '/' + post.slug + '#giggle'">{{ post.title }}</nuxt-link></li>
                        </ol>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-5">
                    <hr class=""/>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    props: ['project', 'title', 'subtitle'],
    computed: {
        posts() {
            let that = this
            return this.$store.state.words.filter(function(p) {
                return (p.project == that.$route.params.project);
            });
        }
    },
}
</script>