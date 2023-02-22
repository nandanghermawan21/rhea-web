<template>
  <div class="createbablanketform">
    <MainLayout menuId="1">
      <v-container style="padding: 20px; margin: 0px">
        <v-row>
          <BackNav label="Create Bussiness Approval Blanket" />
        </v-row>
        <v-row>
          <v-container id="form-container">
            <v-row id="title-form">
              <v-col style="text-align: start" cols="12"> Bussiness Approval </v-col>
            </v-row>
            <v-container id="detail-form-container">
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
                  <label for="daterange">Periode</label>
                  <date-picker
                    id="daterange"
                    v-model="form.periode"
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
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="estTargetValue">Est, Target & Value</label>
                  <v-text-field
                    id="estTargetValue"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                    v-model="estTargetValueFormated"
                    @keypress="filter"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="estTotalAPConversion">Est. Total A&P Conversion</label>
                  <v-text-field
                    id="estTotalAPConversion"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                    prepend-icon=""
                    v-model="estApConversionFormated"
                    @keypress="filter"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: start" cols="12" md="8" sm="12" xl="4" ls="6">
                  <label for="costRatio">Cost Ratio</label>
                  <v-text-field
                    id="costRatio"
                    class="text-field"
                    flat
                    solo
                    variant="outlined"
                    prepend-icon=""
                    v-model="estRatioFormated"
                    @keypress="filter"
                  ></v-text-field>
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
                <v-col style="text-align: start" cols="12">
                  <v-btn
                    style="
                      color: white;
                      margin-top: 10px;
                      border-radius: 10px;
                      box-shadow: none;
                      border-style: solid;
                      margin-right: 15px;
                    "
                    color="#004B44"
                    dark
                    >Proses</v-btn
                  >
                  <v-btn
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
  name: "CreateBaBlanketForm",
  data() {
    return {
      showTimePanel: false,
      showTimeRangePanel: false,
      form: {
        periode: null,
        estTargetValue: null,
        estApConversion: null,
        estRatio: null,
      },
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
    filter: function (evt) {
      if (!["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(evt.key)) {
        evt.preventDefault();
      }
    },
    formatNumber(number) {
      return number == null || isNaN(number)
        ? ""
        : Intl.NumberFormat("ID", { style: "decimal" }).format(number);
    },
    parseNumber(value) {
      value = value.replace(/\D/g, "");
      return parseFloat(value) != NaN ? parseFloat(value) : null;
    },
  },
  computed: {
    estTargetValueFormated: {
      get: function () {
        return this.formatNumber(this.form.estTargetValue);
      },
      set: function (newValue) {
        this.form.estTargetValue = this.parseNumber(newValue);
      },
    },
    estApConversionFormated: {
      get: function () {
        return this.formatNumber(this.form.estApConversion);
      },
      set: function (newValue) {
        this.form.estApConversion = this.parseNumber(newValue);
      },
    },
    estRatioFormated: {
      get: function () {
        return this.formatNumber(this.form.estRatio);
      },
      set: function (newValue) {
        this.form.estRatio = this.parseNumber(newValue);
      },
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
