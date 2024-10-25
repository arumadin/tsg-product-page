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

// const products = ref(data1)

const { data, error } = await useFetch<ProductResponse>('https://my-json-server.typicode.com/arumadin/tsg-product-db/products')
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    gap: 80px 20px;

    @include nonDesktop {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        grid-template-rows: auto;
    }
}
</style>