<template>
    
          <div class="row q-mb-sm">
               <q-input 
                outlined 
                ref="name"
                @input="$emit('update:name',$event)"
                :value="name" 
                :rules="[val => !!val || 'Field is required']"
                autofocus
                v-select-all
                label="Task Name"
                clearable/>
          </div>
</template>

<script>
import {selectAll} from 'src/directives/selectAll'
export default {
    props:['name'],
    directives:{
        selectAll
    }
}
</script>

<style lang="stylus" scoped>

</style>