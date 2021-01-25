<template>
  <section>
    <h2>AxiosAsyncAwait</h2>
    <pre>Lng : {{dataApi5}}</pre>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "AxiosAsyncAwait",
  
  data() {
    return {
      dataApi5: null
    };
  },
  async created() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.dataApi5 = response.data[0].address.geo.lng;
  }
};

</script>