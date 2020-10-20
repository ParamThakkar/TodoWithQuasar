import { LocalStorage } from "quasar";

const state = {
    settings:{
        show12HourFormat:false,
        showListInOneList:false,
    }
}

const actions={
    setFormat({commit , dispatch} , value)
    {
        commit('setFormat',value);
        dispatch('saveSettings')
    },
    setListFormat({commit , dispatch} , value)
    {
        commit('setListFormat',value);
        dispatch('saveSettings')
    },
    saveSettings({state})
    {
        LocalStorage.set('settings',state.settings)
    },
    getSettings({commit})
    {
        commit('saveSettings',LocalStorage.getItem('settings'))
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
    },
    saveSettings(state , value)
    {
        Object.assign(state.settings , value)
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

