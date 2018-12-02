<template>
  <v-app>
    <div id="app">
    <v-content class="mainContent">
      <app-head/>

      <router-view></router-view>

      <app-foot/>
    </v-content>
    </div>
  </v-app>
</template>

<script>
import head from './components/head'
import foot from './components/foot'


export default {
  name: 'App',
  components: {
    'app-head': head,
    'app-foot': foot,
  }
}
</script>

<style>
  .v-toolbar {
    background-image: linear-gradient(to left,gainsboro,gray,black)
  }
  .fontify {
    font-family: 'Permanent Marker', cursive
  }
  .colorize {
    color: white
  }
  .embiggen {
    font-size: 42px
  }
  .mainContent {
    background-image: radial-gradient(gainsboro,gray,black)
  }
</style>
