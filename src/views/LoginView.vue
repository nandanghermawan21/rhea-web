<template>
  <v-container style="height: 100%">
    <v-row no-gutters justify="end" align-content="center" style="height: 100%">
      <v-col cols="12" md="6" lg="5" xl="4">
        <v-container id="login-container">
          <v-row justify="center">
            <img id="logo" src="@/assets/logo_rhea.png" alt="" />
          </v-row>
          <v-row justify="center">
            <label id="tagline">Online Business Approval</label>
          </v-row>
          <v-row justify="center">
            <input
              class="input-text"
              type="text"
              name="username"
              value=""
              placeholder="Email RHEA / User Id"
            />
          </v-row>
          <v-row style="height: 24px"></v-row>
          <v-row justify="center">
            <input
              class="input-text"
              type="text"
              name="password"
              value=""
              placeholder="Password"
            />
          </v-row>
          <v-row style="height: 40px"></v-row>
          <v-row>
            <v-btn id="button-login"> <label for="">Masuk</label> </v-btn>
          </v-row>
          <v-row style="height: 20px"></v-row>
          <v-row justify="center">
            <v-btn id="button-google"
              ><v-row justify="center" align-content="center">
                <img style="width: 20px" src="@/assets/google.png" alt="" />
                <div style="width: 10px"></div>
                <label style="margin-top: 2px" for="">Masuk</label>
              </v-row></v-btn
            >
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
body {
  height: 100%;
}

#app {
  height: 100%;
  background-image: red;
  background-image: url(@/assets/login_background.png);
  background-position: bottom;
  background-size: cover;
  background-repeat: repeat;
}

#logo {
  /* Logo-Rhea---New 1 */
  margin-top: 40px;
  width: 35%;
}

#tagline {
  /* Online Business Approval */

  width: 287px;
  height: 77px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 52px;
  /* identical to box height, or 367% */
  text-align: center;

  color: #000000;
}

#login-container {
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 80px;
  /* margin-right: 50px; */

  background: linear-gradient(
    148.05deg,
    rgba(255, 255, 255, 0.8) 9.93%,
    rgba(255, 255, 255, 0.5) 91.86%
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 15px;
}

.input-text {
  /* Rectangle 312 */

  box-sizing: border-box;

  width: 100%;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;

  background: #ffffff;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 20px;
}

#button-login {
  background: #004b44;
  box-shadow: 0px 4px 17px rgb(0 0 0 / 8%);
  border-radius: 10px;
  width: calc(100% - 40px);
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Montserrat";
  font-style: "regular";
  font-weight: 700;
  font-size: 14px;
  line-height: 0px;
  /* identical to box height, or 0% */
  text-align: center;

  color: #ffffff;
}

#button-google {
  background: #FFFFFF;
  box-shadow: 0px 4px 17px rgb(0 0 0 / 8%);
  border-radius: 10px;
  width: calc(100% - 40px);
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Montserrat";
  font-style: "regular";
  font-weight: 700;
  font-size: 14px;
  line-height: 0px;
  /* identical to box height, or 0% */
  text-align: center;

  color: #000000;
}
</style>
