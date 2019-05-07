<template>
  <div id="app">
    <h1 class="text-center">A list of sport matches</h1>
    <hr/>

    <b-container>
      <matches-list/>
    </b-container>
  </div>
</template>

<script>
import MatchesList from '@/components/MacthesList'

export default {
  name: 'app',
  components: {
    MatchesList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
