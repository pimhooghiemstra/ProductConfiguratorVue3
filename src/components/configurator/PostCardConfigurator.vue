<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

import { useProductStore } from '../../stores/product';
const productStore = useProductStore()
const { price, products } = storeToRefs(productStore)

import PriceContainer from './PriceContainer.vue'
import ProceedToCheckoutButton from './ProceedToCheckoutButton.vue'
// import TestAutoCompete from './TestWriterAutoComplete.vue'

import ProductList from './ProductList.vue'
import CheckoutModal from './CheckoutModal.vue'

const updatePrice = () => productStore.updatePrice()
const resetProduct = id => productStore.resetProduct(id)
const removeProduct = id => productStore.removeProduct(id)
const addProduct = () => productStore.addProduct()

const showModal = ref(false)
const handleSubmit = () => showModal.value = true
</script>

<template>
    <div>
        <div class="container">
            <div id="intro">
                <b>{{ lang['introduction1'] }}</b>

                <div id="list">
                    <ul>
                        <li>{{ lang['product']['papershape'] }}</li>
                        <li>{{ lang['product']['papersize'] }}</li>
                    </ul>

                    <ul>
                        <li>{{ lang['product']['amount'] }}</li>
                        <li>{{ lang['product']['quality'] }}</li>
                    </ul>
                </div>

                <b>{{ lang['introduction2'] }}</b>
            </div>

            <!-- <TestAutoCompete /> -->

            <ProductList 
                :products="products"
                @update-price="updatePrice"
                @reset-product="resetProduct"
                @remove-product="removeProduct"
                @add-product="addProduct"
            />

            <footer>
                <PriceContainer :price="price"/>

                <ProceedToCheckoutButton @clicked="handleSubmit"/>
            </footer>

            <CheckoutModal :showModal="showModal"/>
        </div>
    </div>
</template>

<style lang="less">
#intro {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 0px;
    margin-bottom: 0;

    #list {
        display: grid;
        grid-template-columns: 100px 100px;
        ul {
           margin-top: 10px;
        }
    }
    
}

.form-group {
    margin-bottom: 30px;
}

.form-control {
    border-radius: 0;
    background: #eee;
}

footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
}
</style>