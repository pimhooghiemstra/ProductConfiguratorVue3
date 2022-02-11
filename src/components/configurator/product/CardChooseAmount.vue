<template>
    <div class="form-group">
        <label for="amount">{{ lang['product']['amount'] }}</label>
        <input id="amount" class="form-control" type="number" min=10 max=100 step=10 :value="newAmount" @input="updateParent">
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'CardChooseAmount',
    model: {
        prop: 'newAmount',
        event: 'input-changed'
    },
    props: ['newAmount'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        updateParent(e) {
            this.$emit('input-changed', parseInt(e.target.value))
        },
    },
}
</script>
