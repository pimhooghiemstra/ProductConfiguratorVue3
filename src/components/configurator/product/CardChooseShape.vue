<script setup>
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

const props = defineProps({
    product: Object,
})

import CardCustomRadioShape from './CardCustomRadioShape.vue'
</script>

<template>
    <div class="form-group">
        <label for="shape">{{ lang['product']['papershape'] }}</label>
        <div>
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="square"
                :id="product.id"
            />
            <CardCustomRadioShape
                v-model:shape="product.config.shape" 
                theshape="portrait" 
                :id="product.id"
            />
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="landscape" 
                :id="product.id"
            />
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="diamond" 
                :id="product.id"
            />
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="circle" 
                :id="product.id"
            />
        </div>
    </div>
</template>
