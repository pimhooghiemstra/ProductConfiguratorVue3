<template>
    <div class="form-group">
        <label for="body">{{ lang['product']['bodytext'] }}</label>
        <textarea id="body" class="form-control" :placeholder="lang['product']['bodytextPlaceholder']" :value="value" @input="updateParent"></textarea>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'CardChooseMaintext',
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
.form-group {
    margin-bottom: 10px;
}

#body {
    height: 200px;
}
</style>