<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:shape'])

const props = defineProps({
    theshape: String,
    shape: String,
    id: String
})

const inputId = computed(() => `${props.theshape}_${props.id}`)
const chosen = (e) => emit('update:shape', e.target.value)

</script>

<template>
    <div class="custom-shape" :class="theshape">
        <input :id="inputId" type="radio" :value="theshape" :checked="shape === theshape" @change="chosen">
        <label :for="inputId"></label>
    </div>
</template>

<style lang="less" scoped>
@orange: #ff9900;
.custom-shape {
    
    display: inline-block;
    
    label {
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 5px;
        background: #eee;
        border: 1px solid #ccc;
        margin-bottom: 0;
        font-weight: normal;

        &:hover {
            cursor: pointer;
        }
    }

    &.portrait label {
        width: 30px;
    }

    &.landscape label {
        height: 30px;
        position: relative;
        top: -10px;
    }

    &.diamond label {
        transform: rotate(45deg);
        width: 45px;
        height: 45px;
        margin-left: 5px;
        margin-right: 20px;
    }

    &.circle label {
        border-radius: 50%;
    }

	/* General icon styling */
	input[type=radio] {
	    border: 0;
	    clip: rect(0 0 0 0);
	    height: 1px;
	    margin: -1px;
	    overflow: hidden;
	    padding: 0;
	    position: absolute;
	    width: 1px;
	}

	/* Checked radio icon styling */
    input[type=radio]:checked ~ label {
        border-color: @orange;
        background: #ffd699;
	}
}

@media (min-width: 360px) {
    .custom-shape label {
        margin-right: 15px;
    }
}
</style>