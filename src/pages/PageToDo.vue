<template>
  <q-page>
  
    <q-list
     
      separator
      bordered>
      <task v-for="(task,key) in tasks"
      :key="key"
      :task="task"
      :id ="key"
      >

      </task>
    </q-list>
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
      <add-modal @close="showDialog=false"></add-modal>
    </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'

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
  ...mapGetters('tasks',['tasks'])
 },
 components:{
   'task':require('components/Tasks/Task.vue').default,
   'add-modal':require('../Modals/add-modal').default
 }
}
</script>

<style scoped>
  
</style>
