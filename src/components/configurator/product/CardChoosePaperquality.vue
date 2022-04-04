<script setup>
import { ref, computed, watch } from 'vue'
// i18n store
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

const emit = defineEmits(['update:quality'])
const props = defineProps({
    quality: String,
    id: String,
})
const checked = ref(props.quality)
const chosen = (e) => {
    setTimeout(() => {
        emit('update:quality', e.target.value)
    }, 2000)
}

watch(
    () => props.quality,
    (newquality, oldquality) => {
        console.log(`quality changed externally, new value: ${newquality}, old value: ${oldquality}`)
        if (newquality !== oldquality) checked.value = newquality
    }
)

const normalId = computed(() => `normal_${props.id}`)
const extraId = computed(() => `extra_${props.id}`)
</script>

<template>
    <div class="form-group">
        <label for="quality">{{ lang['product']['quality'] }}</label>
        <div id="radios">
            <div class="input-group">
                <input :id="normalId" type="radio" value="normal" v-model="checked" @change="chosen">
                <label :for="normalId">Normal</label>
            </div>
            <div class="input-group">
                <input :id="extraId" type="radio" value="extra" v-model="checked" @change="chosen">
                <label :for="extraId">Extra</label>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@orange: #FF9900;

#radios {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-gap: 25px;

    .input-group {
        display: grid;
        grid-template-columns: 24px 1fr;
        align-items: center;

        input[type=radio] {
            accent-color: @orange;
            justify-self: center;

            &+label {
                margin-left: 5px;
                margin-right: 20px;
                font-weight: normal;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}


</style>