<template>

     <q-input 
        v-model="searchField" 
        @keyup.esc="searchField = ''"
        label="Search" 
        v-select-all
        outlined>
        <template v-slot:append>
          <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

      </q-input>

</template>

<script>
import { selectAll } from 'src/directives/selectAll'
import {mapState,mapActions} from 'vuex'

export default {
    
    computed:{
        ...mapState('tasks',['search']),
        searchField:
        {
            get()
            {
            return this.search;
            },
            set(value)
            {
                this.setSearch(value);
            }
        }
    },
    directives:{
        selectAll
    },
    methods:{
        ...mapActions('tasks',['setSearch'])
    }
    
}
</script>

<style scoped>

</style>