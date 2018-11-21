<template>
<v-content>
  <v-footer
    absolute
    >
    <v-spacer></v-spacer>
    <span class="fontify colorize">__Made with VueJs and Vuetify__</span><font-awesome-icon class="less_embiggen colorize_vue" :icon="['fab', 'vuejs']"></font-awesome-icon>
    <v-spacer></v-spacer>
    <span class="fontify"><div>&copy; {{ new Date().getFullYear() }}</div></span>
  </v-footer>
</v-content>
</template>

<style scoped>
    .endarken {
        color: black
    }
    .less_embiggen {
        font-size: 26px
    }
    .v-footer {
        background-image: linear-gradient(to left,gainsboro,gray,black);
    }
    .colorize_vue {
        color: mediumspringgreen
    }
</style>