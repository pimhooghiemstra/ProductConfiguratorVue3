<script setup>
import CardCustomRadioShape from './CardCustomRadioShape.vue'

// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

defineProps({
    product: Object,
})

const emit = defineEmits(['update:shape'])

const updateParent = (e) => emit('update:shape')
</script>

<template>
    <div class="form-group">
        <label for="shape">{{ lang['product']['papershape'] }}</label>
        <div>
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="square"
                :id="product.id"
                @update:shape="updateParent"
            />
            <CardCustomRadioShape
                v-model:shape="product.config.shape" 
                theshape="portrait" 
                :id="product.id"
                @update:shape="updateParent"
            />
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="landscape" 
                :id="product.id"
                @update:shape="updateParent"
            />
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="diamond" 
                :id="product.id"
                @update:shape="updateParent"
            />
            <CardCustomRadioShape 
                v-model:shape="product.config.shape" 
                theshape="circle" 
                :id="product.id"
                @update:shape="updateParent"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
