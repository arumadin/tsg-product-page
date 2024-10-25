<template>
    <div class="product__gallery">
        <div class="swiper_wrapper">
            <Swiper :height="300" v-bind="SwiperConfig" :thumbs="{ swiper: thumbsSwiper }" @swiper="setSwiper"
                class="main-slider">
                <SwiperSlide v-for="(slide, idx) in images" :key="idx">
                    <img :src="slide.imgUrl" />
                </SwiperSlide>
            </Swiper>
            <div class="swiper_controls">
                <div class="swiper_controls_prev"></div>
                <div class="swiper_controls_next"></div>
            </div>
        </div>
        <Swiper :height="300" v-bind="SwiperThumbsConfig" @swiper="setThumbsSwiper" class="thumbs">
            <SwiperSlide v-for="(slide, idx) in images" :key="idx">
                <img :src="slide.imgUrl" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup lang="ts">

import SwiperTypes from 'swiper'
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
}

.swiper_controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: yellow;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    z-index: 10;
    background-color: transparent;

    div {
        flex-grow: 1;
    }

    &_prev {
        // cursor: url(assets/btn-left.png) 64 64, pointer;
        cursor: pointer;
    }

    &_next {
        // cursor: url(assets/btn-right.png) 64 64, pointer;
        cursor: pointer;
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

.thumbs {
    margin-top: 10px;

    .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.3;
        cursor: pointer;
    }

    .swiper-slide-thumb-active {
        opacity: 1;
    }
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>