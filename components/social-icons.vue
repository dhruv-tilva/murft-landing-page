<template>
    <div class="flex items-center gap-x-4">
        <i class="fa-brands fa-facebook-f flex items-center justify-center border border-opacity-10 rounded-full h-10 w-10 text-inherit cursor-pointer"
            :class="borderColor"></i>
        <i class="fa-brands fa-dribbble flex items-center justify-center border border-opacity-10 rounded-full h-10 w-10 text-inherit cursor-pointer"
            :class="borderColor"></i>
        <i class="fa-brands fa-instagram flex items-center justify-center border border-opacity-10 rounded-full h-10 w-10 text-inherit cursor-pointer"
            :class="borderColor"></i>
    </div>
</template>

<script>
export default {
    props: ['borderColor']
}
</script>