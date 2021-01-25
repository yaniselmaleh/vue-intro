<template>
  <section>
    <h2>FetchGet</h2>
    <pre>Name : {{dataApi}}</pre>
  </section>
</template>

<script>

export default {
  name: "FetchGet",

  data() {
    return {
      dataApi: []
    };
  },

  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => (this.dataApi = data[0].name));
  }
};

</script>