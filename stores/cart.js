import { defineStore } from 'pinia'

import products from '~/data'

export const useCartStore = defineStore('cart', {
    state: () => (
        {
            cartContent: {}
        }
    ),
    getters: {
        formattedCart() {
            return Object.keys(this.cartContent).map(productId => {
                const product = this.cartContent[productId]

                return {
                    id: product.productId,
                    image: products.find((p) => p.id === product.productId).photos[0],
                    name: products.find((p) => p.id === product.productId).name,
                    price: products.find((p) => p.id === product.productId).price,
                    discount: products.find((p) => p.id === product.productId).discount,
                    quantity: product.quantity,
                    cost: product.quantity * products.find((p) => p.id === product.productId).price * ((100 - products.find((p) => p.id === product.productId).discount)/100)
                }
            })
        },
        total() {
            return Object.keys(this.cartContent).reduce((totalPrice, id) => {
                const product = products.find(p => p.id === parseInt(id))
                if (product) {
                    return totalPrice + product.price * this.cartContent[id].quantity * ((100 - product.discount) / 100)
                }

                return totalPrice + 0
            }, 0)
        },
        totalProducts() {
            return Object.keys(this.cartContent).reduce((totalItem, id) => {
                return totalItem + this.cartContent[id].quantity
            }, 0)
        }
    },
    actions: {
        add(productId) {
            if (this.cartContent.hasOwnProperty(productId)) {
                this.cartContent[productId] = {
                    productId,
                    quantity: this.cartContent[productId].quantity + 1
                }
            } else {
                this.cartContent[productId] = {
                    productId,
                    quantity: 1
                }
            }
        },
        remove(productId) {
            if (!this.cartContent[productId]) {
                return;
            }

            this.cartContent[productId].quantity -= 1;

            if(this.cartContent[productId].quantity === 0) {
                delete this.cartContent[productId]
            }
        },
        removeAll(productId) {
            delete this.cartContent[productId]
        }
    }
})