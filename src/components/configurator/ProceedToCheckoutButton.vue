<script setup>
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)
    
const emit = defineEmits(['clicked'])
const clickHandler = () => emit('clicked')
</script>

<template>
    <div>
        <button class="btn btn-primary pull-right" @click="clickHandler"><i class="fa fa-chevron-right"></i> {{ lang['checkoutButtonText'] }}</button>
    </div>
</template>


<style lang="less" scoped>
.btn-primary {
    background: #ff9900;
    border: 1px solid #cc7a00;
    width: 180px;
    font-weight: bold;
}
</style>