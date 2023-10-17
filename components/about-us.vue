<template>
    <div class="p-4 bg-[#181817] md:p-16 lg:flex lg:items-center lg:gap-x-24 xl:px-52 xl:py-24 3xl:justify-between">
        <div class="flex items-center relative lg:h-[571px] xl:w-3/5 3xl:h-[855px]">
            <img class="w-9/12 lg:h-full xl:w-[78%]" src="../assets/abous-us--1.png" alt="">
            <img class="w-1/2 lg:h-[53%] lg:w-[53%] lg:right-0 lg:top-[27%] xl:-right-4 xl:h-[54%] absolute right-[3%] top-1/4"
                src="../assets/abous-us--2.png" alt="">
        </div>
        <div class="xl:w-2/5">
            <h3
                class="text-3xl font-semibold sm:w-[445px] text-[#fff] font-darker mt-5 lg:text-4xl 2xl:text-5xl 3xl:text-8xl 3xl:w-full">
                Take your social media
                marketing
                to the
                next level</h3>
            <ul class="mt-8 space-y-5">
                <AbousUsLists v-for="(list, index) in lists" :key="index" :list="list" />
            </ul>
            <p
                class="text-[#fff] font-darker text-base font-medium opacity-60 max-w-md mt-6 mb-10 3xl:max-w-full  3xl:text-2xl">
                Leo erat magna feugiat
                pellentesque
                non enim eu donec diam. Proin donec lacus tortor posuere diam lorem massa viverra aliquam. Vitae nulla
                nullam in viverra lectus.</p>
            <button
                class="py-5 px-11 bg-[#fff] rounded-2xl font-bold leading-normal text-2xl font-darker transition-all duration-300 hover:bg-[#dcdada]">ABOUS
                US</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: ["Leo erat magna feugiat non enim", "Leo erat magna feugiat", "Leo erat magna non enim"]
        }
    }
}
</script>