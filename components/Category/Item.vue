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
    cursor: pointer;
    position: relative;
    width: 100px;
    height: 100px;
    z-index: 9;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: $pale-yellow;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transition: all 0.3s ease-in;
        z-index: -1;
    }

    @include mobile {
        height: auto;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        &::before {
            width: 0;
            height: 0;
        }
    }

    &:hover {

        &::before {
            width: 100px;
            height: 100px;
        }

    }

    .iconify {
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @include mobile {
            position: static;
            transform: none;
            font-size: 24px;
        }
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

    @include mobile {
        position: static;
        width: fit-content;
        transform: none;
        padding: 0 10px;
    }
}
</style>