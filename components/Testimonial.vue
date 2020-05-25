<template>
    <div class="container mt-40">
        <div class="bg-purple-800 py-8 px-8 mx-auto max-w-3xl rounded-md text-white md:flex">
            <div class="flex-none">
                <img :src="data.img" class="rounded-md ml-8 mb-8 md:ml-0 md:mb-0" :alt="data.name" width="125" height="125"/>
            </div>
            <div class="ml-8 flex-grow article">
                <p><em>{{ data.content }}</em></p>
                <p>{{ data.name }}<br/><a :href="data.website"><strong>{{ data.position }}</strong></a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>