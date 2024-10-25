<template>
    <div class="card">
        <NuxtLink :to="`/product/${product.id}`" class="card__main">
            <div class="card__visual">
                <NuxtImg
                    :src="product.images[0].imgUrl"
                    alt="image"
                    class="card__image"
                >
                </NuxtImg>
            </div>
            <div class="card__desc">
                <div class="card__title">{{ product.title }}</div>
                <div class="card__price">{{ product.price }}</div>
            </div>
            <!-- <div v-if="card.label.length > 0" class="card__label">{{ card.label }}</div> -->
        </NuxtLink>
        <div class="btn btn--addcart" @click.prevent="cartStore.add(product.id)">add to cart</div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const props = defineProps(["product"])
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.card {
    position: relative;

    .btn--addcart {
        position: absolute;
        z-index: -1;
        bottom: -50px;
        transition: all 0.3s ease-in;
        width: calc(100% - 40px);
        margin: 0 20px;
        box-sizing: border-box;
        opacity: 0;

        @include nonDesktop {
            display: none;
        }
    }

    &:hover {
        .btn--addcart {
            bottom: -40px;
            z-index: 1;
            opacity: 1;
        }

    }

    &__main {
        text-decoration: none;  
        display: flex;
        flex-direction: column;
        background-color: gray;
        min-height: 400px;
        height: 100%;
    }

    &__image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    &__visual {
        position: relative;
        flex-shrink: 0;
        width: 100%;
        height: 0;
        padding-top: 100%;
    }

    &__desc {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        z-index: 2;
        padding: 10px 10px 30px;
    }

    &__title {
        flex: 0 1 75%;
    }

    &__price {
        flex-grow: 1;
        text-align: right;
    }

    &__label {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: wheat;
        border-radius: 20px;
        padding: 5px 10px
    }
}
</style>