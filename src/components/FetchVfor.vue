<template>
  <section>
    <h2>FetchVfor</h2>
    <pre>{{ info }}</pre>

  <h1>v-for + filter data</h1>
  <div v-for="data in info" v-bind:key="data.id">
    {{ data.description }}:
    <span v-html="data.symbol"></span>{{ data.rate_float | decimal }}
  </div>

  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "FetchVfor",
  data() {
    return {
      info: null
    };
  },
  filters: {
    decimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  }
};

</script>