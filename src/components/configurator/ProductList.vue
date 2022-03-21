<script setup>
import SingleProduct from './SingleProduct.vue'
import AddProduct from './AddProduct.vue'

defineProps({products: Object})

const emit = defineEmits([
    'update-price',
    'reset-product',
    'remove-product',
    'add-product'
])

const notifyParent = () => emit('update-price')
const resetProduct = (id) => emit('reset-product', id)
const removeProduct = (id) => emit('remove-product', id)
const addProduct = () => emit('add-product')
</script>

<template>
    <div class="row">
        <div class="col-md-12">
            <SingleProduct 
                v-for="product in products" 
                :key="product.id" 
                :product="product" 
                @product-updated="notifyParent"
                @reset-product="resetProduct"
                @remove-product="removeProduct"
            />
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">
            <AddProduct 
                :products="products"
                @add-product="addProduct"
            />
        </div>
    </div>
</template>