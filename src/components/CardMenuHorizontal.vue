<template>
  <v-badge
    id="item-bedge"
    :content="badgeCount"
    offset-x="20px"
    offset-y="20px"
    rounded="true"
    :color="badgeCount > 0 ? 'red' : 'transparent'"
  >
    <v-container v-on:click="$emit('click')" class="main-container" :style="mainContainerStyle">
      <v-row align-content="center">
        <v-col cols="12" style="display: flex">
          <v-sheet id="menu-icon">
            <img
              v-if="iconImage != null"
              :src="iconImage"
              alt=""
              style="margin-top: 3px; width: 30px"
            />
            <i v-if="iconMdi != null" aria-hidden="true" :class="iconClass(iconMdi)"></i>
          </v-sheet>
          <v-sheet id="menu-label">
            <v-label>{{ menuLabel }}</v-label>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-badge>
</template>

<script>
export default {
  name: "CardMenuHorizontal",
  props: {
    iconMdi: String,
    iconImage: String,
    menuLabel: String,
    backgroundColor: String,
    badgeCount: String,
  },
  computed: {
    mainContainerStyle() {
      return "background-color: " + this.backgroundColor;
    },
  },
  methods: {
    iconClass: function (icon) {
      return "v-icon notranslate mdi " + (icon ?? "mdi-magnify") + " theme--light";
    },
    click(fx) {
      fx();
    }
  },
};
</script>

<style>
.main-container {
  background: #004b44;
  border-radius: 15px;
}

#menu-icon {
  color: white;
  height: 30px;
  width: 30px;
  background: transparent;
}

#menu-icon i {
  color: white;

  font-size: 34px;
}

#menu-icon-col {
  align-content: baseline;
  align-items: inherit;
  text-align: center;
  align-items: inherit;
  align-self: center;
  padding-top: 20px;
}

#menu-label {
  background: transparent;
  height: 100%;
  width: calc(100% - 30px);
  color: white;
  text-align: initial;
  padding-left: 10px;
  align-content: center;
  display: grid;
}

#menu-label label {
  font-family: "Product Sans Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
}

#item-bedge {
  width: 100%;
}

#item-bedge .v-badge__wrapper span {
  inset: auto auto calc(100% - 15px) calc(100% - 15px);
  border-radius: 100%;
  height: 30px;
  width: 30px;
  text-align: inherit;
  padding-top: 30pz !important;
  padding-top: 10px !important;
  align-content: revert;
  align-items: flex-end;
  align-self: inherit;
  font-weight: bold;
}
</style>
