<template>
    <div class="md:w-[33%]">
        <h5 class="text-[#fff] font-darker text-base font-medium opacity-60">{{ footerLinks.title }}</h5>
        <ul class="mt-3 space-y-2">
            <li v-for="(item, index) in footerLinks.links" :key="index"><a href=""
                    class="text-[#fff] font-darker text-xl font-medium">{{ item }}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['footerLinks']
}
</script>