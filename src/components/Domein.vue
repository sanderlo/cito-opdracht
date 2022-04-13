<template>
    <div class="domein">
        <h2>{{ props.domein.Naam }}</h2>
        <v-list>
            <Subdomein v-for="(subdomein) in props.domein.Subdomeinen" :key="subdomein.Id" :subdomein="subdomein" />
        </v-list>
    </div>
</template>

<script setup>
import Subdomein from './Subdomein.vue';

const props = defineProps({
  domein: Object
})
</script>

<style lang="scss" scoped>
    .domein {
        h2 {
            border-bottom: 3px solid $primary-color;
            color: $primary-color;         
        }
    }
</style>