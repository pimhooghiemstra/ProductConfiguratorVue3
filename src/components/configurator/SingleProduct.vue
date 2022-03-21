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

defineProps({
    product: Object,
})

const emit = defineEmits([
    'product-updated',
    'reset-product',
    'remove-product'
])

const updateParent = () => emit('product-updated')
const resetProduct = () => emit('reset-product', product.id)
const removeProduct = () => emit('remove-product', product.id)
</script>

<template>
    <div class="single-product">
        <div class="row">
            <div class="col-md-12">
                <button class="remove-product-button pull-right" @click="removeProduct"><span class="glyphicon glyphicon-remove-circle"></span></button>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <CardChooseShape :product="product" />
                <CardChoosePapersize v-model:size="product.config.size" />
                <CardChooseAmount v-model:amount="product.config.amount" />
                <CardChoosePaperquality v-model:quality="product.config.quality" :id="product.id" />
            </div>
            <div class="col-md-6">
                <CardChooseHeadline v-model:heading="product.config.heading" />
                <CardChooseMaintext v-model:text="product.config.body" />

                <button class="btn-link pull-right" @click="resetProduct">{{ lang['product']['clearLinkText'] }}</button>
            </div>
        </div>
        
    </div>
</template>



<style lang="less" scoped>
.single-product {
    padding: 10px 20px 20px 20px;
    border: 1px solid #dcdcdc;
    margin-bottom: 20px;

    .remove-product-button {
        background: none;
        border: none;

        span {
            font-size: 25px;
            color: #aaa;
        }

        &:hover {
            outline: none;
            color: #878787;
        }
    }

    .btn-link {
        background: none;
        border: none;
        color: #FF9900;
        text-decoration: underline;
        font-size: 14px;

        &:hover {
            outline: none;
            color: #cc7a00;
        }
    }
}
</style>