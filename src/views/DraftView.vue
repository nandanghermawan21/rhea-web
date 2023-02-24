<template>
  <div class="draft">
    <MainLayout menuId="3">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Draft" />
        </v-row>
        <v-row justify="end" style="height: 50px">
          <v-btn
            :style="'display:' + (selected > 0 ? 'inherit' : 'none')"
            id="btn-filter"
            outlined
            color="#004B44"
            dark
            ><v-icon>mdi-delete</v-icon>&nbsp; Hapus</v-btn
          >
        </v-row>
        <v-container style="padding: 0px; margin: 0px; margin-top: 30px">
          <v-row id="table-draft">
            <v-col
              class="table-draft-row"
              cols="12"
              v-for="(item, index) in drafts"
              :key="index"
              :value="index"
            >
              <v-row>
                <v-col cols="12" sm="2" md="2" lg="2" xl="2">
                  <v-checkbox v-model="item.isSelected" label="Draft"></v-checkbox>
                </v-col>
                <v-col style="text-align: start" cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-label>{{ item.judul }}</v-label>
                </v-col>
                <v-col style="text-align: start" cols="12" sm="2" md="2" lg="2" xl="2">
                  <v-label>{{ dateTimeStr(item.tanggal) }}</v-label>
                </v-col>
                <v-col style="text-align: end" cols="12" sm="2" md="2" lg="2" xl="2">
                  <v-icon>mdi-square-edit-outline</v-icon>
                  <v-icon>mdi-delete</v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
  name: "DraftView",
  components: {
    MainLayout,
    BackNav,
  },
  data() {
    return {
      drafts: [
        {
          isSelected: false,
          judul: "Pengajuan lorem ipsum - latar belakang",
          tanggal: new Date(),
        },
        {
          isSelected: false,
          judul: "(no title) - lorem ipsum sit dolor amet",
          tanggal: new Date(),
        },
        {
          isSelected: false,
          judul: "(no title) - lorem ipsum sit dolor amet",
          tanggal: new Date(),
        },
      ],
    };
  },
  methods: {
    dateTimeStr(date) {
      var monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      var dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      return (
        dayNames[date.getDay()] +
        ", " +
        date.getDate() +
        " " +
        monthNames[date.getMonth()] +
        " " +
        date.getFullYear() +
        " | " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    },
  },
  computed: {
    selected() {
      return this.drafts.filter((x) => x.isSelected === true).length;
    },
  },
};
</script>
<style>
.table-draft-row:nth-child(odd) {
  background-color: white;
}
</style>
