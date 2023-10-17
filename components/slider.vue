<template>
    <div
        class="p-4 flex flex-col gap-y-5 md:flex-row md:items-center md:justify-between md:p-16 xl:px-64 xl:pt-20 xl:pb-40">
        <div class="md:w-[48%] space-x-1">
            <carousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
                <Slide v-for="(slide, index) in slides" :key="index">
                    <Messages :slide="slide" />
                </Slide>

                <template #addons>
                    <!-- <Navigation /> -->
                    <Pagination />
                </template>
            </carousel>
        </div>
        <div class="md:w-[49%] md:h-[490px] 3xl:w-[800px] 3xl:h-[894px]">
            <img class="w-full h-full" src="../assets/slider--1.png" alt="">
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    components: { Carousel, Slide, },
    data() {
        return {
            slides: [
                {
                    rating: "4.00",
                    starImg: "/_nuxt/assets/star.svg",
                    title: "”Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum st turpis.“",
                    person: "/_nuxt/assets/slider.png",
                    personInfo: ["Joe Elia", "User Interface Design"]
                },
                {
                    rating: "4.00",
                    starImg: "/_nuxt/assets/star.svg",
                    title: "”Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum st turpis.“",
                    person: "/_nuxt/assets/slider.png",
                    personInfo: ["Joe Elia", "User Interface Design"]
                },
                {
                    rating: "4.00",
                    starImg: "/_nuxt/assets/star.svg",
                    title: "”Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum st turpis.“",
                    person: "/_nuxt/assets/slider.png",
                    personInfo: ["Joe Elia", "User Interface Design"]
                }
            ]
        }
    }
}
</script> 

