<template>
<v-content>
  <v-toolbar>     
    <v-toolbar-title class="headline text-uppercase">
      <span class="fontify colorize embiggen">mike </span>
      <span class="fontify colorize embiggen font-weight-light text-lowercase">bixel</span>
    </v-toolbar-title>          
      <v-spacer></v-spacer> 
      <a href="https://www.linkedin.com/in/michael-bixel-2285b28b/" target="blank"><font-awesome-icon class="embiggen" :icon="['fab', 'linkedin']"></font-awesome-icon></a>  
      <a href="https://github.com/BikeMixel" target="blank"><font-awesome-icon class="embiggen" :icon="['fab', 'github']"></font-awesome-icon></a>
    <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn
        slot="activator"
        dark
        fab
        small>
       <v-icon>widgets</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click=""
          :to="item.route">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
  </v-toolbar>
</v-content>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Home',
          route: '/' 
        },
        { title: 'Bio',
          route: '/bio'
        },
        { title: 'Contact',
          route: '/contact'
        },
        { title: 'Portfolio', 
          route: '/portfolio'
        }
      ]
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: black
  }
  a:hover {
    color: white
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
