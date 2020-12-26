<template>
  <div class="home">
    <div class="bg">
     <h1 id="main-title">Meet The Platform That Teaches You To Invest</h1>
     <h2 id="second-title"> Subheading goes here smaller font</h2>
     <button id="banner-button" class="btn-success" >Find Stocks</button>
      </div>
       
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  
}
</script>

<style>


.bg {
  /* The image used */
  background-image: url("https://i.ibb.co/qmYhKfc/Stock-graph-market-Finance-chart-Growth-business-blue-vector-background-Bond-data-online-bank.jpg");

  /* Full height */
  height: 80vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#main-title{
  padding-top: 10%;
  color:white;
  font-weight: 700;
  font-size: 3em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#second-title{
  color:white;
  font-weight: 300;
  font-size: 2em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


#banner-button{
   border: 0;
font-size: 30px;
padding: 20px;
width: 300px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
border-radius: 20px;
 box-shadow: none;
margin-top: 5%;
font-weight: 300;
}

</style>
