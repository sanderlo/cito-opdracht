<template>
  <div class="subdomein">
      <h2 v-text="subdomein.Naam" v-on:click="toonInfo()" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  subdomein: Object
})

function toonInfo() {
  store.dispatch('showModal', {
      title: props.subdomein.Naam,
      content: props.subdomein.Omschrijving
  });
}

</script>

<style lang="scss">
.subdomein {
    h2 {
        cursor: pointer;
        &:hover{
            background-color: #77cfcc;
        }  
    }
}
</style>