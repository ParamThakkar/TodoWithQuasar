<template>
    <q-card>
        
        <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm()">
        <q-card-section class="q-pt-none">
          <modal-task-name :name.sync="taskToSubmit.name" 
            ref="modalTaskName"
          />
          <modal-task-dueDate :dueDate.sync="taskToSubmit.dueDate"/>
          <modal-task-dueTime :dueTime.sync="taskToSubmit.dueTime" v-if="taskToSubmit.dueDate"/>
        </q-card-section>
        <modal-task-button></modal-task-button>
       
    </form>
   
    </q-card>
</template>

<script>
import {mapActions} from 'vuex'
import mixinAddEditTask from 'src/mixins/add-edit-task-mixin'
import ModalButton from '../shared/ModalButton'
export default {
    mixins:[mixinAddEditTask],
    data(){
        return{
            taskToSubmit:{
                name:'',
                dueDate:'',
                dueTime:'',
                completed:false
            }
        }
    },
    methods:{
        ...mapActions('tasks',['addTask']),
        
        submitTask()
        {
            this.addTask(this.taskToSubmit);
        }
    },
    
}
</script>

<style>

</style>