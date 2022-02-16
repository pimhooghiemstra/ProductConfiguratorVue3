<script setup>
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

defineProps({
    price: Number
})

</script>
<template>
    <div id="price">
        {{ lang['price'] }}: &euro; {{ price.toFixed(2) }}
    </div>
</template>

<style lang="less" scoped>
#price {
    font-size: 16px;
    font-weight: bold;
    line-height: 34px;
}

@media (min-width: 360px) {
    #price {
        font-size: 20px;
    }
}
</style>