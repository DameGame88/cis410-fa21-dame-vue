<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ juice.LabelName }}</h2>
        <br />

        <p>
          Flavor: <br /><strong>{{ juice.Flavor }}</strong>
        </p>
        <p>
          Nicotine Level: <br /><strong>{{ juice.NicotineLevel }}</strong>
        </p>
        <p>
          Style: <br /><strong>{{ juice.StyleName }}</strong>
        </p>
        <p>
          Price: <br /><strong>{{ formattedBudget }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/ejuice/${this.$route.params.pk}/review`"
      ><button class="btn btn-success">Add a Review</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Review
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    juice() {
      let allEJuice = this.$store.state.EJuice;

      let thisEJuice = allEJuice.find((aEJuice) => {
        return aEJuice.EJuicePK == this.$route.params.pk;
      });

      return thisEJuice;
    },
    formattedBudget() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.juice.Price);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
