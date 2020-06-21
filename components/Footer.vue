<template>
    <div>
        <EmailSignup />
        <footer class="bg-purple-800 mt-56">        
            <p class="p-6 text-white text-center">Copyright @2020 Patrick Lorenzut</p>            
        </footer>
        <TitleTwister />
        <ChatWidget />
        
    </div>
</template>
<script>
import EmailSignup from '~/components/EmailSignup.vue'
import TitleTwister from '~/components/TitleTwister.vue'
import ChatWidget from '~/components/ChatWidget.vue'
export default {
    components: {
        EmailSignup,
        TitleTwister,
        ChatWidget,
    }
}
</script>