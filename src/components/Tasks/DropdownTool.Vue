<template>
<div >
    <div class="q-gutter-md q-ml-sm">
    <q-select 
      filled 
      v-model="sortBy"
      emit-value
      map-options 
      :options="options" 
      label="Sort" />
    </div>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
     data () {
    return {
      options: [
        {
          label :'Name',
          value : 'name'
        },
        {
          label:'Date',
          value:'dueDate'
        }
      ]
    }
  },
  computed:{
    ...mapState('tasks',['sort']),
    sortBy:{
      get(){
        return this.sort
      },
      set(value)
      {
        this.setSort(value)
      }
    },
    
  },
  methods:{
    ...mapActions('tasks',['setSort'])
  }
}
</script>

<style scoped>
  q.select{
    flex : 0 0 112px;
  }
</style>

