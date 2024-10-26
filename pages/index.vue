<template>
    <main>
        <div>Banner</div>
        <Category></Category>
        <div class="container">
            <h3>Our Products</h3>
            <div class="container product-list">
                <template v-if="productStore.filteredProduct.length > 0">
                    <Card v-for="(item, index) in productStore.filteredProduct" :key="index" :product="item">
                    </Card>
                </template>
                <template v-else>
                    <Card v-for="(item, index) in data" :key="index" :product="item">
                    </Card>
                </template>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
const productStore = useProductsStore()
productStore.getProducts()
const data = productStore.allProducts
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 30px 30px;
    padding: 0 20px;

    @include nonDesktop {
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        margin: 0;
    }

    @include mobile {
        gap: 30px 20px;
    }
}
</style>