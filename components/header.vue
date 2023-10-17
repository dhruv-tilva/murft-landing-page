
import { SocialIcons } from '#build/components';
<template>
    <header
        class="flex items-center justify-between z-[100] px-4 py-2 bg-[#F8F3EC] w-full fixed top-0 md:px-4 lg:px-16 xl:px-32">
        <ul class="hidden md:flex items-center gap-x-4 lg:gap-x-10 w-1/3">
            <li v-for="(navlink, index) in navLinks" :key="index"><a
                    class="text-[#6E6E6E] font-darker text-sm font-medium transition-all duration-150 hover:text-[#F6D88C]"
                    href="">{{ navlink }}</a>
            </li>
        </ul>
        <logo class="w-1/5 flex items-center md:justify-center" />
        <SocialIcons :borderColor="borderColor" class="hidden md:flex w-1/3 justify-end" />
        <div class="bg-[#F8F3EC] h-full md:hidden">
            <i @click="isToggle = !isToggle" :class="{ 'fa-bars': isToggle, 'fa-xmark': !isToggle }"
                class="fa-solid text-3xl z-10"></i>

            <ul :class="{ 'w-0': isToggle, 'w-full': !isToggle }"
                class="fixed top-[12%] -right-10 h-full px-5 bg-[#F8F3EC] py-12 transition-all duration-300 space-y-12">
                <li v-for="(navlink, index) in navLinks" :key="index"><a
                        class="text-[#6E6E6E] font-darker text-xl font-medium" href="">{{ navlink }}</a></li>
            </ul>
        </div>

    </header>
    <div class="w-full flex justify-center bg-[#F8F3EC]">
        <div class="w-11/12 mx-auto h-[1px] bg-[#6E6E6E] bg-opacity-30 mt-20 z-50"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isToggle: true,
            navLinks: ["About us", "Service", "Blog", "Contact"],
            borderColor: "border-[#181817]"
        }
    }
}
</script>