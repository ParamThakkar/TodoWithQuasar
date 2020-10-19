<template>
     <q-banner inline-actions class="text-white text-center text-subtitle2 text-bold q-mt-xs"
      :class="bgColor"
     >
      <slot/>
      
    </q-banner>
</template>

<script>
export default {
    props:['bgColor']
}
</script>

<style scoped>
  .q-banner{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>