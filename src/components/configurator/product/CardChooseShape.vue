<script setup>
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

const props = defineProps({
    shape: String,
    id: String
})
const emit = defineEmits(['changed'])
const chosen = (shape) => emit('changed', shape)

import CardCustomRadioShape from './CardCustomRadioShape.vue'
</script>

<template>
    <div class="form-group">
        <label for="shape">{{ lang['product']['papershape'] }}</label>
        <div>
            <CardCustomRadioShape theshape="square" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="portrait" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="landscape" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="diamond" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="circle" :current="shape" @shape-chosen="chosen" :id="id"/>
        </div>
    </div>
</template>
