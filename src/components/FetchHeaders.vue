<template>
  <section>
    <h2>FetchHeaders</h2>
    <pre>Adresse : {{dataApi3}}</pre>
  </section>
</template>

<script>

export default {
  name: "FetchHeaders",

  data() {
    return {
      dataApi3: null
    };
  },

  created() {
    const headers = { "Content-Type": "application/json" };

    fetch("https://jsonplaceholder.typicode.com/users", { headers })
      .then(response => response.json())
      .then(data => (this.dataApi3 = data[0].address.street));
  }
};

</script>