<template>
    <li class="flex items-center gap-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12.0002" cy="11.9994" r="12" fill="#F6D88C" />
            <path d="M8.00018 12.7889L10.154 14.9994L16.0002 8.99939" stroke="#181817" stroke-width="1.4" />
        </svg>
        <span class="text-[#fff] text-base font-semibold font-darker 3xl:text-3xl">{{ list }}</span>
    </li>
</template>

<script>
export default {
    props: ['list']
}
</script>