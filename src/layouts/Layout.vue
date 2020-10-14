<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
       
        <q-toolbar-title
          class="absolute-center"
        >
          Todo App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        
        <q-route-tab 
          v-for="link in essentialLinks"
          :key="link.link"
          :to="link.link"
          :label="link.title"
          :icon="link.icon"
          >
            
        </q-route-tab>
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="768"
      :width="250"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-5"

        >
          Essential Links
        </q-item-label>
        <q-item 
          v-for="(link) in essentialLinks"
          :key="link.link" 
          :to="link.link" 
          exact 
          clickable
          class='text-grey-5'>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            {{link.title}}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 767px){
    .q-footer{
      display:none;
    }
    .q-drawer .q-router-link--exact-active{
      color: white !important;
         
    }
  }
</style>