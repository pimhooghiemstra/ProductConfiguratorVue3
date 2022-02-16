<script setup>
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

defineProps({
    heading: String
})
const emit = defineEmits(['update:heading'])

const updateParent = (e) => emit('update:heading', e.target.value)
</script>

<template>
    <div class="form-group">
        <label for="headline">{{ lang['product']['headline'] }}</label>
        <input id="headline" class="form-control" type="text" 
            :placeholder="lang['product']['headlinePlaceholder']" 
            :value="heading" 
            @input="updateParent">
    </div>
</template>
