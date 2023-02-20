<template>
  <v-container id="main-container" :style="'background:' + (color ?? '#bde7e3')">
    <v-row id="main-container-row">
      <v-col id="value" cols="12" align-self="end">
        <v-label>{{ value ?? "0" }}</v-label>
      </v-col>
      <v-col id="label" cols="12" align-self="start">
        <v-label>{{ label ?? "Label" }}</v-label>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardDatas",
  props: {
    value: String,
    label: String,
    color: String,
  },
};
</script>

<style>
#main-container {
  padding-top: 90%;
  position: relative;
  border-radius: 15px;
}

#main-container-row {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  padding-left: 25px;
  padding-top: 25px;
}

#main-container-row .col {
  text-align: start;
}

#value label {
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 18px;
  color: #000000;
}

#label label {
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  white-space: pre-wrap;
}
</style>
