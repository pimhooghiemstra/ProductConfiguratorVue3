import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            {
                id: uuidv4(),
                config: {
                    heading: 'Titel van uw kaart',
                    body: '',
                    amount: 10,
                    shape: 'portrait', // options: 'rect', 'diamond', 'circle', portrait' or 'landscape'
                    size: 'a4', // other options: 'a5'/'a6'
                    quality: 'normal' // other option 'extra'
                },
            },
        ],
        price: 1.50, // base price
    }),
    actions: {
        addProduct() {
            this.products.push(createNewProduct())
            this.updatePrice()
        },
        removeProduct(productId) {
            const index = this.products.findIndex(prod => prod.id === productId)
            this.products.splice(index, 1)
            this.updatePrice()
        },
        addToCart() {
            console.log(`Action not implemented yet`)
        },
        updatePrice() {
            this.price = this.products.reduce((previous, product) => previous + productPrice(product), 0)
        },
        resetProduct(productId) {
            const index = this.products.findIndex(prod => prod.id === productId)
            const newProduct = createNewProduct()
            this.products.splice(index, 1, newProduct)
        },
    }
})

// some helper functions
const createNewProduct = () => ({
    id: uuidv4(),
    config: {
        heading: '',
        body:  '',
        amount: 10,
        shape: 'square',
        size: 'a4',
        quality: 'normal',
    }
})

const productPrice = ({config}) => {
    let price = 1.50
    if (config.size === 'a5') {
        price = 1.0
    } else if (config.size === 'a6') {
        price = 0.75
    }
    price += 0.01 * config.heading.length // 1 cent per letter in headline
    price += 0.02 * config.body.split(' ').length // 2 cent per word in body
    if (config.quality === 'extra') {
        price *= 1.25
    }
    price *= config.amount
    return price
}
