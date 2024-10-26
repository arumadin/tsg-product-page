<template>
    <div class="category-item" @click="productStore.filter(category.title)">
        <p class="category__label">
            {{ category.title }}
        </p>
        <Icon :name="category.icon"></Icon>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
const props = defineProps(["category"])
const productStore = useProductsStore()
</script>

<style lang="scss" scoped>
.category-item {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background-color: $pale-yellow;

    .iconify {
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
}

.category__label {
    padding: 5px 15px;
    position: absolute;
    width: 100%;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    margin: 0;
}
</style>