import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        filteredProducts: []
    }),
    getters: {
        allProducts() {
            return this.products
        },
        filteredProduct() {
            return this.filteredProducts
        }
    },
    actions: {
        async getProducts() {
            const {data, error, status} = await useFetch('https://my-json-server.typicode.com/arumadin/tsg-product-db/products')
            this.products = data.value
        },
        filter(category) {
            if (category === 'Show All') {
                this.filteredProducts = []
            }

            let data = this.products.filter((p) => p.category === category)
            this.filteredProducts = data
        },
        resetFilter() {
            this.filteredProducts = []
        }
    }

})