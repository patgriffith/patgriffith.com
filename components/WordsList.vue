<template>
    <div class="article">        
        <ul>
            <li v-for="word in words" :key="word.slug" class="mb-6">
                <nuxt-link :to="'/' + (typeof word.project !== 'undefined' ? word.project : 'words' ) + '/' + word.slug" class="font-bold link">
                {{ word.title }}        
                &rarr;      
                </nuxt-link>    
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['words'],
}
</script>