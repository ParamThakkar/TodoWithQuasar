<template>
  <div class="q-pa-md">
    <q-list bordered padding>

      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="show12HourFormat" val="battery" />
        </q-item-section>
      </q-item>
      

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="showListInOneList" val="battery" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding>

      <q-item-label header>More</q-item-label>

      <q-item 
        tag="label" 
        v-ripple
        @click="visitOurWebsite()">
        <q-item-section>
          <q-item-label>VisitOurWebsite</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="keyboard_arrow_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item 
        tag="label" 
        v-ripple
        @click="emailUs()">
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="keyboard_arrow_right"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { openURL } from 'quasar'
import {mapActions,mapGetters} from 'vuex'

export default {
  methods:{
    ...mapActions('settings',['setFormat','setListFormat']),
    visitOurWebsite()
    {
      openURL('https://google.com')
    },
    emailUs()
    {
      window.location.href = 'mailto:thakkarparam.2000@gmail.com?subject=Todo feedback'
    }
  },
  computed:{
    ...mapGetters('settings',['settings']),
    show12HourFormat:{
      get(){
      return this.settings.show12HourFormat
      },
      set(value){
        this.setFormat(value);
      }
    },
    showListInOneList:{
      get(){
        
        return this.settings.showListInOneList;
      },
      set(value){
        return this.setListFormat(value);
      }
    }
  }
 
}
</script>

<style scoped>
  
</style>
