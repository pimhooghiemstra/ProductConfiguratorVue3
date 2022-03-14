<script setup>
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

defineProps({
    text: String
})
const emit = defineEmits(['update:text'])

const updateParent = (e) => emit('update:text', e.target.value)
</script>

<template>
    <div class="form-group">
        <label for="body">{{ lang['product']['bodytext'] }}</label>
        <textarea id="body" class="form-control" :placeholder="lang['product']['bodytextPlaceholder']" 
            :value="text" 
            @input="updateParent"
        ></textarea>
    </div>
</template>

<style lang="less" scoped>
.form-group {
    margin-bottom: 10px;
}

#body {
    height: 200px;
}
</style>