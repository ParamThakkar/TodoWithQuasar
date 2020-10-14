<template>
    <q-card>
        <q-card-section class="row">
          <div class="text-h6">Add Task</div>
          <q-space/>
          <q-btn 
            flat 
            round 
            dense 
            icon="close" 
            v-close-popup
            />  
        </q-card-section>

    <form @submit.prevent="submitForm()">
        <q-card-section class="q-pt-none">
          <div class="row q-mb-sm">
               <q-input 
                outlined 
                ref="name"
                v-model="taskToSubmit.name" 
                :rules="[val => !!val || 'Field is required']"
                label="Task Name"/>
          </div>

          <div class="row q-mb-sm">
              <q-input 
              outlined 
              v-model="taskToSubmit.dueDate"
              label="Due Date">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy>
                        <q-date v-model="taskToSubmit.dueDate"
                        >
                        
                        </q-date>
                    </q-popup-proxy>
                    </q-icon>
                </template>
                </q-input>
          </div>

          <div class="row q-mb-sm">
              <q-input 
                outlined 
                v-model="taskToSubmit.dueTime"
                label="Due time"
                >
                    <template v-slot:append>
                    <q-icon 
                        name="access_time" class="cursor-pointer">
                        <q-popup-proxy>
                        <q-time 
                            v-model="taskToSubmit.dueTime">
                        </q-time>
                        </q-popup-proxy>
                    </q-icon>
                    </template>
                </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn 
            flat
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
    }
}
</script>

<style>

</style>