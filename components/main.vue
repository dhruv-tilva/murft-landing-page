<template>
    <main class="p-4 bg-[#F8F3EC] space-y-4 md:px-16 lg:px-16 lg:flex lg:items-center lg:gap-x-32 xl:px-52">
        <div class="lg:w-[49%]">
            <h1
                class="text-3xl font-semibold leading-9 text-[#181817] font-darker max-w-sm md:text-[40px] md:leading-none xl:text-[49px] xl:leading-[65px] 3xl:text-8xl 3xl:leading-[120px] 3xl:max-w-4xl">
                Increase your performance on social media
            </h1>

            <Paragraph class="mt-5 xl:text-xl 3xl:text-4xl 3xl:max-w-[43rem] 3xl:leading-[3rem]">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. In urna, non
                nisl tincidunt ut elementum turpis.</Paragraph>
            <div class="mt-10 flex flex-col gap-y-6 sm:flex-row sm:gap-y-0 sm:gap-x-9">
                <GetStartedBtn class="mb:w-[70%] md:w-auto" />
                <div class="flex items-center">
                    <img class="w-28 3xl:w-48" src="../assets/review.png" alt="" />
                    <div>
                        <span
                            class="block text-[#181817] font-darker text-xs font-semibold leading-normal opacity-40 3xl:text-xl">RATING</span>
                        <span class="block text-[#181817] text-lg font-semibold leading-normal 3xl:text-2xl">5.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:gap-x-4 lg:w-[49%]">
            <div class="w-full sm:w-[49%]">
                <img class="w-full h-full" src="../assets/main-1.png" alt="" />
            </div>
            <div class="w-full sm:w-[49%]">
                <img class="w-full h-full" src="../assets/main-2.png" alt="" />
            </div>
        </div>
    </main>
</template>
