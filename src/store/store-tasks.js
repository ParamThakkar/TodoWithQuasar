import { uid } from 'quasar';
import Vue from 'vue'; 
const state = {
    tasks:{
        'ID1':{
          
          name:"Go to shop",
          completed: false,
          dueDate: '10/13/2020',
          dueTime: '15:00'
        },
        'ID2':{
          
          name:"Buy banana",
          completed: false,
          dueDate: '10/15/2020',
          dueTime: '14:00'
        },
        'ID3':{
          
          name:"Buy apple",
          completed: false,
          dueDate: '10/14/2020',
          dueTime: '13:00'
        }
    },
    search:'',
    sort:'name'
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
    Vue.set(state.tasks , payload.id , payload.task)
  },
  setSearch(state,value)
  {
    state.search = value;
  },
  setSort(state , value)
  {
    
    state.sort = value;
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
  },
  setSearch({commit},value)
  {
    
    commit('setSearch',value);
  },
  setSort({commit},value)
  {
    commit('setSort' , value);
  }
}

const getters = {
  tasksSorterd:(state)=>{
    let taskSorterd = {},
      keyOrdered = Object.keys(state.tasks)


    

      keyOrdered.sort((a,b)=>{
        let task1 = state.tasks[a][state.sort].toLowerCase();
        let task2 = state.tasks[b][state.sort].toLowerCase();

        if(task1>task2) return 1
        else if(task2 > task1) return -1  

        else return 0
      });

      keyOrdered.forEach((key)=>{
        
        taskSorterd[key] = state.tasks[key];
      })

      

      return taskSorterd;
  },
  tasksFiltered:(state,getters)=>{
    let taskFiltered = {};
    if(state.search)
    {
      Object.keys(getters.tasksSorterd).forEach((key)=>{
        let searchText = state.search.toLowerCase();
        let taskNames = state.tasks[key].name.toLowerCase();
        if(taskNames.includes(searchText))
        {
          taskFiltered[key] = state.tasks[key];
        }
      })
      return taskFiltered;
    }
    return getters.tasksSorterd;
  },
  tasksToDo:(state,getters)=>{
        let tasks = {}
        let filteredTasks = getters.tasksFiltered;
        Object.keys(filteredTasks).forEach(function(key){
          let task = filteredTasks[key];
          if(!task.completed)
          {
            tasks[key] = task;
          }
        });
        return tasks;
    },
    tasksCompleted:(state)=>{
      let tasks = {}
      Object.keys(state.tasks).forEach(function(key){
        let task = state.tasks[key];
          if(task.completed)
          {
            tasks[key] = task;
          }
      });
      return tasks;
    }
}

export default{
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}