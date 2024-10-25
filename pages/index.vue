<template>
    <main>
        <div>Banner</div>
        <Category></Category>
        <div class="container">
            <h3>Our Products</h3>
            <div class="container product-list">
                <Card v-for="(item, index) in data" :key="index" :product="item">
                </Card>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
// import data1 from '../data'
import { type ProductResponse } from '~/types/types';
// import { useCartStore } from '~/stores/cart';
import { useProductsStore } from '~/stores/products';
// const cartStore = useCartStore()
const productStore = useProductsStore()

// cartStore.getProducts()
productStore.getProducts()

const data = productStore.allProducts
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    gap: 20px 30px;

    @include nonDesktop {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }

    @include mobile {
        gap: 30px 20px;
    }
}
</style>