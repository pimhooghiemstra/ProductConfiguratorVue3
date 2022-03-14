<script setup>
import { ref, reactive } from 'vue'
import Autocomplete from 'vue3-autocomplete'
import 'vue3-autocomplete/dist/vue3-autocomplete.css'

const listOfWriters = [
    {
        id: 1,
        name: 'Stephen King'
    },
    {
        id: 2,
        name: 'Terry Goodkind'
    },
    {
        id: 3,
        name: 'Kindle Maniac'
    },
    {
        id: 4,
        name: 'Mervyn King'
    },
    {
        id: 5,
        name: 'Stephen Emmer'
    },
    {
        id: 6,
        name: 'Gold Goblin'
    },
]
let items = ref([])
const getItems = (text) => {
    const filtered = listOfWriters.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    items.value = filtered
}
const selectWriter = (writer) => console.log(writer.name)
</script>

<template>
    <div>
        <h2>All Writers</h2>
        <ul>
            <li v-for="item in listOfWriters" :key="item.id">{{item.name}}</li>
        </ul>
    </div>

    <Autocomplete
        @input="getItems"
        :results="items"
        @onSelect="selectWriter"
    ></Autocomplete>
</template>


<style lang="scss" scoped>

</style>