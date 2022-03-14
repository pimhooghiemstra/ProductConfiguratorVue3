<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

import { useProductStore } from '../../stores/product';
const productStore = useProductStore()

import CardChooseMaintext from './product/CardChooseMaintext.vue';
const maintext = ref(`
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor numquam ullam perferendis minus soluta aut sit ab, doloremque vero fuga optio aperiam quas ea, animi laboriosam odit iusto non debitis.
`)
const updateMaintext = (text) => {
    maintext.value = text

    console.log('Extra side effect => set paper quality to normal')
    paperQuality.value = 'normal'
}

import CardChooseAmount from './product/CardChooseAmount.vue';
const amount = ref(0)
const updateAmount = (num) => {
    amount.value = parseInt(num)
    productStore.updatePrice()
}

import CardChoosePaperquality from './product/CardChoosePaperquality.vue';
const paperQuality = ref('extra')
const updateQuality = (quality) => paperQuality.value = quality

import CardChoosePaperSize from './product/CardChoosePapersize.vue'
const paperSize = reactive({size: 'a5'})

import CardChooseShape from './product/CardChooseShape.vue'
const shape = ref('portrait')
const id = '12345'
const updateShape = (newCardShape) => shape.value = newCardShape

import PriceContainer from './PriceContainer.vue'
const { price, products } = storeToRefs(productStore)

import CardChooseHeadline from './product/CardChooseHeadline.vue';

// import TestAutoCompete from './TestWriterAutoComplete.vue'

import SingleProduct from './SingleProduct.vue'

const notifyParent = () => {
    console.log('product updated...')
}
const resetProduct = id => {
    console.log(`product ${id} was reset`)
}
const removeProduct = id => {
    console.log(`product ${id} was removed`)
}
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

            <!-- With v-model -->
            <!-- <CardChooseHeadline v-model:heading="products[0].config.heading"/>

            <h3>Onze headliner</h3>
            <p v-text="products[0].config.heading"></p>

            <CardChooseAmount :amount="amount" @inputchanged="updateAmount"/>

            <CardChooseMaintext :text="maintext" @inputchanged="updateMaintext"/>

            <CardChoosePaperquality :quality="paperQuality" id="1" @inputchanged="updateQuality"/>

            <CardChoosePaperSize :paper-size="paperSize"/>
            <p>
                Gekozen papier afmeting: {{ paperSize.size}}
            </p>

            <hr>

            <CardChooseShape :shape="shape" :id="id" @changed="updateShape"/> -->

            <!-- Single product -->
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

<!--
            <ProductList 
                :products="products"
                @update-price="updatePrice"
                @reset-product="resetProduct"
                @remove-product="removeProduct"
                @add-product="addProduct"
            />
-->            
            <footer class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <PriceContainer :price="price"/>
                </div>

                <!-- <div class="col-md-6 col-sm-6 col-xs-6">
                    <ProceedToCheckoutButton @clicked="handleSubmit"/>
                </div> -->
            </footer>
        </div>
    </div>
</template>

<style lang="less">
@orange: #FF9900;

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
    margin-bottom: 30px;
}

/* Custom radiobuttons and checkboxes */
div.custom-input {

	&.inline {
		display: inline;
	}

	label {
		font-size: 15px;
		margin-right: 10px;
	}

	/* General icon styling */
	input[type=radio],
	input[type=checkbox] {
	    border: 0;
	    clip: rect(0 0 0 0);
	    height: 1px;
	    margin: -1px;
	    overflow: hidden;
	    padding: 0;
	    position: absolute;
	    width: 1px;
	}

	/* Unchecked icon styling */
	input[type=radio] ~ label:before,
	input[type=checkbox] ~ label:before {
	    font-family: FontAwesome;
	    display: inline-block;
	    content: "\f10c";
	    letter-spacing: 10px;
	    font-size: 20px;
	    color: @orange;
	    width: 1.4em;
	    position: relative;
	    top: 2px;
	}

	/* Checked radio icon styling */
	input[type=radio]:checked ~ label:before {
	    content: "\f192";
	}

	/* Update icon for checkbox (unchecked) */
	input[type=checkbox] ~ label:before {
	    content: "\f096";
	    top: 3px;
	}

	/* Update icon for checkbox (checked) */
	input[type=checkbox]:checked ~ label:before {
	    content: "\f14a";
	}

	input[type=radio]:focus ~ label:before,
	input[type=checkbox]:focus ~ label:before
	{
	    color: @orange;
	}
}
</style>