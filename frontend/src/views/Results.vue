<template> 
    <div>
        <b-button variant = 'primary' v-on:click = 'onSubmit'> Return to Stock Picker </b-button>
        <br><br>
        <b-form-group class = "results">
        <stock-result currPrice = '2' companyName = 'yoyo' companySymbol = 'AAA' companyDescription = 'this is a good company' 
        companyNews = 'great' :chartdata = 'this.chartdata' :options = 'this.options'> </stock-result> 
        <br><br><br><br>
        <stock-result> </stock-result> 
        <br><br><br><br>
        <stock-result> </stock-result> 
        <br><br>
        </b-form-group>
    </div>

</template>

<script>
import StockResult from '../components/StockResult'
export default {
    name: "Results",
    props: ['resultStocks'],
    components: {
        'stock-result': StockResult,
    },

    methods: {
        onSubmit(evt) {
        evt.preventDefault()
        this.$router.push('/stock')
      }
      
    },
    data: function(){return{
      chartdata: {
      labels: ['One piece', 'Tower of god', 'Solo leveling', 'Code Geass'],
      datasets: [
        {
          label: 'Goated Anime scale',
          backgroundColor: '#f87979',
          data: [40, 35,30,25]
        }
      ]
    },
    options: {
      responsive: false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    }
}


}
</script>
<style scoped>
.results{
    align-content: left;
}
</style>
