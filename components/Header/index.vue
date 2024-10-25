<template>
    <header>
        <NuxtLink to="/">
            <h1>The Secret Garden</h1>
        </NuxtLink>
        <NuxtLink to="/cart">Cart ({{ cartStore.totalProducts }})</NuxtLink>
    </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-bottom: 20px;
}
</style>