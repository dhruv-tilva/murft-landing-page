<template>
    <div class="p-4 flex flex-col gap-y-5 md:p-16 xl:px-52 xl:py-20 xl:gap-y-16 bg-[#F8F3EC]">
        <div>
            <h3 class="text-center text-[#181817] font-darker font-semibold text-2xl mb-4 sm:text-4xl 3xl:text-7xl">What we
                provide</h3>
            <p
                class="text-[#6E6E6E] text-center font-darker text-sm font-medium sm:text-base xl:max-w-lg xl:mx-auto 3xl:text-xl">
                Lorem
                ipsum dolor
                sit amet,
                consectetur
                adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.</p>
        </div>
        <div class="flex flex-col gap-y-4 sm:flex-row sm:gap-5 sm:flex-wrap sm:justify-center xl:gap-7">
            <card v-for="(item, index) in cardsList" :cardsList="item" :key="index" />
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        cardsList() {
            return [
                {
                    url: "/_nuxt/assets/cards--1.svg",
                    title: "Social <br> advertising",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt.",
                    link: "Learn More"
                },
                {
                    url: "/_nuxt/assets/cards--2.svg",
                    title: "Partnership <br> Management",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt.",
                    link: "Learn More"
                },
                {
                    url: "/_nuxt/assets/cards--3.svg",
                    title: "Content <br> Creations",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt.",
                    link: "Learn More"
                }
            ]
        }
    }
}
</script>