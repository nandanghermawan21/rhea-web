<template>
  <div class="DetailBaBlanketView">
    <MainLayout menuId="2">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Businsess Approval" />
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="8" xl="8" lg="8">
            <v-container id="detail-container">
              <v-row id="detail-header">
                <v-col style="text-align: start">
                  <v-label>BA - {{ $route.params.id }}</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Divisi</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label>Sales</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Diajukan Oleh</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label>Ivan Wibowo Hudyana</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Posisi</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label>Head of Sales</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Tanggal Pengajuan</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label>{{ dateTimeStr(new Date()) }}</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Judul</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label>Convertion Program Trade Logam Mulia</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Latar Belakang</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</v-label
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title">
                      <v-label>Metode</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="text-align: start" class="value">
                  <v-label>Lorem ipsum dolor sit amet</v-label>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  xl="5"
                  lg="3"
                  style="text-align: justify"
                  class="detail-title"
                >
                  <v-row justify="space-between">
                    <v-col class="title" style="text-align: start">
                      <v-label>Rincian Biaya</v-label>
                    </v-col>
                    <v-col class="title" cols="1">
                      <v-label>:</v-label>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  style="text-align: start; align-items: center; display: flex"
                  class="value"
                >
                  <img src="@/assets/logo_pdf.png" alt="" />
                  <v-label>&nbsp; Lorem Ipsum.pdf</v-label>
                </v-col>
              </v-row>
            </v-container>
            <v-row justify="space-between" style="margin-top: 20px">
              <v-col style="text-align: start">
                <v-btn id="btn-filter" color="#004B44" dark
                  ><v-icon></v-icon><v-label>Setujui</v-label></v-btn
                >
              </v-col>
              <v-col style="text-align: end">
                <v-btn id="btn-filter" color="red" dark
                  ><v-icon></v-icon><v-label>Tolak</v-label></v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <v-row>
              <v-col id="title-history" style="text-align: start; margin-bottom: 20px">
                <v-label>Penelusuran BA Blanket {{ $route.params.id }}</v-label>
              </v-col>
            </v-row>
            <v-container id="timeline">
              <v-row
                class="row-timeline"
                v-for="(hostory, index) in hostorys"
                v-bind:key="hostory.id"
              >
                <v-col
                  style="text-align: center; display: flex; align-content: center"
                  cols="1"
                >
                  <div>
                    <v-icon color="#004B44">mdi-brightness-1</v-icon>
                    <div
                      class="line-history"
                      :class="{ last: index == hostorys.length - 1 }"
                    ></div>
                  </div>
                </v-col>
                <v-col cols="10" style="text-align: start">
                  <div style="margin-left: 10px">
                    <div class="title-history">{{ hostory.status }}</div>
                    <div class="date-history">{{ dateTimeStr(hostory.tanggal) }}</div>
                    <div class="date-history">oleh {{ hostory.user }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
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
  name: "DetailBaBlanketView",
  props: {
    no: String,
  },
  components: {
    MainLayout,
    BackNav,
  },
  data() {
    return {
      hostorys: [
        {
          id: 4,
          status: "Internal Memo Notification",
          tanggal: new Date(),
          user: "Jhon Doe",
        },
        { id: 3, status: "Persetujuan", tanggal: new Date(), user: "Jhon Doe" },
        { id: 2, status: "Dikonfirmasi", tanggal: new Date(), user: "Jhon Doe" },
        { id: 1, status: "Pengajuan", tanggal: new Date(), user: "Jhon Doe" },
      ],
    };
  },
  methods: {
    back: function () {
      this.$router.go(-1);
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
  },
};
</script>
<style>
#detail-container {
  background: #ffffff;
  padding-bottom: 50px;
}

#detail-header {
  background: #004b44;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 50px;
}

#detail-header label,
.v-btn__content label {
  font-family: "Product Sans" !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 21px !important;
  color: #ffffff !important;
}

.detail-title label {
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

.title {
  padding-top: 5px;
}

#title-history label {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #004b44;
}

.title-history {
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

.row-timeline {
  /* background-color: green; */
}

.line-history {
  height: 100%;
  width: 1px;
  background-color: #004b44;
  position: relative;
  left: 45%;
}

.line-history.last {
  display: none;
}

@media only screen and (max-width: 770px) {
  .title {
    padding-bottom: 0px;
  }

  .value {
    padding-top: 0px;
  }
}
</style>
