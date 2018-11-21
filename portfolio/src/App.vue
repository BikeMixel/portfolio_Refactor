<template>
  <v-app>
    <v-content class="mainContent">
      <app-head/>
        <v-container>
        <v-layout>
        <v-flex md4 sm12>
          <app-bio/>
        </v-flex>
        <v-flex md4 sm12>
          <app-projects/>
        </v-flex>
        <v-flex md4 sm12>
          <app-contact/>
        </v-flex>
        </v-layout>
        </v-container>
      <app-foot/>
    </v-content>
  </v-app>
</template>

<script>
import head from './components/head'
import foot from './components/foot'
import bio from './components/bio'
import contact from './components/contact'
import projects from './components/project'

export default {
  name: 'App',
  components: {
    'app-head': head,
    'app-foot': foot,
    'app-bio': bio,
    'app-contact': contact,
    'app-projects': projects
  },
  data () {
    return {
      //
    }
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
