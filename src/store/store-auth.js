import { firebaseAuth } from 'boot/firebase'
import {LocalStorage} from 'quasar'
import {showErrorMessage} from 'src/functions/show-error-message-function'

import Vue from 'vue'
const state = {
    loggedIn : false
}

const actions={
    RegisterUser({} , payload)
    {
        firebaseAuth.createUserWithEmailAndPassword(payload.email , payload.password)
            .then(response=>{
                
            })
            .catch(error=>{
                showErrorMessage(error.message);
            })
    },
    loginUser({} , payload)
    {
        firebaseAuth.signInWithEmailAndPassword(payload.email , payload.password)
            .then(response=>{
                
            })
            .catch(error=>{
                showErrorMessage(error.message);
            })
    },
    logoutUser()
    {
        firebaseAuth.signOut();
    },
    handleAuthStateChange({commit , dispatch})
    {
        firebaseAuth.onAuthStateChanged(user=>{
            if(user)
            {
                commit('setSignIn',true);
                LocalStorage.set('loggedIn',true);
                this.$router.push('/');
                dispatch('tasks/fbRead',null , {root:true})
                
            }
            else{
                commit('setSignIn',false);
                LocalStorage.set('loggedIn',false);
                this.$router.replace('/auth');
            }
        })
    }
}

const mutations={
    setSignIn(state , value)
    {
        state.loggedIn = value
    }
}

const getters={
}

export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}

