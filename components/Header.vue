<template>
    <div class="relative" style="z-index: 10">
        <div id="rainbow"></div>        
        <div id="collage-container" v-if="showHeader">      
            <div id="collage-images">
                <img src="/img/values/fuck-columbus.png" id="fuck-columbus"/>
                <img src="/img/values/planned-parenthood.png" id="planned-parenthood"/>
                <img src="/img/values/team-everybody.png" id="team-everybody"/>
                <img src="/img/values/love-wins.png" id="love-wins"/>
                <img src="/img/values/black-lives-matter.png" id="black-lives-matter"/>
                <img src="/img/values/people-over-profit.png" id="people-over-profit"/>
            </div>          
            <img src="/img/patgriffith.png" id="face"/>  
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showHeader: true
        }
    },
    watch: {
        $route(to, from) {
            this.showHeader = false
        }
    }
}
</script>