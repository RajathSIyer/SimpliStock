<template>
  <div>
    <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h2>Customize your form preferences to allow our stock picker to generate</h2>
      <br>

      <!--Forms the industries dropdown menu -->
      <b-form-group id="input-group-1"  label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.food"
          :options="industries"
          required
          v-on:change="addIndustry"
        ></b-form-select>
      </b-form-group>

      <!--Forms the invesment amount text box -->
      <b-form-group
        id="input-group-2"
        label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          required
          placeholder="Enter Your Investment Amount in USD"
          v-on:change="addPrice"
        ></b-form-input>
      </b-form-group>

      <!--Forms the dividend amount text box -->
      <b-form-group
        id="input-group-3"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          type="number"
          required
          placeholder="Enter Desired Minimum Yield Rate as a Percentage"
          v-on:change="addDividend"
        ></b-form-input>
      </b-form-group>
      
      <!--Creates the Volatillity option checkbox -->
      <b-form-group label="Choose Level of Volatillity" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="volatillitySelected"
        :options="options"
        :aria-describedby="ariaDescribedby"
      >
      </b-form-checkbox-group>
    </b-form-group>
      
      <!--Forms the Generate Recommendations button -->
      <b-button type="submit" variant="primary">Generate Recommendations</b-button>
    

    <br><br>

    <label for="tags-basic">Current Search Criteria</label>
    <br>

    <!--Following 4 groups creates the selected parameters section -->
    <b-form-group>
    <b-form-tags
      input-id="tag0"
      v-model="chosenIndustries"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Industry Parameters"
    ></b-form-tags>
    </b-form-group>

    <b-form-group>
    <b-form-tags
      input-id="tag1"
      v-model="price"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Price Parameter"
      add-button-text="$"
    ></b-form-tags>
    </b-form-group>

    <b-form-group>
    <b-form-tags
      input-id="tag2"
      v-model="dividend"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Dividend Yield Parameter"
    ></b-form-tags>
    </b-form-group>

    <b-form-group>
    <b-form-tags
      input-id="tag3"
      v-model="volatillitySelected"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Volatillity Parameters"
    ></b-form-tags>
    </b-form-group>

    <br><br><br><br>
    <!--Forms the Market News Button -->
    <b-form-group>
    <b-button size="lg" variant="primary">Market News</b-button>
    </b-form-group>
    </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    name:"stock",
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        industries: [{ text: 'Select an Industry', value: null }, 'Diversified Consumer Services', 'Airlines', 'Insurance', 'Communications', 'Building', 'Technology', 'Logistics & Transportation', 'Aerospace & Defense', 'Banking', 'Biotechnology', 'Health Care', 'Pharmaceuticals', 'Semiconductors', 'Professional Services', 'Chemicals', 'Life Sciences Tools & Services', 'Construction', 'Hotels, Restaurants & Leisure', 'Electrical Equipment', 'Real Estate', 'Financial Services', 'Machinery', 'Food Products', 'Telecommunication', 'Energy ', 'Media', 'Retail', 'Textiles, Apparel & Luxury Goods', 'Commercial Services & Supplies', 'Road & Rail', 'Utilities', 'Automobiles', 'Trading Companies & Distributors', 'Beverages', 'Consumer products', 'Auto Components', 'Metals & Mining', 'Leisure Products', 'Distributors', 'Marine', 'Industrial Conglomerates', 'Paper & Forest', 'Transportation Infrastructure', 'Packaging'],
        show: true,
        volatillitySelected: [],
        options: [
          { text: 'High Volatillity', value: 'High Volatillity' },
          { text: 'Medium Volatillity', value: 'Medium Volatillity' },
          { text: 'Low Volatillity', value: 'Low Volatillity' }
        ],
        chosenIndustries: [],
        price: ['$0'],
        dividend: ['0%']
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$router.push('/results')
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      addIndustry(evt){
        // Keeps track of which industries were selected so we can search multiple at the same time
        if(this.chosenIndustries.indexOf(evt) === -1){
        this.chosenIndustries.push(evt);
      }},
      addPrice(evt){
        // Re assigns the price array and makes sure its of proper format($xxx)
        this.price = ['$' + evt];
      },
      addDividend(evt){
       // Re assigns the dividend array and makes sure its of proper format(xxx%)
        this.dividend = [evt + '%'];
      }
      }
  }
</script>