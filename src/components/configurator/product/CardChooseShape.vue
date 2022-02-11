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

<script>
// import { mapGetters } from 'vuex'
import CardCustomRadioShape from './CardCustomRadioShape.vue'
export default {
    name: 'CardChooseShape',
    components: {CardCustomRadioShape},
    model: {
        prop: 'shape',
        event: 'changed'
    },
    props: ['shape', 'id'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        chosen(cardShape) {
            this.$emit('changed', cardShape)
        },
    },
}
</script>
