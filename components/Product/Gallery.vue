<template>
    <div class="product__gallery">
        <div class="swiper_wrapper">
            <Swiper v-bind="SwiperConfig" :thumbs="{ swiper: thumbsSwiper }" @swiper="setSwiper" class="slider__main">
                <SwiperSlide v-for="(slide, idx) in images" :key="idx">
                    <img :src="slide.imgUrl" />
                </SwiperSlide>
            </Swiper>
            <div class="swiper_controls">
                <div class="swiper_controls_prev">
                </div>
                <div class="swiper_controls_next"></div>
            </div>
        </div>
        <div class="slider__nav">
            <Swiper v-bind="SwiperThumbsConfig" @swiper="setThumbsSwiper">
                <SwiperSlide v-for="(slide, idx) in images" :key="idx">
                    <img :src="slide.imgUrl" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import SwiperTypes from 'swiper'

// set up slider image
const props = defineProps(["images"])
const mainSwiper = ref<SwiperTypes | null>(null);
const thumbsSwiper = ref<SwiperTypes | null>(null);

const setSwiper = (swiper: SwiperTypes | null) => {
    mainSwiper.value = swiper;
};
const setThumbsSwiper = (swiper: SwiperTypes | null) => {
    thumbsSwiper.value = swiper;
};

const SwiperConfig = {
    modules: [
        SwiperNavigation,
        SwiperThumbs,
        SwiperController,
    ],
    loop: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper_controls_next',
        prevEl: '.swiper_controls_prev',
    },
};
const SwiperThumbsConfig = {
    modules: [SwiperNavigation, SwiperThumbs, SwiperController],
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: false,
    followFinger: false,
};

</script>

<style lang="scss" scoped>
.swiper_wrapper {
    position: relative;

    .slider__main {
        height: 100%;
    }
}

.swiper_controls {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50px;
    z-index: 10;
    cursor: pointer;

    &_prev,
    &_next {
        width: 50px;
        height: 50px;
        mask-size: cover;
        background-color: $pale-yellow;
        transition: all 0.3s ease-in;


        &:hover {
            background-color: $yellow;
        }
    }

    &_prev {
        position: absolute;
        left: 10px;
        transform: translate(0, -50%);
        mask-image: url("@/assets/TablerCircleArrowLeft.svg");
    }

    &_next {
        position: absolute;
        right: 10px;
        transform: translate(0, -50%);
        mask-image: url("@/assets/TablerCircleArrowRight.svg");
    }
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-wrapper {
    min-width: 100vh;
    width: 100vh;
    transition-timing-function: ease-in;
}

.slider__nav {
    margin: 20px;

    .swiper-slide {
        height: 100%;
        opacity: 0.3;
        cursor: pointer;
        padding: 5px;
        box-sizing: border-box;
    }

    .swiper-slide-thumb-active {
        opacity: 1;
        border: solid 3px $pink;
    }
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>