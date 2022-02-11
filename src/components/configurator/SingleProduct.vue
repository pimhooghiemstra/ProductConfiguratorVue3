<template>
    <div class="single-product">
        <div class="row">
            <div class="col-md-12">
                <button class="remove-product-button pull-right" @click="removeProduct"><span class="glyphicon glyphicon-remove-circle"></span></button>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <CardChooseShape v-model="config.shape" @changed="updateParent" :id="id"/>
                <CardChoosePapersize v-model="config.size" @chosen="updateParent" />
                <CardChooseAmount v-model="config.amount" @input-changed="updateParent"/>
                <CardChoosePaperquality v-model="config.quality" @chosen="updateParent" :id="id"/>
            </div>
            <div class="col-md-6">
                <CardChooseHeadline v-model="config.heading" @input="updateParent" />
                <CardChooseMaintext v-model="config.body" @input="updateParent" />

                <button class="btn-link pull-right" @click="resetProduct">{{ lang['product']['clearLinkText'] }}</button>
            </div>
        </div>
        
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import CardChooseShape from './product/CardChooseShape.vue'
import CardChoosePapersize from './product/CardChoosePapersize.vue'
import CardChooseAmount from './product/CardChooseAmount.vue'
import CardChoosePaperquality from './product/CardChoosePaperquality.vue'
import CardChooseHeadline from './product/CardChooseHeadline.vue'
import CardChooseMaintext from './product/CardChooseMaintext.vue'
export default {
    name: 'Product',
    components: {
        CardChooseShape,
        CardChoosePapersize,
        CardChooseAmount,
        CardChoosePaperquality,
        CardChooseHeadline,
        CardChooseMaintext,
    },
    model: {
        prop: 'config',
    },
    props: ['id', 'config'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        updateParent() {
            this.$emit('product-updated')
        },
        resetProduct() {
            this.$emit('reset-product', this.id)
        },
        removeProduct() {
            this.$emit('remove-product', this.id)
        },
    },
}
</script>

<style lang="less" scoped>
.single-product {
    padding: 10px 20px 20px 20px;
    border: 1px solid #dcdcdc;
    margin-bottom: 20px;

    .remove-product-button {
        background: none;
        border: none;

        span {
            font-size: 25px;
            color: #aaa;
        }

        &:hover {
            outline: none;
            color: #878787;
        }
    }

    .btn-link {
        background: none;
        border: none;
        color: #FF9900;
        text-decoration: underline;
        font-size: 14px;

        &:hover {
            outline: none;
            color: #cc7a00;
        }
    }
}
</style>