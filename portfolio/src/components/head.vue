<template>
<v-content>
  <v-toolbar>       
    <v-toolbar-title class="headline text-uppercase">
      <span class="fontify colorize embiggen">mike </span>
      <span class="fontify colorize embiggen font-weight-light text-lowercase">bixel</span>
    </v-toolbar-title>          
      <v-spacer></v-spacer>
      <a href="https://github.com/BikeMixel" target="blank"><font-awesome-icon class="embiggen" :icon="['fab', 'github']"></font-awesome-icon></a>
  </v-toolbar>
</v-content>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: black
  }
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
</style>
