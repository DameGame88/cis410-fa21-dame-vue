<template>
  <div>
    <h1>EJuice</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Label Name</th>
          <th>Flavor</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aEJuice in theEJuice" :key="aEJuice.EJuicePK">
          <th>{{ aEJuice.LabelName }}</th>
          <th>{{ aEJuice.Flavor }}</th>
          <th>{{ aEJuice.Price }}</th>
          <th>
            <router-link :to="`/EJuice/${aEJuice.EJuicePK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theEJuice() {
      return this.$store.state.EJuice;
    },
  },
};
</script>

<style></style>
