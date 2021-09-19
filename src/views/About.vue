<template>
  <div class="about">
    <h1>{{titulo}}</h1>
    <h2 v-for="(item,index) in tareasState" :key="index">{{item}}</h2>
    <h3>Contador: {{contador}}</h3>
    <button @click="aumentarContador(1)">+</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState('tareas', ['tareasState']),
    ...mapState(['titulo']),
    ...mapState('contador', ['contador']),
  },
  methods: {
    ...mapMutations('contador', ['aumentarContador'])
  }
}
</script>
