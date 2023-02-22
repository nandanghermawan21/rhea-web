<template>
  <div class="home">
    <MainLayout menuId="1">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardMenuHorizontal
               v-on:click="onClickCreateBa"
              iconMdi="mdi-plus"
              backgroundColor="004b44"
              menuLabel="Buat Bussines Approval"
            />
          </v-col>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardMenuHorizontal
              iconImage="assets/menu-icon-check.png"
              :menuLabel="'Butuh \n Persetujuan'"
              backgroundColor="004b44"
              badgeCount="10"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardDatas value="50" label="Total BA" color="#BDE7E3" />
          </v-col>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardDatas value="10" label="Pending" color="#BBBBBB" />
          </v-col>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardDatas value="20" label="TDiproses" color="#66CEC4" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardDatas value="10" :label="'BA \n Disetujui'" color="#B1C794" />
          </v-col>
          <v-col cols="12" xl="2" lg="2" md="4" sm="5">
            <CardDatas value="10" :label="'BA \n Ditolak'" color="#F07C7B" />
          </v-col>
        </v-row>
      </v-container>
    </MainLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MainLayout from "@/components/MainLayout.vue";
import CardMenuHorizontal from "@/components/CardMenuHorizontal.vue";
import CardDatas from "@/components/CardDatas.vue";

export default {
  name: "HomeView",
  components: {
    MainLayout,
    CardMenuHorizontal,
    CardDatas,
  },
  methods: {
    onClickCreateBa: function () {
      this.$router.push("/select-ba-type");
    },
  },
};
</script>
