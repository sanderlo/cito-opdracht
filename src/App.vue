<template>
  <div>
    <div class="container"> 
      <h1>Natuurkunde</h1>
      <div id="domein-list">
        <Domein v-for="(domein) in $store.state.domeinen" :key="domein" :domein="domein" />
      </div>
      <Modal />
    </div>
  </div>
</template>

<script setup>

import Domein from './components/Domein.vue';
import Modal from './components/Modal.vue';
import data from './assets/data/domeinen-natuurkunde.json';
import { useStore } from 'vuex'
import { onMounted } from 'vue';

const store = useStore()

onMounted(() => {
    store.commit('setData', data);
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 18px;
  background-image: url('./assets/image/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    padding: 40px 5px 5px 5px;
  }

  .container {
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: 24px;
    padding-left: 35px;
  }

  h2 {
    font-size: 16px;
    margin: 0;
    padding: 10px 5px;
  }

  .v-list--density-default.v-list--one-line .v-list-item {
    padding: 5px 10px;
    min-height: 36px;
  }

  #domein-list {
    columns: 3 300px;
    color: #7e9191;
    background: white;
    border: 1px solid rgba(0,0,0,.2);
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.3rem;
    box-shadow: 1px 2px 2px #888888;
    padding: 30px;

    > div {
      break-inside: avoid-column;
      vertical-align: top;
    }
  }
}
</style>
