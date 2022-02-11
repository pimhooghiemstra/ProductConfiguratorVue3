<template>
    <div id="add-cart">
        <button class="btn btn-secondary" @click="add" v-text="buttonText"></button>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'addProduct',
    props: ['products'],
    computed: {
        ...mapGetters('i18n', ['lang']),
        buttonText() {
            if (this.products.length > 0) {
                return this.lang['addAnotherProductButtonText']
            }
            return this.lang['addProductButtonText']
        },
    },
    methods: {
        add() {
            this.$emit('add-product')
        },
    },
}
</script>

<style lang="less" scoped>
#add-cart {
    position: relative;
    height: 200px;
    border: 1px dashed #dcdcdc;
    margin: 20px 0px;

    display: grid;
    place-items: center;

    .btn-secondary {
        background: #6AA84F;
        border: 1px solid #578b41;
        color: white;
        font-weight: bold;

        &:focus {
            outline: none;
            background: #578b41;
        }
    }
}


</style>