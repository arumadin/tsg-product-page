<template>
    <div class="container cart">
        <h2>My Cart</h2>
        <div v-if="cartStore.formattedCart.length > 0">
            <div v-for="item in cartStore.formattedCart" :key="item.id">
                <div class="cart__item">
                    <NuxtLink :to="`/product/${item.id}`" class="cart__image">
                        <NuxtImg :src="item.image" alt="image"></NuxtImg>
                    </NuxtLink>
                    <div class="cart__details">
                        <div class="cart__title">
                            <NuxtLink :to="`/product/${item.id}`">
                                {{ item.name }}
                            </NuxtLink>
                            <br>
                            <span class="cart__option">
                                <em>
                                    {{ item.selectedOption }}
                                </em>
                            </span>
                        </div>
                        <div>
                            ${{ item.price }}
                        </div>
                    </div>
                    <div class="cart__control">
                        <button class="btn--icon bg--pale-yellow" @click="cartStore.remove(item.id)">
                            <Icon name="gravity-ui:minus" />
                        </button>
                        <div class="cart__quantity">
                            <p>{{ item.quantity }}</p>
                        </div>
                        <button class="btn--icon bg--pale-yellow" @click="cartStore.add(item.id)">
                            <Icon name="gravity-ui:plus" />
                        </button>
                        <button class="bg--yellow" @click="cartStore.removeAll(item.id)">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="cartStore.total" class="cart__total">
                <p>
                    Total: ${{ (cartStore.total).toFixed(2) }}
                </p>
            </div>
            <button class="btn--big btn__checkout">Checkout</button>
        </div>
        <div v-else class="cart--empty">
            <p>No product yet,</p>
            <NuxtLink to="/" prefetch>
                <button class="btn--big">Let's Shop</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore()

const discountedPrice = computed(() => {
    return (cartStore.formattedCart.price * ((100 - cartStore.formattedCart.discount) / 100))
})
</script>

<style lang="scss" scoped>
.cart {
    min-height: calc(100vh - 150px - 100px);

    &--empty {
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 24px;

        p {
            margin-bottom: 20px;
        }
    }

    &__item {
        padding-bottom: 20px;
        border-bottom: solid 1px $yellow;
        margin-bottom: 20px;
        gap: 20px;
        display: grid;
        grid-template-columns: 100px auto;
        grid-template-rows: auto 50px;
    }

    &__details {
        display: flex;
        gap: 20px;
        justify-content: space-between
    }

    &__control {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    &__title {
        flex-basis: 75%;
    }

    &__option {
        font-size: 14px;
        margin-top: 5px;
        display: inline-block;
    }

    &__quantity {
        height: 100;

        p {
            margin: 0;
        }
    }

    &__image {
        grid-row: 1 / span 2;

        img {
            width: 100px;
            height: 100px;
            object-fit: contain;
        }
    }

    &__total {
        text-align: right;
        font-size: 24px;
        width: 100%;
    }
}

.btn__checkout {
    display: block;
    margin: 0 auto;
}
</style>