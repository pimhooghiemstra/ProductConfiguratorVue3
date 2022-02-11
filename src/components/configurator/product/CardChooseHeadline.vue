<template>
    <div class="form-group">
        <label for="headline">{{ lang['product']['headline'] }}</label>
        <input id="headline" class="form-control" type="text" :placeholder="lang['product']['headlinePlaceholder']" :value="value" @input="updateParent">
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'CardChooseHeadline',
    props: ['value'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        updateParent(e) {
            this.$emit('input', e.target.value)
        },
    },
}
</script>

<style lang="less" scoped>

</style>