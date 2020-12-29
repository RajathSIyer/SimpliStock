<template>
  <div id="app">
  
    <div class="">
  <b-navbar class="">
    <b-navbar-brand ><img src="https://i.ibb.co/B2MQcsH/3rd-simpli.png" class="logo"></b-navbar-brand>
    <b-navbar-nav class="justify-content-center">
      <b-nav-item :to="item.route" v-for="item in items" :key="item.message" class=" navitem"> <p class="navlink">{{item.message}}</p></b-nav-item>
</b-navbar-nav >
  </b-navbar>
</div>
    <router-view/>

  <div class="footer">
    <h8> Copyright &#169; Simplistock 2020 </h8>
  </div>

  </div>

</template>

<script>
export default {
  el: '#example-1',
  data () {
    return {
      items: [
        { message: 'Home', route: '/' },
        { message: 'Stock Picker', route: '/stock' },
        { message: 'Get Started with Investing', route: '/tips' },
        { message: 'About', route: '/about' }
      ]
    }
  }
}



</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navitem
{
  font: italic!important;
  margin-right: 5%;
  margin-left: 5%;
  font-size: 18px;
  border-radius: 20px;
  padding:10px
}


.navlink{
margin-top:10px;
color:black;
opacity: 80%;
font-family: "Raleway";
}

.navlink :hover{
  color:black;
opacity: 100%;
}

.logo{
  position: relative;
  left:20px;
  height:60px;
}

.navbar-nav{
  width:100%;
}

html, body{
   width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
.footer{
  background-color: #383838;
  bottom:0;
  position:relative;
  width:100%;
}

h8{
  color:#808080;
}

</style>
