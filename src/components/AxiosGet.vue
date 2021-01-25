<template>
  <section>
    <h2>AxiosGet</h2>
    <pre>Lat : {{dataApi4}}</pre>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "AxiosGet",

  data() {
    return {
      dataApi4: null
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.dataApi4 = response.data[0].address.geo.lat);
  }
};

</script>