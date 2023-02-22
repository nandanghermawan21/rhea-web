<template>
  <div class="SelectBaType">
    <MainLayout menuId="1">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Create Bussiness Approval" />
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="4" xl="4" sm="12" style="text-align: start">
            <label for="status">Pilih salah satu jenis permohonan</label>
            <v-combobox
              id="batype"
              v-model="selectedBaType"
              label="Tipe Permohonan"
              class="text-field combobox"
              flat
              solo
              :items="baTypes"
              item-text="name"
              item-value="id"
            >
              <template v-slot:selection="{ attrs, item, parent, selected }">
                <v-label>{{ item.name }}</v-label>
              </template>
            </v-combobox>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="text-align: left" cols="12" xl="2" lg="2" md="3" sm="4">
            <label for="apply-filter">&nbsp;</label>
            <v-btn
              id="apply-filter"
              style="color: white; border-radius: 10px"
              color="#004B44"
              dark
              @click="onTapNext"
              :class="{ disabled: !isBaTypeSelected }"
              >Lanjut</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </MainLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MainLayout from "@/components/MainLayout.vue";
import BackNav from "@/components/BackNav.vue";

export default {
  name: "SelectBaType",
  components: {
    MainLayout,
    BackNav,
  },
  data() {
    return {
      selectedBaType: null,
      baTypes: [
        {
          id: "0001",
          name: "Bussiness Approval Blanket",
          url: "/create-ba-blanket",
        },
        {
          id: "0002",
          name: "Bussiness Approval",
          url: "/create-ba",
        },
      ],
    };
  },
  methods: {
    onTapNext: function () {
      if (this.isBaTypeSelected) {
        this.$router.push(this.selectedBaType.url);
      }
    },
  },
  computed: {
    isBaTypeSelected() {
      if (this.selectedBaType != null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
