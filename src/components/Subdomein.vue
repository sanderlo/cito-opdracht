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
  const title = props.subdomein.Id + ' ' + props.subdomein.Naam;
  if(store.state.modal.title == title){
    store.dispatch('hideModal');
  }
  else{
    store.dispatch('showModal', {
      title: title,
      content:  props.subdomein.Omschrijving
    });
  }
}
</script>

<style lang="scss">
.subdomein {
    color: $primary-color;
    cursor: pointer;
        &:hover{
          background-color: $secondary-color;
        } 
}
</style>