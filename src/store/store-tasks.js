import { uid } from 'quasar';
import Vue from 'vue'; 
const state = {
    tasks:{
        // 'ID1':{
          
        //   name:"Go to shop",
        //   completed: false,
        //   dueDate: '10/15/2020',
        //   dueTime: '14:00'
        // },
        // 'ID2':{
          
        //   name:"Buy banana",
        //   completed: false,
        //   dueDate: '10/15/2020',
        //   dueTime: '14:00'
        // },
        // 'ID3':{
          
        //   name:"Buy apple",
        //   completed: false,
        //   dueDate: '10/15/2020',
        //   dueTime: '14:00'
        // }
    }
}

const mutations = {
  updateTask(state , payload)
  {
    Object.assign(state.tasks[payload.id] , payload.updates)
  },
  deleteTask(state ,id)
  {
    Vue.delete(state.tasks , id);
  },
  addTask(state ,payload)
  {
    console.log(payload.id);
    Vue.set(state.tasks , payload.id , payload.task)
  }
}
 
const actions = {
  updateTask({commit} , payload){
    commit('updateTask',payload);
  },
  deleteTask({commit},id)
  {
    commit('deleteTask',id);
  },
  addTask({commit},task)
  {
    let taskId = uid();
    
    let payload = {
      id: taskId,
      task : task
    }
    commit('addTask',payload);
  }
}

const getters = {
    tasks:(state)=>{
        return state.tasks
    }
}

export default{
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}