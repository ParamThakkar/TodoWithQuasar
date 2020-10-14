<template>
    <q-card>
        
        <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm()">
        <q-card-section class="q-pt-none">
          <modal-task-name :name.sync="taskToSubmit.name" />
          <modal-task-dueDate :dueDate.sync="taskToSubmit.dueDate"/>
          <modal-task-dueTime :dueTime.sync="taskToSubmit.dueTime" v-if="taskToSubmit.dueDate"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn 
            
            type="submit" 
            label="Save" 
            color="primary" 
            />
        </q-card-actions>
    </form>
   
    </q-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
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
        submitForm()
        {
            this.$refs.name.validate();
            if(!this.$refs.name.hasError)
            {
                this.submitTask();
                this.$emit("close");
            }
        },
        submitTask()
        {
            this.addTask(this.taskToSubmit);
        }
    },
    components:{
        'modal-header':require("../shared/modal-head").default,
        'modal-task-name':require("../shared/ModalTaskName").default,
        'modal-task-dueDate':require('../shared/ModalDueDate').default,
        'modal-task-dueTime':require('../shared/ModalTaskDueTime').default
    }
}
</script>

<style>

</style>