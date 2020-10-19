<template>
    
      <q-item 
        @click="updateTask({id:id , updates:{completed : !task.completed}})"
        clickable
        :class="!task.completed?'bg-orange-1':'bg-green-1'"
        v-touch-hold:1000.mouse="showEditTaskModal"
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
            v-html="$options.filters.searchHighlight(task.name , search)"
          ></q-item-label> 
          
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
                    {{task.dueDate | niceDate}}
                </q-item-label>
                <q-item-label 
                  class="row justify-end"
                  caption>
                  <small>{{dueTime}}</small>
                </q-item-label>
              </div>
              
           </div>
         </q-item-section>
         <q-item-section side top>
           <q-btn 
           @click.stop="showEditTaskModal"
           flat 
           round 
           dense
           color="primary" 
           icon="edit" />
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
         
      <q-dialog v-model="showEditTask">
      <edit-task 
        @close='showEditTask=false'
        v-if="showEditTask"
        :task="task"
        :id="id"/>
    </q-dialog>
      
      </q-item>
      
</template>

<script>
import {mapGetters , mapState} from 'vuex'
import {mapActions} from 'vuex'
import {date} from 'quasar'
export default {
 props:['task','id'],
 data()
 {
   return { 
     showEditTask:false,
   }
 },
 computed:{
   ...mapState('tasks',['search']),
   ...mapGetters('settings',['settings']),
   dueTime(){
     if(this.settings.show12HourFormat)
     {
       return date.formatDate(this.task.dueDate+' '+this.task.dueTime , 'h:mmA');
     }
     return this.task.dueTime;
   }
 },
 methods:{
   showEditTaskModal()
   {
     this.showEditTask = true;
   },
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
 },
 components:{
   'edit-task':require('../../Modals/edit-task').default
 },
 filters:{
   niceDate(value)
   {
     return date.formatDate(value , 'MMM D');
   },
   searchHighlight(value , search)
   {
     
       
     if(search)
     {
       
       let searchRegEx = new RegExp(search,'ig');
       return value.replace(searchRegEx , (match)=>{
         
         return '<span class="bg-yellow-6">'+match+'</span>';
       })
     }
     
     return value;
   }
 }
}
</script>

<style scoped>
  
</style>
