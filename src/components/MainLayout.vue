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
    <v-col id="nav-body">
      <v-row>
        <v-col cols="12" align-self="start">
          <v-row id="nav-header">
            <v-col style="height: 60px">
              <v-text-field
                id="search-box"
                flat
                solo
                label="Cari nomor permohonan"
                append-icon="mdi-magnify"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col id="user-info">
              <v-row>
                <v-col id="user-info-col" style="text-align: end">
                  <v-badge
                    style="margin-right: 10px"
                    offset-x="10"
                    offset-y="10"
                    :content="3"
                    color="red"
                  >
                    <img src="/assets/icon-menu-notification.png" alt="" />
                  </v-badge>
                  <v-text id="user-name">Hi, Ivan Wibowo Hudyana</v-text>
                </v-col>
                <v-col id="use-image" cols="3" md="2" ms="2" lg="1" xl="1">
                  <img style="width: 40px" src="/assets/user-avatar.png" alt="" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col id="content-body" cols="12">
          <v-sheet>test body col</v-sheet>
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
      menus: [
        {
          id: 1,
          title: "Home",
          url: "/home",
          icon: "icon-menu-home.png",
        },
        {
          id: 2,
          title: "Bisnis Approval",
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
    };
  },
  methods: {
    gotoUrl: function (url) {
      this.$router.push(url);
    },
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
  height: 100vh;
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

.v-input__slot:has(#search-box) {
  box-sizing: border-box !important;
  background: white !important;
  border: 0.5px solid #004b44 !important;
  border-radius: 10px !important;
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
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.main-menu-item-row {
  padding-left: 10px;
}

@media only screen and (min-width: 601px) {
  #nav-bar {
    height: 100%;
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
}
</style>
