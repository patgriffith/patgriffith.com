<template>
    <div>        
        <div v-for="word in words" :key="word.slug" class="mb-6">
            <nuxt-link :to="'/' + (typeof word.project !== 'undefined' ? word.project : 'words' ) + '/' + word.slug + '#giggle'" class="font-bold link">
                {{ word.title }}        
                &rarr;      
            </nuxt-link>    
        </div>
    </div>
</template>
<script>
export default {
    props: ['words'],
}
</script>