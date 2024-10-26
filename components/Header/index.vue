<template>
    <header>
        <div class="header__wrap">
            <NuxtLink to="/" class="logo">
                <h1>The Secret Garden</h1>
            </NuxtLink>
            <NuxtLink to="/cart" class="cart__button">Cart ({{ cartStore.totalProducts }})</NuxtLink>
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
            }
        }
    }

    .cart__button {
        grid-column: 3 / span 1;
        text-align: right;

        @include mobile {
            grid-column: 2 / spam 1
        }
    }

}
</style>