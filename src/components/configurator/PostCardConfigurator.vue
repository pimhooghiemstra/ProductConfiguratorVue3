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

    label {
        display: block;
        font-weight: bold;
    }

    select, input[type=number], input[type=text] {
        width: 100%;
        height: 40px;
        border: 1px solid gray;
        padding-left: 10px;

        &:focus {
            border: 1px solid orange;
        }
    }

    textarea {
        width: 100%;
        height: 140px;
        border: 1px solid gray;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }
}

.close-button {
    background: none;
    border: none;
    border: 1px solid #333;
    border-radius: 50%;
    font-size: 22px;
    padding: 1px 7px;

    &:hover {
        cursor: pointer;
        outline: none;
        color: #878787;
        border-color: #878787;
    }
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