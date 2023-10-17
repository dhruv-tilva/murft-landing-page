<template>
    <div class="p-4 lg:px-16 lg:py-12 xl:px-52 xl:py-40 space-y-8 md:p-16">
        <div>
            <h4 class="text-secondary text-2xl font-semibold font-darker not-italic md:text-3xl xl:text-5xl">Read our blogs
            </h4>
            <div class="mt-4 space-y-3 md:space-y-0 md:flex md:items-end md:justify-between lg:mt-0">
                <p class="text-[#6E6E6E] font-darker text-sm font-medium md:w-[353px] xl:text-base xl:w-[450px]">Lorem ipsum
                    dolor sit amet,
                    consectetur
                    adipiscing
                    elit. In urna, non nisl tincidunt ut elementum turpis.</p>
                <button
                    class="py-5 pl-8 pr-8 text-primary text-lg font-bold font-darker bg-secondary rounded-2xl transition-all duration-200 hover:bg-primary hover:text-secondary">READ
                    ALL
                    BLOGS</button>
            </div>
        </div>
        <div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-8 xl:gap-16">
            <Blog v-for="(blog, index) in blogDetails" :key="index" :blogDetails="blog" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogDetails: [
                {
                    url: "/_nuxt/assets/blog--1.png",
                    date: "April 30, 2020",
                    title: "How to collaborate with companies",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.",
                    link: "READ MORE"
                },
                {
                    url: "/_nuxt/assets/blog--2.png",
                    date: "April 30, 2020",
                    title: "About social media advertising",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis.",
                    link: "READ MORE"
                }
            ]
        }
    }
}
</script>