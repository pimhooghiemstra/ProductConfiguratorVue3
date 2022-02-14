<script setup>
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

const emit = defineEmits(['inputchanged'])
const props = defineProps({
    amount: Number
})
const updateParent = (e) => emit('inputchanged', e.target.value)
</script>

<template>
    <div class="form-group">
        <label for="amount">{{ lang['product']['amount'] }}</label>
        <input id="amount" class="form-control" type="number" min=10 max=100 step=10 :value="props.amount" @input="updateParent">
    </div>
</template>
