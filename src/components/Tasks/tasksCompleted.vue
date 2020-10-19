<template>
    <div
    v-if="Object.keys(tasksCompleted).length">
        <banner bgColor="bg-green-4" v-if="!settings.showListInOneList">Completed</banner>
    <q-list
      
      separator
      bordered>
      <task v-for="(task,key) in tasksCompleted"
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
    props:['tasksCompleted'],
    components:{
        'task':require('components/Tasks/Task.vue').default,
        'banner':require('../../shared/banner').default
    },
    computed:{
        ...mapGetters('settings',['settings'])
    }
}
</script>

<style scoped>

</style>