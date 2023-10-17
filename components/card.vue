<template>
    <div class="bg-[#EAE4DC] p-6 w-full sm:w-[48%] xl:w-[31%]">
        <img class="w-12 h-12 3xl:text-4xl" :src="cardsList.url" alt="">
        <h4 ref="title" class="text-[#181817] font-darker text-xl font-semibold mt-6 xl:text-3xl 3xl:text-4xl">
        </h4>
        <p class="text-[#6E6E6E] text-base font-medium mt-3 mb-7 3xl:text-xl">{{ cardsList.subTitle }}</p>
        <a href=""
            class="text-secondary font-darker font-bold uppercase underline text-sm 3xl:text-2xl transition-all duration-200 hover:text-primary">{{
                cardsList.link
            }}</a>
    </div>
</template>

<script>
export default {
    props: ['cardsList'],
    mounted() {
        this.$refs.title.innerHTML = this.cardsList.title
    }
}
</script>

