<template>
    <div>
<b-container class = 'grid'>
  <b-alert show>
  <b-row>
    <b-col><h4 class = 'txt'>Name: {{this.companyName}}</h4></b-col>
    <b-col><h4 class = 'txt'>Current Price Stock: {{this.currPrice}}</h4></b-col>
    <b-col><h4 class = 'txt'>Symbol: {{this.companySymbol}} </h4></b-col>
    <br><br><br><br>
    <div class="w-100"></div>
    <b-col><h4 class = 'txt'>Description: {{this.companyDescription}}</h4> </b-col>
    <b-col><h4 class = 'txt'>News: {{this.companyNews}}</h4></b-col>
    <b-col></b-col>
  </b-row>
  </b-alert>
</b-container>
    </div>
</template>

<script>
export default {
    name: 'stockinfo',
    props: ['currPrice', 'companyName', 'companySymbol', 'companyDescription', 'companyNews'],
    }

</script>

<style scoped>
.grid{
    text-align: left;
}
.txt{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>