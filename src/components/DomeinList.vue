<template>
  <div id="domein-list">
    <div id="matrijs-btn">
      <v-btn color="#153a4d">
        Mijn matrijs<v-icon dark right>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <Domein v-for="(domein) in domeinen" :key="domein" :domein="domein" />
  </div>
</template>

<script setup>
import Domein from './Domein.vue';

import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const domeinen = computed(() => store.state.domeinen)

</script>

<style lang="scss">
#domein-list {
  columns: 3 300px;
  color: #7e9191;
  background: white;
  border: 1px solid rgba(0,0,0,.2);
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 0.3rem;
  box-shadow: 1px 2px 2px #888888;
  padding: 30px;
  position: relative;

  #matrijs-btn{
    position: absolute;
    right: -30px;
    top: 20px;
  }
}
</style>