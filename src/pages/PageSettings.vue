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
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  methods:{
    ...mapActions('settings',['setFormat','setListFormat'])
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
