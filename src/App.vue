<template>
  <!-- <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$store.state.user" />
    <router-link to="/" class="navbar-brand">Home</router-link> 
    <router-link to="/about" class="navbar-brand">About</router-link>


  
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div> -->
  
  
    <button @click="$store.dispatch('logout')">Logout</button>
  
  <router-view/>
</template>

<script>
  import {onBeforeMount} from 'vue'
  import {useStore} from 'vuex'

export default {
  setup(){
    const store = useStore()
    onBeforeMount(()=> {
      store.dispatch('fetchUser')
    })
  }
}
</script> 
<style>

*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
