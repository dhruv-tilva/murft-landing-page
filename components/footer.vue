<template>
    <footer class="bg-secondary py-4 lg:py-8">
        <div class="px-4 md:px-16 xl:px-72">
            <Logo class="text-white-color text-center" />
            <p class="text-sm text-[#fff] opacity-70 font-normal font-darker mt-1 text-center md:w-[350px] mx-auto">Lorem
                ipsum
                dolor
                sit amet
                elit, sed do
                tempor solor ut dolore magna</p>
            <SocialIcons :borderColor="borderColor" class="text-white-color mt-6 md:justify-center" />
            <h4 class="mt-6 text-white-color text-2xl font-semibold font-darker text-center">Subscribe to our Newsletter
            </h4>
            <p class="text-base text-[#fff] opacity-70 font-normal font-darker mt-3 text-center">Lorem ipsum dolor sit amet,
                consectetur
                adipiscing elit.</p>
            <FooterForm />
            <div class="space-y-4 mt-6 md:flex md:space-y-0 md:gap-x-5 xl:gap-x-32 xl:mt-0">
                <FooterLinks v-for="(link, index) in footerLinks" :key="index" :footerLinks="link" />
            </div>
        </div>
        <svg class="inline-block my-5 w-full xl:mt-14" xmlns="http://www.w3.org/2000/svg" width="1500" height="2"
            viewBox="0 0 1500 2" fill="none">
            <path opacity="0.1" d="M0 1H1597.5" stroke="#F3EFE4" stroke-width="2" />
        </svg>
        <div class="px-4 space-y-2 md:space-y-0 md:flex md:items-center md:justify-between md:px-16 xl:px-72">
            <CopyRights>©Marft 2021. All rights reserved.</CopyRights>
            <CopyRights class="inline-block">Privacy Policy <svg class="inline-block mx-2"
                    xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                    <path opacity="0.1" d="M1 0L0.999999 16" stroke="#F3EFE4" />
                </svg> Terms of Conditions</CopyRights>
        </div>
    </footer>
</template>

<script>

export default {
    data() {
        return {
            borderColor: "border-[#fff]",
            footerLinks: [
                {
                    title: "DM us  on:",
                    links: ["info@marft.com"]
                },
                {
                    title: "Call us on:",
                    links: ["(+1) 0139 2092 2033", "(+1) 0392 5938 000"]
                },
                {
                    title: "Find us:",
                    links: ["767 5th Street,", "21st Floor, New York,", "USA"]
                }
            ]
        }
    }
}
</script>