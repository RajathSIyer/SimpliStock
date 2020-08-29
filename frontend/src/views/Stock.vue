<template>
  <div>
    <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h2>Customize your form preferences to allow our stock picker to generate</h2>
      <br>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
  
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="number"
          required
          placeholder="Enter your investment amount in USD"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="industries"
          required
        ></b-form-select>
      </b-form-group>

      

      <b-button type="submit" variant="primary">Generate Recommendations</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
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
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
      }
    }
  }
</script>