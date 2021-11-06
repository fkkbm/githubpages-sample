<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><v-btn class="ma-2">
        Home<v-icon small>mdi-home</v-icon>
      </v-btn></router-link>
      <router-link to="/about"><v-btn class="ma-2">
        About<v-icon small>mdi-pencil</v-icon>
      </v-btn></router-link>
      <router-link to="/history/12345"><v-btn class="ma-2">
        history<v-icon small>mdi-book</v-icon>
      </v-btn></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
