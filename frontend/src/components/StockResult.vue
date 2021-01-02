<template>
    
    <span>
    <stocks-info :currPrice = 'this.currPrice' :companyName = 'this.companyName' :companySymbol = 'this.companySymbol' :companyDescription = 'this.companyDescription'
    :companyNews = 'this.companyNews'></stocks-info>
    <div class = 'temp'>
    <stock-graph :chartdata = 'this.chartdata' :options = 'this.options'> </stock-graph>
    </div>
    </span>

</template>


<script>
import StockInfo from './StockInfo'
import StockGraph from './StockGraph'
export default {
    name: 'stockresult',
    props: ['currPrice', 'companyName', 'companySymbol', 'companyDescription', 'companyNews','chartdata', 'options'],

    components: {
        'stocks-info': StockInfo,
        'stock-graph': StockGraph
    }
}
</script>
<style>
  .temp {
    max-width: 600px;
    max-height: 400px;
    margin:  100px auto;
  }
</style>