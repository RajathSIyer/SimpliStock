<template>
  <div id="app">
    <div class="mb-4">
  <b-navbar class="justify-content-center" type="dark" variant="dark">
    <b-navbar-brand>Simplistock</b-navbar-brand>
    <b-navbar-nav >
      <b-nav-item :to="item.route" v-for="item in items" :key="item.message" class="ml-5 navitem"> {{item.message}}</b-nav-item>
</b-navbar-nav >
  </b-navbar>
</div>
    <router-view/>
  </div>
</template>
<script>
export default {
  el: '#example-1',
  data () {
    return {
      items: [
        { message: 'Home', route: '/' },
        { message: 'Investing Tips', route: '/tips' },
        { message: 'Stock Picker', route: '/stock' },
        { message: 'About', route: '/about' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#navitem
{
  font: italic!important;
}
</style>
