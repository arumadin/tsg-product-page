import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: []
    }),
    getters: {
        allProducts() {
            return this.products
        }
    },
    actions: {
        async getProducts() {
            const {data, error} = await useFetch('https://my-json-server.typicode.com/arumadin/tsg-product-db/products')
            this.products = data.value
        },
    }

})