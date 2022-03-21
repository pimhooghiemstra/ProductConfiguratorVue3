<script setup>
import { computed } from 'vue'
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

const props = defineProps({products: Object})

const emit = defineEmits(['add-product'])

const add = () => emit('add-product')
</script>

<template>
    <div id="add-cart">
        <button class="btn btn-secondary" @click="add">{{ products.length ? lang['addAnotherProductButtonText'] : lang['addProductButtonText'] }}</button>
    </div>
</template>

<style lang="less" scoped>
#add-cart {
    position: relative;
    height: 200px;
    border: 1px dashed #dcdcdc;
    margin: 20px 0px;

    display: grid;
    place-items: center;

    .btn-secondary {
        background: #6AA84F;
        border: 1px solid #578b41;
        color: white;
        font-weight: bold;

        &:focus {
            outline: none;
            background: #578b41;
        }
    }
}
</style>