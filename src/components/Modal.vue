<template>
  <div class="modal" v-if="modal.show">
    <span class="modal-close" v-on:click="hideModal">X</span>
      <h2 v-text="modal.title" />
      <div v-text="modal.content" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const modal = computed(() => store.state.modal)

function hideModal() {
  store.dispatch('hideModal');
}

</script>

<style scoped lang="scss">
.modal {
  background-color:  white;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 0.3rem;
  box-shadow: 1px 2px 2px #888888;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

  > div {
    padding: 5px;
  }

  .modal-close{
    position: absolute;
    top: 8px;
    right: 10px;
    cursor: pointer;
  }
}
</style>
