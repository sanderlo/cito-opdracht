<template>
  <div>
    <div class="container"> 
      <HeaderPart />
      <DomeinList />
      <Modal />
    </div>
  </div>
</template>

<script setup>
import data from './assets/data/domeinen-natuurkunde.json';

import './styles/base.scss'

import HeaderPart from './components/HeaderPart.vue';
import DomeinList from './components/DomeinList.vue';
import Modal from './components/Modal.vue';

import { useStore } from 'vuex'
import { onMounted } from 'vue';

const store = useStore()

onMounted(() => {
    store.commit('setData', data);
})
</script>

<style lang="scss">
.container {
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
} 
</style>
