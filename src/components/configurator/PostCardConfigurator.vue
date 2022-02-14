<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

import CardChooseHeadline from './product/CardChooseHeadline.vue';
const inputValue = ref('Hallo mijn lieve Pannie Koek.')
const updateValue = (text) => inputValue.value = text

import CardChooseAmount from './product/CardChooseAmount.vue';
const amount = ref(0)
const updateAmount = (num) => amount.value = num

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

            <CardChooseHeadline :value="inputValue" @inputchanged="updateValue"/>

            <CardChooseAmount :amount="amount" @inputchanged="updateAmount"/>

<!--
            <ProductList 
                :products="products"
                @update-price="updatePrice"
                @reset-product="resetProduct"
                @remove-product="removeProduct"
                @add-product="addProduct"
            />
            
            <footer class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <PriceContainer :price="price"/>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-6">
                    <ProceedToCheckoutButton @clicked="handleSubmit"/>
                </div>
            </footer>
-->            
        </div>
    </div>
</template>

<!-- <script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { mapState } from 'pinia'
import ProductList from './ProductList.vue'
import PriceContainer from './PriceContainer.vue'
import ProceedToCheckoutButton from './ProceedToCheckoutButton.vue'

export default {
    name: 'PostCardConfigurator',
    components: {
        ProductList,
        PriceContainer,
        ProceedToCheckoutButton,
    },
    computed: {
        ...mapState('configurator', {
            products: 'products',
            price: 'price'
        }),
        ...mapState('i18n', ['lang']),
    },
    methods: {
        ...mapActions('configurator', [
            'addProduct',
            'removeProduct',
            'updatePrice',
            'resetProduct'
        ]),
        handleSubmit() {
            console.log('implement another modal that is Vue3 ready')
        },
    },
    mounted() {
        this.updatePrice()
    },
}
</script> -->

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