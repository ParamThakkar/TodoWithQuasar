const state = {
    settings:{
        show12HourFormat:false,
        showListInOneList:false,
    }
}

const actions={
    setFormat({commit} , value)
    {
        commit('setFormat',value);
    },
    setListFormat({commit} , value)
    {
        commit('setListFormat',value);
    }
}

const mutations={
    setFormat(state,value)
    {
        state.settings.show12HourFormat = value;
    },
    setListFormat(state,value)
    {
        state.settings.showListInOneList = value;
    }
}

const getters={
    settings(state){
        return state.settings
    }
}

export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}

