<template>
    <div
        class="py-6 px-8 border border-[#2E4D59] border-opacity-10 flex items-center justify-center hover:shadow-md cursor-pointer 3xl:py-14 3xl:px-16">
        <img :src="companyImage" alt="">
    </div>
</template>

<script>
export default {
    props: ['companyImage'],
}
</script>