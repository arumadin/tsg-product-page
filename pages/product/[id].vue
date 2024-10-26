<template>
    <div class="product">
        <ProductGallery :images="data?.images"></ProductGallery>
        <div class="product__info" ref="productInfo">
            <div v-if="data?.label.length" class="product__label">{{ data.label }}</div>
            <h2 class="product__title"> {{ data?.title }}</h2>
            <div class="product__price">${{ data?.price }}</div>
            <div class="product__desc">
                <p>{{ data?.description }}</p>
            </div>
            <div class="product__options" v-if="data?.options.length">
                <p>Options:</p>
                <div class="product__options-radio">
                    <!-- <button v-for="option in data?.options">{{ option }}</button> -->
                    <div class="radio-button" v-for="option in data?.options">
                        <label :for="option">{{ option }}
                            <input type="radio" v-model="productOption" :value="option" :id="option" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="product__quantity">
                <button class="btn--icon bg--pale-yellow" @click="handleMinus">
                    <Icon name="gravity-ui:minus" />
                </button>
                <div class="cart__quantity">
                    <p>{{ quantity }}</p>
                </div>
                <button class="btn--icon bg--pale-yellow" @click="quantity++">
                    <Icon name="gravity-ui:plus" />
                </button>
            </div>
            <button class="btn--addcart" @click.prevent="cartStore.add(data?.id, quantity, productOption); quantity = 1; productOption = data?.options[0]">Add to Cart</button>
            <!-- <div class="product__more-info">
                more info, ingredients, shipping and returns.
                <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore vitae debitis sunt sapiente, rerum maxime, eum vero provident odit velit reiciendis cupiditate maiores sed? Alias quam odio culpa id error sint sunt debitis dolor quibusdam, ipsum nihil ea itaque, aliquam atque ad inventore, in temporibus dignissimos dicta doloremque exercitationem.
                <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione alias enim dolore vero est? Maiores, recusandae illum magni autem aliquid cumque iusto quaerat nihil voluptatibus facere laudantium sequi laboriosam eum dicta quos dolore culpa inventore enim non facilis rerum. Iure officiis quae, veniam fugiat nostrum deserunt pariatur minima nulla itaque.
            </div> -->
        </div>
    </div>
    <ProductRecommendation :products="products"></ProductRecommendation>

</template>

<script setup lang="ts">
import { type ProductResponse, type Product } from '~/types/types';
import { useProductsStore } from '~/stores/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore()

const productStore = useProductsStore()
productStore.getProducts()
const products = productStore.allProducts
const { id } = useRoute().params
const { data, error } = await useFetch<Product>(`https://my-json-server.typicode.com/arumadin/tsg-product-db/products/${id}`)

const quantity = ref(1)
const productOption = ref(data.value?.options[0])

const handleMinus = () => {
    if (quantity.value === 1) {
        return
    }

    quantity.value--
}

// Animation
const productInfo = ref()
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1281px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".product",
                start: "top-=100 top",
                end: "200 top",
                scrub: true,
            }
        })
    
        tl.to(productInfo.value, {
            y: 200,
            ease: "none",
        }, 0)
    })
})

</script>

<style lang="scss" scoped>
.product {
    display: grid;
    grid-template-columns: 55% 45%;
    grid-template-rows: auto;
    gap: 20px 100px;
    width: 100%;

    @include nonDesktop {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-template-rows: 1fr auto;
        height: auto
    }

    &__info {
        width: 70%;
        padding-top: 50px;
        height: calc(100% - 250px);
        overflow: hidden;

        @include nonDesktop {
            max-width: 100%;
            width: 60%;
            margin: 40px 20px;
            padding-top: 0;
            height: auto;
        }

        @include mobile {
            width: calc(100% - 40px);
            margin: 20px;
        }
    }

    &__label {
        background-color: $yellow;
        border-radius: 20px;
        padding: 5px 10px;
        width: fit-content;
    }

    &__title {
        margin: 10px 0;
    }

    &__price {
        font-size: 18px;
        margin-bottom: 20px;
    }

    &__options {
        border-bottom: solid 1px $yellow;
        padding: 10px 0;
        width: 100%;
        padding-bottom: 10px;

        p {
            margin-right: 10px;
        }

        &-radio {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
    }

    &__quantity {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px 0;
        border-bottom: solid 1px $yellow;
        margin-bottom: 30px;

        p {
            margin-bottom: 0;
            width: 40px;
            text-align: center;
        }
    }

    &__more-info {
        margin-top: 60px;
    }
}
</style>