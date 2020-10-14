<template>
    
          <div class="row q-mb-sm">
               <q-input 
                outlined 
                ref="name"
                @input="$emit('update:name',$event)"
                :value="name" 
                :rules="[val => !!val || 'Field is required']"
                autofocus
                label="Task Name"
                clearable/>
          </div>
</template>

<script>
export default {
    props:['name']
}
</script>

<style lang="stylus" scoped>

</style>