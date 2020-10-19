<template>
  <q-page class="q-pa-md">

    <div class="row q-mb-lg">
    <div class='column inline'
      
     style="width:80%">
    <search />
    </div>
    <div style="width:20%" class='column inline'>
    <dropdowntool/>
    </div>
    </div>
    <p 
      v-if="search && !Object.keys(tasksToDo).length && !Object.keys(tasksCompleted).length && !settings.showListInOneList">
      No search results found  
    </p>
    <div class="q-mt-sm q-ml-sm q-mr-sm">
    
    <no-tasks
      
      v-if="!Object.keys(tasksToDo).length && !search"/>

    <task-todo 
      :tasksToDo="tasksToDo" class=""></task-todo>
    </div>

    <div class="q-ml-sm q-mr-sm"
    :class="{
      'q-mt-lg': !settings.showListInOneList
    }">
      <task-completed
        :tasksCompleted="tasksCompleted"/>
    </div>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showDialog = true"
          round
          color="primary"
          size="24px"
          icon="add"
      />
    </div>
    <q-dialog v-model="showDialog">
      <add-modal @close="showDialog=false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters,mapState} from 'vuex'

export default {
  data(){
    return{
      showDialog:false
    }
  },
 computed:{
  //  tasks(){
  //    return this.$store.getters['tasks/tasks']
  //  }
  ...mapGetters('tasks',['tasksToDo','tasksCompleted']),
  ...mapGetters('settings',['settings']),
  ...mapState('tasks',['search'])
 },
 mounted()
 {
   this.$root.$on('showAddTask',()=>{
     this.showDialog = true;
   })
 },
 components:{
   'task':require('components/Tasks/Task.vue').default,
   'add-modal':require('../Modals/add-modal').default,
   'task-todo':require('components/Tasks/tasksTodo').default,
   'task-completed':require('components/Tasks/tasksCompleted').default,
   'no-tasks':require('components/Tasks/NoTasks').default,
   'search':require('components/Tasks/SearchBar').default,
   'dropdowntool': require('components/Tasks/DropdownTool').default
 }
}
</script>

<style scoped>
  
</style>
