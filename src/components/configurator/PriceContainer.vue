<template>
    <div id="price">
        {{ lang['price'] }}: &euro; {{ price.toFixed(2) }}
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'Price',
    props: ['price'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
}
</script>

<style lang="less" scoped>
#price {
    font-size: 16px;
    font-weight: bold;
    line-height: 34px;
}

@media (min-width: 360px) {
    #price {
        font-size: 20px;
    }
}
</style>