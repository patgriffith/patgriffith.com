<template>
    <div>
        <EmailSignup/>
        <footer class="bg-purple-800 mt-56">        
            <p class="p-6 text-white text-center">Copyright @2020 Patrick Lorenzut</p>            
        </footer>
        <script type="text/javascript">
            window.UnderpolishedTitles = 'Hire me?///Hey. 😗///I miss you. 😍'
        </script>
        <script src='https://api.underpolished.com/js/twister.js' async type="text/javascript"></script>

        <script>
        window.UnderpolishedChatSettings = {
            token: 'sQ034aCjacnURvpN',
            id: 1,
            color: '#38A169',
            button_text: 'Contact Me'
        };
        </script>
        <script src='https://api.underpolished.com/js/chatwidget.js' async type="text/javascript"></script>
    </div>
</template>
<script>
import EmailSignup from '~/components/EmailSignup.vue'
export default {
    components: {
        EmailSignup
    }
}
</script>