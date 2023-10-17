<template>
    <div class="p-4 md:p-16 lg:flex lg:items-center lg:pt-24 lg:pb-36 lg:gap-x-32 xl:px-52 3xl:justify-between">
        <div class="flex items-center gap-x-4 bg-[#fff]">
            <div class="w-1 h-28 lg:h-32 3xl:h-96 bg-[#F6D88C]">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="6" height="147" viewBox="0 0 6 147" fill="none">
                    <path d="M3 0V146.5" stroke="#F6D88C" stroke-width="5" />
                </svg> -->
            </div>
            <div>
                <h3 class="text-[#181817] text-lg font-semibold font-darker 3xl:text-7xl">Trusted by over <span
                        class="text-[#181817] text-lg font-semibold font-darker block 3xl:text-7xl 3xl:leading-[1.25]">10k
                        clients &
                        brands</span></h3>
                <paragraph class="mt-1 3xl:text-4xl 3xl:max-w-[43rem] 3xl:leading-[3rem] 3xl:mt-5">Lorem ipsum dolor sit
                    amet, solor
                    ut adipiscing elit.</paragraph>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-3 mt-6 sm:grid-cols-3 3xl:gap-6">
            <CompanyBox v-for="(item, index) in compURL" :key="index" :company-image="item" />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        compURL() {
            return ["/_nuxt/assets/google.png", "/_nuxt/assets/slack.png", "/_nuxt/assets/logoipsum(1).png", "/_nuxt/assets/netflix.png", "/_nuxt/assets/intercom.png", "/_nuxt/assets/logoipsum.png",]
        }
    },
    mounted() {
        const person = {
            name: "Dhruv",
            age: 21
        }

        // console.log(JSON.stringify(person));
    }
}
</script>