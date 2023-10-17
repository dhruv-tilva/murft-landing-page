<template>
    <div class="">
        <div class="flex items-center gap-x-4">
            <span class="text-secondary font-darker text-xl font-semibold">{{ slide.rating }}</span>
            <img class="w-20 h-4" :src="slide.starImg" alt="">
        </div>
        <p class="text-secondary text-left font-darker font-semibold text-xl mt-3 mb-7 xl:text-2xl 3xl:text-5xl">{{
            slide.title }}</p>
        <div class="flex items-start gap-x-4">
            <div class="w-14 h-14 rounded-[54px] border border-[#5F5F5F] 3xl:w-16 3xl:h-16">
                <img class="w-full h-full" :src="slide.person" alt="">
            </div>
            <div>
                <p class="text-xl font-semibold text-secondary font-darker text-left xl:text-2xl 3xl:text-3xl">{{
                    slide.personInfo[0] }}
                </p>
                <p class="text-lg font-medium text-[#56565C] font-darker opacity-60 xl:text-xl 3xl:text-2xl">{{
                    slide.personInfo[1] }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['slide']
}
</script>