<template>
  <div class="history">
    <h1>This is an history page</h1>
    <router-link :to="'/history/' + $route.params.id+'/test1'"><v-btn elevation="2" tile>test1</v-btn></router-link>
    <router-link :to="'/history/' + $route.params.id+'/test2'"><v-btn elevation="2" tile>test2</v-btn></router-link>
    <router-view />
    <h2>id = {{ $route.params.id }}</h2>
  </div>
</template>
