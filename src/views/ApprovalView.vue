<template>
  <div class="approval">
    <MainLayout menuId="2">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Bussiness Approval" />
        </v-row>
        <v-row justify="end">
          <v-btn @click="toogleFilter" id="btn-filter" outlined color="#004B44" dark
            ><v-icon>mdi-filter</v-icon>&nbsp;Filter</v-btn
          >
        </v-row>
        <v-row
          id="filter-container"
          :style="'display:' + (isShowFilter ? 'inherit' : 'none')"
        >
          <v-col cols="12" style="text-align: end">
            <v-icon @click="toogleFilter" class="basic-label">mdi-close</v-icon>
          </v-col>
          <v-row align-content="center">
            <v-col cols="12" md="2" lg="2" xl="2" sm="4" style="text-align: start">
              <label for="status">Status</label>
              <v-combobox
                id="status"
                label="Status"
                class="text-field combobox"
                flat
                solo
                :items="['Diproses', 'Ditolak', 'Disetujui', 'Nonaktif']"
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="3" lg="3" xl="3" sm="8" style="text-align: start">
              <label for="pemohon">Diajukan Oleh</label>
              <v-text-field
                id="pemohon"
                class="text-field"
                flat
                solo
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2" lg="2" xl="2" sm="4" style="text-align: start">
              <label for="batype">Tipe BA</label>
              <v-combobox
                id="batype"
                label="Tipe BA"
                class="text-field"
                flat
                solo
                :items="['BA', 'BA Blanket']"
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="3" lg="3" xl="3" sm="8" style="text-align: start">
              <label for="daterange">Dari - Sampai</label>
              <date-picker
                id="daterange"
                v-model="value1"
                type="datetime"
                placeholder="Select datetime range"
                range
                :show-time-panel="showTimeRangePanel"
                @close="handleRangeClose"
                class="text-field"
                style="margin-top: 10px"
                format="DD-MM-YYYY"
              >
              </date-picker>
            </v-col>
            <v-col cols="12" md="2" lg="2" xl="2" sm="12">
              <label for="apply-filter">&nbsp;</label>
              <v-btn
                id="apply-filter"
                style="color: white; margin-top: 10px; border-radius: 10px"
                color="#004B44"
                dark
                >Terapkan</v-btn
              >
            </v-col>
          </v-row>
        </v-row>
        <v-container id="container-table">
          <v-data-table
            :headers="headers"
            hide-default-footer
            :items="desserts"
            :expanded.sync="expanded"
            single-expand
            item-key="no"
            show-expand
            class="elevation-1"
          >
            >
            <template v-slot:expanded-item="{ headers, item }">
              <td style="margin: 0px; padding: 0px" :colspan="headers.length">
                <v-data-table
                  class="detail-table"
                  :hide-default-header="!isMobile"
                  hide-default-footer
                  show-expand
                  single-expand
                  :headers="headers"
                  :items="item.detail"
                  :expanded.sync="expanded"
                  item-key="no"
                  group-header-text="judul"
                >
                  <template v-slot:header="{ props }">
                    <th
                      v-for="head in props.headers"
                      class="text-start"
                      :style="'width:' + head.width"
                    ></th>
                  </template>
                  <template v-slot:item.data-table-expand="{ item, isExpanded }">
                    <v-icon style="color: transparent">mdi-chevron-down</v-icon>
                  </template>
                </v-data-table>
              </td>
            </template>
            <template v-slot:item.data-table-expand="{ item, isExpanded }">
              <v-icon @click="handleExpansion(item, isExpanded)">{{
                isExpanded ? "mdi-chevron-down" : "mdi-chevron-right"
              }}</v-icon>
            </template>
          </v-data-table>
        </v-container>
        <v-row>
          <v-col id="page-info" cols="12" style="text-align: roght"> Page 1 of 25 </v-col>
        </v-row>
        <v-row>
          <v-col style="text-align: center">
            <v-btn id="btn-filter" style="color: white" color="#004B44" dark
              ><v-icon class="basic-label">mdi-chevron-left</v-icon></v-btn
            >
            <v-btn id="btn-filter" outlined color="#004B44" dark>10</v-btn>
            <v-btn id="btn-filter" style="color: white" color="#004B44" dark
              ><v-icon class="basic-label">mdi-chevron-right</v-icon></v-btn
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "ApprpvalView",
  components: {
    MainLayout,
    BackNav,
    DatePicker,
  },
  data() {
    return {
      isMobile: false,
      isShowFilter: false,
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      showTimePanel: false,
      showTimeRangePanel: false,
      headers: [
        { text: "No BA", value: "no", width: "5%", sortable: false },
        { text: "", value: "data-table-expand", width: "5%" },
        { text: "Judul", value: "judul", width: "25%", sortable: false },
        { text: "Tangal", value: "tanggal", width: "25%", sortable: false },
        { text: "Tipe BA", value: "tipe", width: "15%", sortable: false },
        { text: "Status", value: "status", width: "15%", sortable: false },
        { text: "Aksi", value: "action", sortable: false, width: "10%" },
      ],
      desserts: [
        {
          no: "0001",
          judul: "A&P Awareness 2H 2022",
          tanggal: this.dateTimeStr(new Date()),
          tipe: 24,
          status: "sts-diproses",
          action: "action",
          detail: [
            {
              no: "0021",
              judul: "A&P Awareness 2H 2022",
              tanggal: this.dateTimeStr(new Date()),
              tipe: 24,
              status: "sts-disetuji",
              action: "action",
            },
            {
              no: "002",
              judul: "A&P Awareness 2H 2022",
              tanggal: this.dateTimeStr(new Date()),
              tipe: 24,
              status: "sts-ditolak",
              action: "action",
            },
          ],
        },
        {
          no: "0002",
          judul: "A&P Awareness 2H 2022",
          tanggal: this.dateTimeStr(new Date()),
          tipe: 24,
          status: "sts-disetuji",
          action: "action",
          detail: [
            {
              no: "0021",
              judul: "A&P Awareness 2H 2022",
              tanggal: this.dateTimeStr(new Date()),
              tipe: 24,
              status: "sts-diproses",
              action: "action",
            },
          ],
        },
      ],
      expanded: [],
    };
  },
  computed: {},
  methods: {
    toogleFilter: function (url) {
      this.isShowFilter = !this.isShowFilter;
    },
    toggleTimePanel() {
      this.showTimePanel = !this.showTimePanel;
    },
    toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    handleOpenChange() {
      this.showTimePanel = false;
    },
    handleRangeClose() {
      this.showTimeRangePanel = false;
    },
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
    generateActionGrid() {
      this.$el.querySelectorAll("#container-table tbody td").forEach((e) => {
        if (e.innerHTML == "action") {
          e.innerHTML =
            '<v-col style="text-align:center">' +
            '<button style="margin-right:5px" type="button" class="v-icon notranslate basic-label v-icon--link mdi mdi-eye theme--light"></button>' +
            '<button style="margin-left:5px" type="button" class="v-icon notranslate basic-label v-icon--link mdi mdi-square-edit-outline theme--light"></button>' +
            "</v-col>";
        }

        if (e.innerHTML == "sts-disetuji") {
          e.innerHTML =
            '<button style="margin-right:5px; color:green" type="button" class="v-icon notranslate basic-label v-icon--link mdi mdi-check-circle-outline theme--light"></button>' +
            " disetujui";
        }

        if (e.innerHTML == "sts-ditolak") {
          e.innerHTML =
            '<button style="margin-right:5px; color:red" type="button" class="v-icon notranslate basic-label v-icon--link mdi mdi-close-circle-outline theme--light"></button>' +
            " disetujui";
        }

        if (e.innerHTML == "sts-diproses") {
          e.innerHTML =
            '<button style="margin-right:5px; color:blue" type="button" class="v-icon notranslate basic-label v-icon--link mdi mdi-progress-clock theme--light"></button>' +
            " disetujui";
        }
      });
    },
    handleExpansion(item, state) {
      const itemIndex = this.expanded.indexOf(item);
      state ? this.expanded.splice(itemIndex, 1) : this.expanded.push(item);
    },
    updateDimensions() {
      this.isMobile = window.innerWidth < 768;
      this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    },
  },
  mounted() {
    this.generateActionGrid();
  },
  updated() {
    this.generateActionGrid();
  },
  created() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
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

#page-info {
  text-align: end;
  margin-top: 15px;
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

.basic-label {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
}

#filter-container {
  background-color: white;
  padding: 10px;
  padding-top: 0px;
  margin-top: 30px;
}

#apply-filter {
  display: flex;
  align-self: center;
  height: 50px;
  width: 100%;
}

.data-cell {
  text-align: start;
}

@media only screen and (max-width: 601px) {
  thead {
    display: none;
  }

  .v-data-table__mobile-table-row {
    margin-bottom: 10px;
  }

  tr {
    padding-top: 3%;
  }

  .detail-table th {
    display: none;
  }

  .v-data-table__expanded tbody tr td:nth-child(2) {
    display: none;
  }
}

@media only screen and (min-width: 601px) {
  #container-table {
    /* height: calc(100vh - 350px); */
    background-color: white;
  }
}
</style>
