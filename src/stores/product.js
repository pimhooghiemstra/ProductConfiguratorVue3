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
        updatePrice() {
            this.price += 1
        },
    }
})
