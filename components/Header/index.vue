<template>
    <header>
        <div class="header__wrap">
            <NuxtLink to="/">
                <h1>The Secret Garden</h1>
            </NuxtLink>
            <NuxtLink to="/cart">Cart ({{ cartStore.totalProducts }})</NuxtLink>
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

    .header__wrap {
        display: flex;
        justify-content: center;
        padding: 20px 20px 0;
        margin-bottom: 20px;
    }
}
</style>