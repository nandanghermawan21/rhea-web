<template>
  <v-row id="main-page">
    <v-col id="nav-bar" cols="12" xl="2" lg="2" sm="4" md="3">
      <v-row>
        <v-col id="logo-container" cols="12">
          <img id="logo" src="@/assets/logo_rhea.png" alt="" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"></v-col>
      </v-row>
      <v-row id="nav-menu-container">
        <v-col
          v-for="menu in menus"
          @click="gotoUrl(menu.url)"
          v-bind:key="menu.id"
          class="main-menu-item"
          :class="{ active: menu.id == menuId }"
          lg="12"
          md="12"
          sm="12"
          xl="12"
          style="text-align: start"
        >
          <v-row class="main-menu-item-row">
            <v-col cols="12" md="2" sm="2" lg="2" xl="2" style="text-align: center">
              <img :src="'/assets/' + menu.icon" />
            </v-col>
            <v-col class="menu-title">
              {{ menu.title }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col id="nav-body" xl="10" lg="10" sm="8" md="9">
      <v-row>
        <v-col cols="12" align-self="start">
          <v-row id="nav-header">
            <v-col style="padding-bottom: 0px">
              <v-row>
                <v-col style="height: 60px" cols="12">
                  <v-text-field
                    id="search-box"
                    class="text-field"
                    flat
                    solo
                    v-model="searchKey"
                    label="Cari nomor permohonan"
                    append-icon="mdi-magnify"
                    variant="outlined"
                    @click:append="onClickSearch(searchKey)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="col-clock">
                  <v-label id="clock">{{ dateTimeStr }}</v-label>
                </v-col>
              </v-row>
            </v-col>
            <v-col id="user-info">
              <v-row>
                <v-col id="user-info-col" style="text-align: end; font-weight: bold">
                  <v-badge
                    id="menu-activator"
                    style="margin-right: 10px"
                    offset-x="10"
                    offset-y="10"
                    :content="3"
                    color="red"
                  >
                    <img src="/assets/icon-menu-notification.png" alt="" />
                  </v-badge>
                  <v-menu activator="#menu-activator">
                    <v-list>
                      <v-list-item
                        style="width: 30vw; min-width: 320px"
                        v-for="(item, index) in notification"
                        :key="index"
                        :value="index"
                      >
                        <v-label style="margin-right=10px;">{{ item.title }}</v-label>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-label id="user-name">Hi, Ivan Wibowo Hudyana</v-label>
                </v-col>
                <v-col id="use-image" cols="3" md="2" ms="2" lg="1" xl="1">
                  <img style="width: 40px" src="/assets/user-avatar.png" alt="" />
                </v-col>
                <v-menu activator="#use-image">
                  <v-list>
                    <v-list-item
                      @click="Logout"
                      style="min-width: 20vw; min-width: 200px"
                    >
                      <v-label style="margin-right=10px;">Logout</v-label>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col id="content-body" cols="12">
          <slot />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MainLayout",
  props: {
    menuId: String,
  },
  data() {
    return {
      currentdate: new Date(),
      searchKey: "",
      monthNames: [
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
      ],
      dayhNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
      menus: [
        {
          id: 1,
          title: "Home",
          url: "/home",
          icon: "icon-menu-home.png",
        },
        {
          id: 2,
          title: "Business Approval",
          url: "/approval",
          icon: "icon-menu-approval.png",
        },
        {
          id: 3,
          title: "Draft",
          url: "/draft",
          icon: "icon-menu-draft.png",
        },
      ],
      notification: [
        { title: "Ada 1 BA Baru yang memerlukan persetujuan anda" },
        { title: "BA dengan nomor 1234 telah disetujui" },
        { title: "Ada 1 BA Baru yang memerlukan persetujuan anda" },
        { title: "BA dengan nomor 1234 telah ditolak" },
      ],
    };
  },
  methods: {
    gotoUrl: function (url) {
      this.$router.push(url).catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          return;
        }
      });
    },
    startClock: function () {
      setTimeout(() => {
        this.currentdate = new Date();
        this.startClock();
      }, 1000);
    },
    onClickSearch: function (key) {
      this.$router.push({ path: "/approval", query: { search: key } }).catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          return;
        }
      });
    },
    Logout: function () {
      this.$cookie.delete("token");
      this.$router.replace({ path: "/", query: {} });
    },
  },
  computed: {
    dateTimeStr() {
      return (
        this.dayhNames[this.currentdate.getDay()] +
        ", " +
        this.currentdate.getDate() +
        " " +
        this.monthNames[this.currentdate.getMonth()] +
        " " +
        this.currentdate.getFullYear() +
        " | " +
        this.currentdate.getHours() +
        ":" +
        this.currentdate.getMinutes() +
        ":" +
        this.currentdate.getSeconds()
      );
    },
  },
  created() {
    this.startClock();
  },
};
</script>

<style>
#main-page {
  height: 100%;
  width: 100%;
  background-position: bottom;
  background-size: cover;
  background-repeat: repeat;
  padding: 0px;
  margin: 0px;
}

#nav-body {
  height: 100%;
  width: 100%;
  background: rgba(0, 75, 68, 0.03);
}

#content-body {
  height: 87vh;
  width: 100%;
}

#nav-bar {
  background-color: white;
}

#logo-container {
  text-align: initial;
  padding-left: 20px;
}

#logo {
  /* Logo-Rhea---New 1 */
  margin-top: 40px;
  width: 35%;
}

.main-menu-item.active {
  /* Rectangle 315 */

  border-right-color: #004b44;
  border-right-style: solid;
  border-right-width: 3px;
  background: #f3f3f3;
}

.menu-title {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
}

#user-name {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

#nav-header {
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
}

.main-menu-item-row {
  padding-left: 10px;
}

#clock {
  font-family: "Product Sans Light";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;

  color: #000000;
}

.col-clock {
  text-align: start;
}

#logo {
  margin-top: 40px;
  width: 50%;
}

.v-menu__content {
  top: 80px !important;
}

@media only screen and (min-width: 601px) {
  #nav-bar {
    height: 100%;
  }

  #content-body {
    overflow-y: scroll;
  }
}

@media only screen and (max-width: 601px) {
  .main-menu-item.active {
    /* Rectangle 315 */

    border-right-color: transparent;
    border-bottom-color: #004b44;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    background: #f3f3f3;
  }

  .menu-title {
    text-align: center;
    padding-top: 0px;
  }

  #user-info {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  #user-info-col {
    text-align: end;
    align-self: center;
    padding-bottom: 22px;
    padding-right: 0px;
  }

  #user-image {
    padding-left: 0px;
    padding-right: 0px;
  }

  .main-menu-item-row {
    padding-left: 0px;
  }

  #content-body {
    height: 63vh;
    width: 100%;
  }

  .col-clock {
    text-align: center;
  }

  .v-menu__content {
    top: 50px !important;
  }
}
</style>
