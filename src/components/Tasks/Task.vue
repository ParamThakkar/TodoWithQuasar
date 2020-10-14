<template>
    
      <q-item 
        @click="updateTask({id:id , updates:{completed : !task.completed}})"
        clickable
        :class="!task.completed?'bg-orange-1':'bg-green-1'"
        v-ripple
        bordered
        >
        
        <q-item-section side top>
          <q-checkbox :value="task.completed"
            class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label
            :class="{'text-strikethrough':task.completed}"
          >{{task.name}}</q-item-label> 
          
        </q-item-section>
         <q-item-section side top
            v-if="task.dueDate">
           <div class="row">
             <div class="column justify-center">
               <q-icon 
                name="event"
                size="18px"
                class="q-mr-xs">
                </q-icon>
              </div>
              <div class="column">
                <q-item-label
                 class="row justify-end"
                 caption>
                    {{task.dueDate}}
                </q-item-label>
                <q-item-label 
                  class="row justify-end"
                  caption>
                  <small>{{task.dueTime}}</small>
                </q-item-label>
              </div>
              
           </div>
         </q-item-section>
         <q-item-section side top>
           <q-btn 
           @click.stop="promptDelete(id)"
           flat 
           round 
           dense
           color="red" 
           icon="delete" />
         </q-item-section>
         

      </q-item>
      
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
 props:['task','id'],
 methods:{
   
   ...mapActions('tasks',['updateTask','deleteTask']),
   promptDelete(id)
   {
     this.$q.dialog({
        title: 'Confirm',
        message: 'Really want to delete?',
        cancel: {
          color:'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id);
      })
   }
 }
}
</script>

<style scoped>
  
</style>
