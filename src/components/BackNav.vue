<template>
  <v-col id="back" style="text-align: start; display: flex; align-items: center">
    <v-label @click="back" ><img src="assets/icon-menu-back.png" alt="" /></v-label>
    <v-label>&nbsp;&nbsp;&nbsp;</v-label>
    <v-label style="margin-left: 10px"> {{label}} </v-label>
  </v-col>
</template>

<script>
// @ is an alias to /src

export default {
  name: "BackNav",
  props: {
    label: String,
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#back label {
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 18px;
  color: #000000;
}
</style>
