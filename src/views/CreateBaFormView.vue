<template>
  <div class="createbaform">
    <MainLayout menuId="1">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Create Bussiness Approval" />
        </v-row>
        <v-row>
          <v-container id="form-container">
            <v-row id="title-form">
              <v-col style="text-align: start" cols="12"> Bussiness Approval </v-col>
            </v-row>
            <v-container id="divisi-form-container">
              <v-row>
                <v-col style="text-align: start" cols="12" md="4" sm="6" xl="4" ls="6">
                  <label for="pemohon">Diajukan Oleh</label>
                  <v-text-field
                    id="pemohon"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="4" sm="6" xl="4" ls="6">
                  <label for="divisi">Divisi</label>
                  <v-text-field
                    id="divisi"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="4" sm="6" xl="4" ls="6">
                  <label for="posisi">Posisi</label>
                  <v-text-field
                    id="posisi"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-container id="detail-form-container">
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="baBlanket">Pilih BA Blanket</label>
                  <v-text-field
                    id="baBlanket"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="judul">Judul</label>
                  <v-text-field
                    id="judul"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="LatarBelakang">Latar Belakang</label>
                  <v-textarea
                    id="LatarBelakang"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="Metode">Metode</label>
                  <v-textarea
                    id="Metode"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
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
                    format="YYYY-MM-DD"
                  >
                  </date-picker>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="3" sm="3" xl="4" ls="6">
                  <label for="upload">Upload Rincian Biaya</label>
                  <v-file-input
                    id="upload"
                    class="text-field upload"
                    flat
                    solo
                    variant="outlined"
                    prepend-inner-icon="mdi-cloud-upload-outline"
                    prepend-icon=""
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-col cols="6" xl="2" lg="2" md="3" sm="3">
                  <v-btn
                    id="apply-filter"
                    style="
                      color: white;
                      margin-top: 10px;
                      border-radius: 10px;
                      box-shadow: none;
                      border-style: solid;
                    "
                    color="#004B44"
                    dark
                    >Proses</v-btn
                  >
                </v-col>
                <v-col cols="6" xl="2" lg="2" md="3" sm="3">
                  <v-btn
                    id="apply-filter"
                    style="
                      color: rgb(182, 203, 150);
                      margin-top: 10px;
                      border-radius: 10px;
                      border-color: rgb(182, 203, 150) !important;
                      box-shadow: none;
                      border-style: solid;
                    "
                    color="white"
                    dark
                    >Simpan Ke Draft</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-container>
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
  name: "CreateBaForm",
  data() {
    return {
      showTimePanel: false,
      showTimeRangePanel: false,
      value1: null,
    };
  },
  components: {
    MainLayout,
    BackNav,
    DatePicker,
  },
  methods: {
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
  },
};
</script>

<style>
#form-container {
  width: 100%;
  height: 1548px;
  background: #ffffff;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
}

#title-form {
  background: #004b44;
  border-radius: 10px 10px 0px 0px;
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}

#divisi-form-container {
  padding-top: 50px;
  border-bottom: solid;
  padding-bottom: 35px;
}

#detail-form-container {
  padding-top: 50px;
  padding-bottom: 35px;
}
</style>
