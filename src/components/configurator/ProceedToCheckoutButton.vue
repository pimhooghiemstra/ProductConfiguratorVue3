<template>
    <div>
        <button class="btn btn-primary pull-right" @click="clickHandler"><i class="fa fa-chevron-right"></i> {{ lang['checkoutButtonText'] }}</button>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'CheckoutButton',
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        clickHandler() {
            this.$emit('clicked')
        },
    },
}
</script>

<style lang="less" scoped>
.btn-primary {
    background: #ff9900;
    border: 1px solid #cc7a00;
    width: 180px;
    font-weight: bold;
}
</style>