<template>
  <div class="approval">
    <MainLayout menuId="2">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Bussiness Approval" />
        </v-row>
        <v-row justify="end">
          <v-btn id="btn-filter" outlined color="#004B44" dark
            ><v-icon>mdi-filter</v-icon>&nbsp;Filter</v-btn
          >
        </v-row>
        <v-container id="container-table">
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="desserts"
          >
          </v-data-table>
        </v-container>
      </v-container>
    </MainLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MainLayout from "@/components/MainLayout.vue";
import BackNav from "@/components/BackNav.vue";

export default {
  name: "ApprpvalView",
  components: {
    MainLayout,
    BackNav,
  },
  data() {
    return {
      headers: [
        { text: "No BA", value: "calories", width:"14%" },
        { text: "Judul", value: "fat" },
        { text: "Tipe BA", value: "carbs" },
        { text: "Status", value: "protein" },
        { text: "Aksi", value: "protein" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
      ],
    };
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

#btn-filter {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #004b44;
}

#container-table {
  margin-top: 30px;
  padding: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-right: 0px;
  height: calc(100vh - 320px);
  background-color: white;
}

thead {
  background: #004b44;
  border-radius: 10px 10px 0px 0px;
}

th span {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}

table th:first-child {
  border-radius: 10px 0 0 0px;
}

table th:last-child {
  border-radius: 0 10px 0px 0;
}
</style>
