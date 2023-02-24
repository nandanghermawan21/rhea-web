<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.mx-table-date th {
  color: white;
}

.mx-datepicker-range {
  width: 100%;
  height: 50px;
}

.mx-input-wrapper {
  position: relative;
  height: 100% !important;
}

.mx-input {
  height: 100% !important;
  font-family: "Product Sans Light";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color: #000000;
  font-weight: bold;
  background-color: transparent !important;
}

.text-field .v-input__slot {
  box-sizing: border-box !important;
  background: white !important;
  border: 0.5px solid #004b44 !important;
  border-radius: 10px !important;
  margin-top: 10px;
}

.text-field .upload .v-input__slot {
  border-style: dotted !important;
  border-width: 2px !important;
}

.text-field .v-text-field__details {
  display: none;
}

.mx-datepicker-range {
  width: 100% !important;
  box-sizing: border-box !important;
  background: white !important;
  border: 0.5px solid #004b44 !important;
  border-radius: 10px !important;
}

.v-sheet.v-list:not(.v-sheet--outlined) {
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%),
    0px 0px 0px 0px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  background: linear-gradient(
    148.05deg,
    rgba(255, 255, 255, 0.8) 9.93%,
    rgba(255, 255, 255, 0.5) 91.86%
  );
  border: 0.5px solid #004b44;
  backdrop-filter: blur(10px);
  border-radius: 0 0 10px 10px;
}

.v-autocomplete__content.v-menu__content {
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
}

.v-list-item {
  text-align: start;
  order-bottom: black;
  border-bottom-color: black;
  border-bottom-style: solid;
  border-block-width: 0.5px;
}
.mx-datepicker-popup {
  box-sizing: border-box !important;
  background: linear-gradient(
    148.05deg,
    rgba(255, 255, 255, 0.8) 9.93%,
    rgba(255, 255, 255, 0.5) 91.86%
  ) !important;
  border: 0.5px solid #004b44 !important;
  backdrop-filter: blur(10px) !important;
  border-radius: 10px !important;
}

.mx-calendar-content .cell.active {
  color: #fff;
  background: #004b44 !important;
  border-radius: 50%;
}

.mx-calendar-content .cell.in-range,
.mx-calendar-content .cell.hover-in-range {
  background: rgba(0, 75, 68, 0.3) !important;
  font-family: "Product Sans Light";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #000000 !important;
}

.mx-calendar-content .cell {
  font-family: "Product Sans Light";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #000000;
}

button.disabled {
  background: #ababab !important;
  border-radius: 10px;
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
}

.v-input--checkbox {
  margin: 0px !important;
}

@font-face {
  font-family: "Product Sans Bold Italic";
  src: url("assets/fonts/Product Sans Bold Italic.ttf");
}
@font-face {
  font-family: "Product Sans Bold";
  src: url("assets/fonts/Product Sans Bold.ttf");
}
@font-face {
  font-family: "Product Sans Italic";
  src: url("assets/fonts/Product Sans Italic.ttf");
}
@font-face {
  font-family: "Product Sans Regular";
  src: url("assets/fonts/Product Sans Regular.ttf");
}
@font-face {
  font-family: "Product Sans Light";
  src: url("assets/fonts/Product Sans Light.ttf");
}
@font-face {
  font-family: "Product Sans medium";
  src: url("assets/fonts/Product Sans Medium.ttf");
}
</style>
