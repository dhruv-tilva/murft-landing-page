<template>
    <div>
        <div class="w-full h-80">
            <img class="w-full h-full" :src="blogDetails.url" alt="">
        </div>
        <p class="text-[#F29764] text-sm font-semibold font-darker mt-6 mb-1 3xl:text-base">{{ blogDetails.date }}</p>
        <h4 class="text-secondary font-darker text-2xl font-semibold mb-1 lg:text-3xl 3xl:text-4xl">{{ blogDetails.title }}
        </h4>
        <p class="text-[#6E6E6E] text-sm font-medium font-darker mb-4 xl:text-base 3xl:text-xl 3xl:w-[700px]">{{
            blogDetails.subTitle }}
        </p>
        <a class="text-secondary text-lg font-bold underline font-darker transition-all duration-200 hover:text-primary 3xl:text-xl"
            href="">{{ blogDetails.link }}</a>
    </div>
</template>

<script>
export default {
    props: ["blogDetails"]
}
</script>

<style></style>