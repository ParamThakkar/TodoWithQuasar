<template>
    <div
    v-if="Object.keys(tasksToDo).length">
        <banner bgColor='bg-orange-4' v-if="!settings.showListInOneList">Todo</banner>
    <q-list
      
      separator
      bordered>
      <task v-for="(task,key) in tasksToDo"
      :key="key"
      :task="task"
      :id ="key"
      >

      </task>
    </q-list>    
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:['tasksToDo'],
    computed:{
        ...mapGetters('settings',['settings'])
    },
    components:{
        'task':require('components/Tasks/Task.vue').default,
        'banner':require('../../shared/banner').default
        
    }

}
</script>

<style scoped>

</style>