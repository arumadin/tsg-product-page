<template>
    <div class="container">
        <h2>My Cart</h2>
        <div v-if="cartStore.formattedCart.length > 0">
            <div v-for="item in cartStore.formattedCart" :key="item.id">
                {{  item.image }}
                {{ item.name }}

                {{ item.price }}
                {{ item.quantity }}
                {{ item.discount }}
                {{ item.cost }}

                <button @click="cartStore.remove(item.id)"> - </button>
                <p>{{ item.quantity }}</p>
                <button @click="cartStore.add(item.id)"> + </button>
                <button @click="cartStore.removeAll(item.id)"> del </button>

            </div>
        </div>
        <div v-else>
            add product
        </div>
        <div v-if="cartStore.total">Total {{ (cartStore.total).toFixed(2) }}</div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>

</style>