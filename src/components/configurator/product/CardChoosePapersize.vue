<template>
    <div class="form-group">
        <label for="size">{{ lang['product']['papersize'] }}</label>
        <select id="size" class="form-control" :value="size" @change="chosen">
            <option value="a4">A4</option>
            <option value="a5">A5</option>
            <option value="a6">A6</option>
        </select>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'CardChoosePapersize',
    model: {
        prop: 'size',
        event: 'chosen'
    },
    props: ['size'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        chosen(e) {
            this.$emit('chosen', e.target.value)
        },
    },
}
</script>
