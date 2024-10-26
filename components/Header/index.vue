<template>
    <header>
        <div class="header__wrap">
            <NuxtLink to="/" class="logo">
                <h1>The Secret Garden</h1>
            </NuxtLink>
            <NuxtLink to="/cart" class="cart__button link--text">Cart ({{ cartStore.totalProducts }})</NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    background-color: $bg-white;

    .header__wrap {
        display: grid;
        width: 100%;
        padding: 20px 20px 0;
        margin-bottom: 20px;
        grid-template-columns: 100px auto 100px;
        gap: 0 20px;
        align-items: center;
        box-sizing: border-box;

        @include mobile {
            grid-template-columns: auto 100px;
        }
    }

    .logo {
        grid-column: 2 / span 1;

        @include mobile {
            grid-column: 1 / span 1
        }
        h1 {
            margin: 0 auto;
            text-align: center;
            width: fit-content;

            @include mobile {
                font-size: 20px;
                text-align: left;
                margin: 0
            }
        }
    }

    .cart__button {
        grid-column: 3 / span 1;
        text-align: right;
        padding: 20px 0;
        width: fit-content;

        @include mobile {
            grid-column: 2 / span 1;
            width: 100%;
            text-align: right;
        }
    }

}
</style>