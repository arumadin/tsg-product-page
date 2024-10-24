<template>
    <div class="card">
        <NuxtLink :to="{ name: 'product-id', params: { id: card.id } }" class="card__main">
            <div class="card__visual">
                <NuxtImg src="https://img.spoonacular.com/recipes/636732-556x370.jpg" alt="image" class="card__image">
                </NuxtImg>
            </div>
            <div class="card__desc">
                <div class="card__title">{{ card.name }}</div>
                <div class="card__price">{{ card.price }}</div>
            </div>
            <div v-if="card.label.length > 0" class="card__label">{{ card.label }}</div>
        </NuxtLink>
        <div class="btn btn--addcart" @click.prevent="cartStore.add(card.id)">add to cart</div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const props = defineProps(["card"])
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
    }

    &__visual {
        height: 300px;
        width: 100%;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }

    &__desc {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        z-index: 2;
        padding: 10px;
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