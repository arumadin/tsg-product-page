<template>
    <main>
        <div>Banner</div>
        <div>category</div>
        <div>product listing</div>
        <div v-if="products.length > 0" class="container product-list">
            <Card v-for="(item, index) in products" :key="index" :card="item">
            </Card>
        </div>
    </main>
</template>

<script setup lang="ts">
import data from '../data'

const products = ref(data)
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(minmax(1,3), 1fr);
    gap: 80px 20px;

    @include nonDesktop {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        grid-template-rows: auto;
    }
}

</style>