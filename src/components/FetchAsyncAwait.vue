<template>
  <section>
    <h2>FetchAsyncAwait</h2>
    <pre>Email : {{dataApi2}}</pre>
  </section>
</template>

<script>

export default {
  name: "FetchAsyncAwait",

  data() {
    return {
      dataApi2: []
    };
  },

  async created() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.dataApi2 = data[0].email;
  }
};

</script>