<template>
    <div class="relative">
        <img class="w-full" src="../assets/video.png" alt="">
        <PauseIcon
            class="cursor-pointer open-model absolute top-[45%] left-[45%] w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 lg:left-[46%] xl:left-[47%] 2xl:left-[48%]" />
    </div>

    <div class="modal">
        <div class="background"></div>
        <div class="box">
            <div class="close">✖</div>
            <h6>Video</h6>
            <div class="content">
                <div class="responsive-video">
                    <iframe id="video" src="https://7span-product.b-cdn.net/59a18bf3-cbc2-43a2-a439-f74e15df00ef.mp4"
                        frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.modal {
    display: none;
}

.modal .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal .box {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 600px;
    background: #fff;
    border-radius: 5px 5px 0 0;
}

.modal .box h6 {
    margin: 0;
    padding: 10px 20px;
    color: #fff;
    font-size: inherit;
    font-weight: normal;
    background: gray;
    border-radius: 5px 5px 0 0;
}

.modal .box .close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
    cursor: pointer;
}

.modal .box .close:hover {
    opacity: 0.5;
}

.responsive-video {
    position: relative;
    padding-bottom: 52.15%;
    padding-top: 25px;
    height: 0;
}

.responsive-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<script>

export default {
    mounted() {
        $('.open-model').click(function () {
            jQuery('.modal').fadeIn();
        });

        // Close Modal
        $('.modal .close').click(function () {
            $('.modal').fadeOut();
        });
    }
}
</script>
