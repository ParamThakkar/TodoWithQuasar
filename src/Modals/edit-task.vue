<template>
    <q-card>
        
        <modal-header>Edit Task</modal-header>

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
    props:['task','id'],
    data(){
        return{
            taskToSubmit:{
            }
        }
    },
    methods:{
        ...mapActions('tasks',['updateTask']),
        submitForm()
        {
            this.$refs.modalTaskName.$refs.name.validate();
            if(!this.$refs.modalTaskName.$refs.name.hasError)
            {
                this.updateTask({
                    id:this.id,
                    updates:this.taskToSubmit
                });
                this.$emit("close");
            }
        },
        
    },
    mounted(){
        this.taskToSubmit = Object.assign({},this.task);
    }
}
</script>

<style>

</style>