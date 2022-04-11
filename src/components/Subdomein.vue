<template>
  <v-list-item class="subdomein" rounded="xl" v-on:click="toonInfo()" >
      <span v-text="subdomein.Naam" />
  </v-list-item>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  subdomein: Object
})

function toonInfo() {
  store.dispatch('showModal', {
      title: props.subdomein.Id + ' ' + props.subdomein.Naam,
      content:  props.subdomein.Omschrijving
  });
}

</script>

<style lang="scss">
.subdomein {
    cursor: pointer;
        &:hover{
          // border: 1px solid #77cfcc;
          background-color: #77cfcc;
        } 
}
</style>