<script setup>
import CardChooseShape from './product/CardChooseShape.vue'
import CardChoosePapersize from './product/CardChoosePapersize.vue'
import CardChooseAmount from './product/CardChooseAmount.vue'
import CardChoosePaperquality from './product/CardChoosePaperquality.vue'
import CardChooseHeadline from './product/CardChooseHeadline.vue'
import CardChooseMaintext from './product/CardChooseMaintext.vue'

// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

const props = defineProps({
    product: Object,
})

const emit = defineEmits([
    'product-updated',
    'reset-product',
    'remove-product'
])

const updateParent = () => emit('product-updated')
const resetProduct = () => emit('reset-product', props.product.id)
const removeProduct = () => emit('remove-product', props.product.id)
</script>

<template>
    <div class="single-product">
        <div class="remove-product-container">
            <button class="close-button remove-product-button" @click="removeProduct">
                &times;
            </button>
        </div>
        
        <div class="product-form">
            <div>
                <CardChooseShape 
                    :product="product" 
                    @update:shape="updateParent"
                />
                <CardChoosePapersize 
                    v-model:size="product.config.size" 
                    @update:size="updateParent"
                />
                <CardChooseAmount 
                    v-model:amount="product.config.amount" 
                    @update:amount="updateParent"
                />
                <CardChoosePaperquality 
                    v-model:quality="product.config.quality" 
                    :id="product.id" 
                    @update:quality="updateParent"
                />
            </div>
            <div>
                <CardChooseHeadline 
                    v-model:heading="product.config.heading" 
                    @update:heading="updateParent"
                />
                <CardChooseMaintext 
                    v-model:text="product.config.body" 
                    @update:text="updateParent"
                />

                <button class="reset-link" @click="resetProduct">{{ lang['product']['clearLinkText'] }}</button>
            </div>
        </div>
        
    </div>
</template>



<style lang="less" scoped>
.single-product {
    padding: 10px 20px 20px 20px;
    border: 1px solid #dcdcdc;
    margin-bottom: 20px;    

    .remove-product-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: end;
    }

    .product-form {
        display: grid;
        grid-template-columns: 1fr;

        .reset-link {
            background: none;
            border: none;
            color: #FF9900;
            text-decoration: underline;
            font-size: 14px;
            float: right;

            &:hover {
                outline: none;
                color: #cc7a00;
            }
        }
    }
}

@media (min-width: 768px) {
    .single-product {
        .product-form {
            grid-template-columns: 1fr 1fr;
            grid-gap: 25px;
        }
    }
}
</style>