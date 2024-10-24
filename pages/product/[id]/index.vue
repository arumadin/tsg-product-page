<template>
    <div class="container">
        <div class="product">
            <div class="product__gallery">
                <div class="swiper_wrapper">
                    <Swiper :height="300" v-bind="SwiperConfig" :thumbs="{ swiper: thumbsSwiper }" @swiper="setSwiper"
                        class="main-slider">
                        <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                            <img :src="slide" />
                        </SwiperSlide>
                    </Swiper>
                    <div class="swiper_controls">
                        <div class="swiper_controls_prev"></div>
                        <div class="swiper_controls_next"></div>
                    </div>
                </div>
                <Swiper :height="300" v-bind="SwiperThumbsConfig" @swiper="setThumbsSwiper" class="thumbs">
                    <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                        <img :src="slide" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="product__info">
                product page {{ $route.params.id }}
                <div class="product__label">label</div>
                <div class="product__title">Product Title</div>
                <div class="product__price">Price</div>
                <div class="product__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio tempore
                    sunt ex temporibus quae ab dolorem, est aspernatur nesciunt!</div>
                <div class="product__variant">variant</div>
                <div class="product__quantity">qty</div>
                <button class="btn--addcart">add to cart</button>
                <div class="product__more-info">
                    more info, ingredients, shipping and returns
                </div>
            </div>
        </div>
        <div class="product__recommendations">
            <p>you might also like...</p>
            <div class="product__wrap">
                <Card v-for="(item, index) in products.slice(0, 3)" :key="index" :card="item">
                </Card>
                <div class="discover-">
                    Discover more
                </div>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import SwiperTypes from 'swiper'
import data from '@/data'
const products = ref(data)

const slides = ref([
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
]);

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
    slidesPerView: slides.value.length,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: false,
    followFinger: false,
};
</script>

<style lang="scss" scoped>
.product {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto 1fr;
    gap: 20px 50px;

    @include nonDesktop {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-template-rows: 1fr auto;
    }

    &__wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @include nonDesktop {
            grid-template-columns: repeat(3, 1fr);

            div:nth-child(n+4) {
                display: none;
            }

        }

        @include mobile {
            grid-template-columns: repeat(2, 1fr);

            div:nth-child(n+3) {
                display: none;

            }
        }
    }
}

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