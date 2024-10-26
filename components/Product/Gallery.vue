<template>
    <div class="product__gallery" >
        <div class="swiper_wrapper" ref="mainSlider">
            <Swiper v-bind="SwiperConfig" :thumbs="{ swiper: thumbsSwiper }" @swiper="setSwiper" class="slider__main">
                <SwiperSlide v-for="(slide, idx) in images" :key="idx">
                    <img :src="slide.imgUrl" />
                </SwiperSlide>
            </Swiper>
            <div class="swiper_controls">
                <div class="swiper_controls_prev"></div>
                <div class="swiper_controls_next"></div>
            </div>
        </div>
        <div class="slider__nav" ref="thumbSlider">
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ref for animation
const mainSlider = ref()
const thumbSlider = ref()

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

// animation
onMounted(() => {
    
    // gsap.registerPlugin(ScrollTrigger);
    // let mm = gsap.matchMedia();

    // mm.add("(min-width: 1281px)", () => {

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".product__gallery",
    //             start: "top top",
    //             end: "200 top",
    //             scrub: true,
    //             markers: true,
    //         }
    //     })
    
    //     const speed = 0.1;
    //     const movement = mainSlider.value.offsetHeight * speed * -1
    //     tl.to(mainSlider.value, {
    //         y: movement,
    //         ease: "none",
    //         height: "50%"
    //     }, 0)
    
    //     tl.to(thumbSlider.value, {
    //         y: movement,
    //         ease: "none",
    //     }, "<")
    // })
})
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

    // &_prev {
    //     // cursor: url(assets/btn-left.png) 64 64, pointer;
    //     cursor: pointer;
    // }

    // &_next {
    //     // cursor: url(assets/btn-right.png) 64 64, pointer;
    //     cursor: pointer;
    // }
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