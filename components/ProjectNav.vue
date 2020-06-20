<template>
    <div>
        <div class="container mt-24">
            <div class="max-w-md md:max-w-4xl mx-auto mb-4 grid grid-cols-2 md:grid-cols-5 gap-16">
                <div class="col-span-2 md:col-span-5 text-center">
                    <h1 class="text-300 font-bold text-purple-800 leading-1 mb-2">{{ post ? post.title : project.title + ": " + project.subtitle }}</h1>  
                    <h2 v-if="post" v-html="post.description"></h2>                  
                </div>
                <div class="col-span-2" :class="{'text-center md:col-span-5 -mt-16' : posts.length === 0 }">               
                    <div v-if="post">
                        <h2 class="mb-4">Posted in <nuxt-link :to="'/' + project.slug" class="link font-bold mt-4 bg-yellow-200">{{ project.title }}</nuxt-link></h2>  
                        <nuxt-link class="bg-purple-200 hover:bg-gray-400 text-purple-800 font-bold text-80 py-2 px-4 rounded inline-flex items-center mb-2 mr-2" :to="'/' + project.slug">                            
                            &larr; Back to Project
                        </nuxt-link>
                    </div>
                    <div v-else>     
                        <h2 v-html="project.description" class="mb-4"></h2>                                                    
                        <a v-for="link in project.links" :key="link.title" class="bg-purple-200 hover:bg-gray-400 text-purple-800 font-bold text-80 py-2 px-4 rounded inline-flex items-center mb-2 mr-2" target="_blank" :href="link.url">                            
                            <span>{{ link.title }} &rarr;</span>
                        </a>
                    </div>                    
                </div>
                <div class="col-span-2 md:col-span-3 font-bold" v-if="posts.length > 0">
                    <div class="article">
                        <h2><template v-if="post">{{ project.title }} </template> Updates</h2>
                        <ol>
                            <li class="mt-2" v-for="post in posts" :key="post.slug"><nuxt-link :to="'/' + project.slug + '/' + post.slug">{{ post.title }}</nuxt-link></li>
                        </ol>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-5">
                    <div v-if="post && post.image">
                        <img :src="post.image" class="mx-auto border-8 border-purple-100" :alt="post.title"/>
                    </div>
                    <div v-else-if="!post && project.image">
                        <img :src="project.image" class="mx-auto border-8 border-purple-100" :alt="project.title"/>
                    </div>
                    <hr v-else class=""/>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    props: ['project', 'title', 'subtitle', 'post'],
    computed: {
        posts() {
            let that = this
            return this.$store.state.words.filter(function(p) {
                return (p.project == that.$route.params.project && p.visible);
            });
        }
    },
}
</script>