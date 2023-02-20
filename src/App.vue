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
