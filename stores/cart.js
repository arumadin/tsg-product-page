import { defineStore } from 'pinia';
import { useProductsStore } from './products';

export const useCartStore = defineStore('cart', {
    state: () => (
        {
            cartContent: {},
        }
    ),
    getters: {
        formattedCart() {
            return Object.keys(this.cartContent).map(productId => {
                const product = this.cartContent[productId]
                const productStore = useProductsStore()

                const defaultOption =  productStore.allProducts.find((p) => p.id === product.productId).options[0] ?? ''

                return {
                    id: product.productId,
                    image: productStore.allProducts.find((p) => p.id === product.productId).images[0].imgUrl,
                    name: productStore.allProducts.find((p) => p.id === product.productId).title,
                    quantity: product.quantity,
                    selectedOption: product.selectedOption ?? defaultOption,
                    price: (product.quantity * productStore.allProducts.find((p) => p.id === product.productId).price * ((100 - productStore.allProducts.find((p) => p.id === product.productId).discount)/100)).toFixed(2)
                }
            })
        },
        total() {
            return Object.keys(this.cartContent).reduce((totalPrice, id) => {
                const productStore = useProductsStore()
                const product = productStore.allProducts.find(p => p.id === parseInt(id))
                if (product) {
                    return totalPrice + (product.price * this.cartContent[id].quantity * ((100 - product.discount) / 100))
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
        add(productId, qty, option) {
            let quantity = qty ? qty : 1;

            if (this.cartContent.hasOwnProperty(productId)) {
                this.cartContent[productId] = {
                    productId,
                    quantity: this.cartContent[productId].quantity + quantity,
                    selectedOption: option
                }
            } else {
                this.cartContent[productId] = {
                    productId,
                    quantity: quantity,
                    selectedOption: option
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