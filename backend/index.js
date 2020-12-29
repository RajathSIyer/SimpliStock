const express = require('express')
const cors = require('cors');

const app = express();
let reqs = [];

// Middleware
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.post('/get-stocks/', (req, res) => {
    console.log("Request received");
    res.send("Hello World");
});

app.get('/get-stocks/', (req, res) => {
    console.log("Request received");
    res.send("Hello World");
});

//STEP 1
let indo = "Airlines"
// The file can be replaced with condensed
// const users = require("./condensed"); 
// let x = Object.keys(users).length
let array = []
// array.push(users[indo])
array = array[0]
// check against indo let to confirm industry

//STEP 2
//Total amount/3 look at <= value
let sum = 200 //place holder till we link front-end
sum = sum/3
let hell;
//let request = require("request");
//request('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=UCZGZM0NOUVJDF8Z', { json: true }, (err, res, body) =>//
//{
//callback(JSON.parse(body));
//});
//console.log(month)
cost = [] //dummy variable to simulate cost
final = [] // array to store stocks within the cost threshold
// for (let a = 0; a<array.length; a++)
// {
//     cost[a] = Math.floor(Math.random()*100)
// }

// for (let a = 0; a<array.length; a++)
// {
// //API CALL HERE
//     if (cost[a] <= sum)
//     {
//        final.push(array[a]) 
//     }
// }

//STEP 3
//Open/Close, % growth or loss month over month and sum
// Replace alpha with filename
// const month = require("./alpha"); 
let counter = 0;
let month_list = []
// for (let key in month['Monthly Adjusted Time Series'])
// {
//     counter++;
//     month_list.push(key)
//     if (counter == 6)
//     {
//         break;
//     }
// }
let per = 0;
for (counter = 0; counter < month_list.length; counter++)
{   
    
    let open = month['Monthly Adjusted Time Series'][month_list[counter]]['1. open'] 
    let close = month['Monthly Adjusted Time Series'][month_list[counter]]['4. close']
    per += ((close-open)/open)*100;
    if (counter == 0)
        {    
        curr_cost = close
        }
}
per = Math.round(per*100)/100;
//console.log(per)

//STEP 4 
// Future value
// const axios = require('axios');
// (async () => {
// let per2 = await frank();
// final_per = per*0.7+per2*0.3
// final_per = Math.round(final_per*100)/100
// console.log("after promise",per, per2, final_per);
// })()

// async function frank()
//  {
//   try {
//     const response = await axios.get('https://finnhub.io/api/v1/stock/price-target?symbol=IBM&token=bsq93d0fkcbdk5653ho0')
//     let per2 = ((response.data.targetMean-curr_cost)/curr_cost)*100;
//     per2 = Math.round(per2*100)/100;
//     console.log(per,per2);
//     return per2;
//   } catch (error) {
//     console.log(error);
//   }
// };
