<script setup>
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

defineProps({
    size: String,
})
const emit = defineEmits(['update:size'])

const updateParent = (e) => emit('update:size', e.target.value)

</script>

<template>
    <div class="form-group">
        <label for="size">{{ lang['product']['papersize'] }}</label>
        <select id="size" class="form-control" :value="size" @change="updateParent">
            <option value="a4">A4</option>
            <option value="a5">A5</option>
            <option value="a6">A6</option>
        </select>
    </div>
</template>
