<template>
  <div id="app">
    <div id="nav">
      <v-btn class="ma-2">
        <router-link to="/">Home</router-link><v-icon small>mdi-home</v-icon>
      </v-btn>
      <v-btn class="ma-2">
        <router-link to="/about">About</router-link><v-icon small>mdi-pencil</v-icon>
      </v-btn>
      <v-btn class="ma-2">
        <router-link to="/history">History</router-link><v-icon small>mdi-book</v-icon>
      </v-btn>
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
