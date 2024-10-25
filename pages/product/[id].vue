<template>
    <div class="container">
        <div class="product">
            <ProductGallery :images="data?.images"></ProductGallery>
            <div class="product__info">
                <div v-if="data?.label.length" class="product__label">{{ data.label }}</div>
                <div class="product__title"> {{ data?.title }}</div>
                <div class="product__price">{{ data?.price }}</div>
                <div class="product__desc">
                    {{ data?.description }}

                </div>
                <div class="product__variant">
                    <p>Option</p>
                    <button v-for="option in data?.options">{{ option }}</button>

                </div>
                <div class="product__quantity">qty</div>
                <button class="btn--addcart">add to cart</button>
                <div class="product__more-info">
                    more info, ingredients, shipping and returns
                </div>
            </div>
        </div>
        <div class="product__recommendations">
            <p>you might also like...</p>
            <div class="product__wrap">
                <template v-for="(item, index) in products?.products">
                    <Card v-if="index < 3" :key="index" :product="item"></Card>
                </template>
                <div class="discover-">
                    Discover more
                </div>
            </div>
        </div>



    </div>

</template>

<script setup lang="ts">
// import data1 from '@/data'
import { type ProductResponse, type Product } from '~/types/types';
// const products = ref(data1)

const { id } = useRoute().params

const { data: products } = await useFetch<ProductResponse>('https://my-json-server.typicode.com/arumadin/tsg-product-db/db/')

const { data, error } = await useFetch<Product>(`https://my-json-server.typicode.com/arumadin/tsg-product-db/products/${id}`)
</script>

<style lang="scss" scoped>
.product {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto 1fr;
    gap: 20px 50px;

    @include nonDesktop {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-template-rows: 1fr auto;
    }

    &__wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @include nonDesktop {
            grid-template-columns: repeat(3, 1fr);

            div:nth-child(n+4) {
                display: none;
            }

        }

        @include mobile {
            grid-template-columns: repeat(2, 1fr);

            div:nth-child(n+3) {
                display: none;

            }
        }
    }
}
</style>