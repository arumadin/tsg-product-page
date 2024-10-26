<template>
    <main>
        <div class="container container--intro">
            <div class="intro" ref="intro">
                <h3>Welcome to</h3>
                <h2>The Secret Garden,</h2>
                <p>Where we believe that good food is the foundation of a happy life.
                    <br>
                    We're committed to bringing you the finest quality products from around the world, all in one
                    convenient
                    location.
                    <br>
                    Discover a world of flavor, freshness, and exceptional service.
                </p>
            </div>
            <div class="category">
                <div class="category__list" ref="categoryList">
                    <CategoryItem v-for="(category, index) in categories" :key="index" :category="category">
                    </CategoryItem>
                </div>
            </div>
        </div>
        <div class="container" ref="productContainer">
            <h3 class="section__title" ref="productTitle">Our Products</h3>
            <div class="container product-list" ref="productList">
                <template v-if="productStore.filteredProduct.length > 0">
                    <Card v-for="(item, index) in productStore.filteredProduct" :key="index" :product="item">
                    </Card>
                </template>
                <template v-else>
                    <Card v-for="(item, index) in productData" :key="index" :product="item">
                    </Card>
                </template>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// get data from Products Store
const productStore = useProductsStore()
productStore.getProducts()
const productData = productStore.allProducts

// Data for categories
let categories = ref([
    {
        title: "Fruit",
        icon: "emojione:tangerine"
    },
    {
        title: "Baking",
        icon: "emojione:bread"
    },
    {
        title: "Biscuit",
        icon: "emojione:cookie"
    },
    {
        title: "Granola",
        icon: "emojione:honey-pot"
    },
    {
        title: "Show All",
        icon: "emojione:strawberry"
    },
    {
        title: "Snack",
        icon: "emojione:popcorn"
    },
    {
        title: "Tea",
        icon: "emojione:teacup-without-handle"
    },
    {
        title: "Yogurt",
        icon: "emojione:glass-of-milk"
    }
])

// Animation
const productList = ref()
const intro = ref()
const categoryList = ref()
const productTitle = ref()
const productContainer = ref()

onMounted(() => {

    productStore.resetFilter()

    // start animation

    gsap.registerPlugin(ScrollTrigger);

    const introSection = () => {
        const tl = gsap.timeline()
        tl.fromTo(intro.value.children, {
            autoAlpha: 0,
            y: '100',
        }, {
            delay: 0.5,
            duration: 1,
            stagger: 0.25,
            autoAlpha: 1,
            y: 0
        })

        tl.fromTo(categoryList.value.children, {
            autoAlpha: 0,
            y: '100',
        }, {
            delay: 0.5,
            duration: 1,
            stagger: 0.25,
            autoAlpha: 1,
            y: 0,
        })

        return tl

    }

    const categorySection = () => {

        let mm = gsap.matchMedia();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".category",
                start: "top top+=500",
                end: "+=600",
                scrub: true,
                // markers: true,
            }
        })

        mm.add("(min-width: 769px)", () => {
            tl.to(categoryList.value.children, {
                y: 400,
                stagger: 0.25,
                duration: 1
            })

            tl.to(intro.value, {
                y: -100,
                duration: 1,
                paddingTop: 100,
                paddingBottom: 50,
            }, "<")

            tl.to(intro.value.children, {
                y: -50,
                duration: 1,
                stagger: 0.1
            }, "<")


            tl.to(productContainer.value, {
                y: -200,
                duration: 1,
            }, "<")

            tl.fromTo(productTitle.value, {
                y: 0,
                autoAlpha: 0
            },{
                y: -180,
                duration: 1,
                autoAlpha: 1
            }, ">-30%")

        })


        mm.add("(max-width: 768px)", () => {

            tl.to(categoryList.value, {
                y: 40,
                duration: 1,
                scrollTrigger: {
                    trigger: ".category",
                    start: "top top+=500",
                    end: "+=60",
                    scrub: true,
                }
            })

            tl.fromTo(productTitle.value, {
                y: 0,
                autoAlpha: 0,
            }, {
                y: -220,
                duration: 1,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: ".category",
                    start: "top top+=500",
                    end: "+=200",
                    scrub: true,
                }
            }, ">-30%")
        })

        return tl
    }

    const productSection = () => {

        const tl = gsap.timeline()

        tl.from(productList.value.children, {
            delay: 0.5,
            duration: 1,
            y: '100',
            autoAlpha: 0,
            stagger: 0.25,
        })

        return tl
    }

    const master = gsap.timeline();

    master
        .add(introSection())
        .add(categorySection())
        .add(productSection(), ">1")

})
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 30px 30px;
    padding: 0 20px;

    @include nonDesktop {
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        margin: 0;
    }

    @include mobile {
        gap: 30px 20px;
    }
}

.category {

    @include mobile {
        height: 200px;
    }

    &__list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 50px;
        justify-items: center;

        @include mobile {
            display: flex;
            justify-content: center;
            gap: 10px 10px;
            margin-bottom: 0;

            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-template-rows: repeat(3, 1fr);
        }
    }
}

.container--intro {
    height: 960px;

    @include mobile {
        height: calc(460px + 200px)
    }
}

.intro {
    max-width: 540px;
    margin: 0 auto;
    text-align: center;
    padding: 130px 0;

    h3 {
        margin: 0;
    }

    h2 {
        font-size: 28px;
        margin-top: 0;
    }

    p {

        @include mobile {
            width: 80%;
            margin: 0 auto;
        }
    }

    @include mobile {
        max-width: 100%;
        height: 460px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
    }
}

.section__title {
    width: 100%;
    font-size: 60px;
    text-align: center;
    padding-top: 100px;
    margin: 0;

    @include nonDesktop {
        font-size: 30px;
    }

    @include mobile {
        padding-top: 0;
    }
}
</style>