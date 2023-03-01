<template>
  <v-row id="login-page">
    <v-container style="height: 100%">
      <v-row no-gutters justify="end" align-content="center" style="height: 100%">
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-container id="login-container">
            <v-row justify="center">
              <img id="logo" src="@/assets/logo_rhea.png" alt="" />
            </v-row>
            <v-row justify="center">
              <label id="tagline">Online Business Approval</label>
            </v-row>
            <v-alert
              v-if="errorMessage != ''"
              style="margin-bottom: 50px; padding-right: 50px"
              closable
              title="Alert title"
              type="error"
              ><div class="error_text">{{ this.errorMessage }}</div></v-alert
            >
            <v-row justify="center">
              <input
                v-model="email"
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
                v-model="password"
                class="input-text"
                type="password"
                name="password"
                value=""
                placeholder="Password"
              />
            </v-row>
            <v-row style="height: 40px"></v-row>
            <v-row>
              <v-btn id="button-login" @click="login">
                <label v-if="isLoading === false" for="">Masuk</label>
                <v-progress-circular
                  v-if="isLoading === true"
                  indeterminate
                ></v-progress-circular>
              </v-btn>
            </v-row>
            <v-row style="height: 20px"></v-row>
            <v-row justify="center">
              <v-btn id="button-google">
                <a :href="googleSign(from)">
                  <v-row justify="center" align-content="center">
                    <img style="width: 20px" src="@/assets/google.png" alt="" />
                    <div style="width: 10px"></div>
                    <label style="margin-top: 2px" for="">Masuk Dengan Google</label>
                  </v-row>
                </a>
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      isLoading: false,
      email: "",
      password: "",
      errorMessage: "",
      from: "/",
    };
  },
  methods: {
    login: async function () {
      this.errorMessage = "";
      if (this.isLoading == true) return;

      if (this.email == "" || this.password == "") {
        this.isLoading = false;
        this.errorMessage = "harap isi email dan password";
        return;
      }

      this.isLoading = true;
      try {
        axios
          .post("/auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((result) => {
            this.isLoading = false;
            console.log(result);
            this.$store.dispatch("simpanUser", result.data);
            this.$cookie.set("token", result.data.token, 1);
            this.$router.replace("/home");
          })
          .catch((err) => {
            this.errorMessage = err.response.data;
            this.isLoading = false;
          });
      } catch (error) {
        this.isLoading = false;
      }
    },
    loginWithGoogle: function (code) {
      this.isLoading = true;
      axios
        .get("/auth/login-with-google?code=" + code, {})
        .then((result) => {
          this.isLoading = false;
          console.log(result);
          this.$store.dispatch("simpanUser", result.data);
          this.$cookie.set("token", result.data.token, 1);
          // this.$router.replace({ path: "/home", query: { foo: "bar" } });
          window.location.href = "/home";
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = err.response.data;
          this.isLoading = false;
        });
    },
    googleSign: function (form) {
      const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

      const options = {
        redirect_uri: "http://localhost:8081/",
        client_id:
          "517368918871-08bblrabui7qvsqgvqpd11gvppprsm00.apps.googleusercontent.com",
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
          "https://www.googleapis.com/auth/userinfo.profile",
          "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),
        state: form,
      };

      const qs = new URLSearchParams(options);

      return `${rootUrl}?${qs.toString()}`;
    },
  },
  beforeMount() {
    if (this.$cookie.get("token") != null) {
      this.$router.replace({ path: "/home", query: {} });
    }
  },
  mounted() {
    console.log("mounted hook");

    // Membuat objek URLSearchParams dari query string di URL
    const params = new URLSearchParams(window.location.search);

    // Mendapatkan nilai dari query parameter 'code'
    const code = params.get("code");

    if (code != null) {
      this.isLoading = true;
      setTimeout(() => {
        this.loginWithGoogle(code);
      }, 2000);
    }
  },
};
</script>

<style>
body {
  height: 100%;
}

#app {
  height: 100%;
}

#login-page {
  height: 100%;
  width: 100%;
  background-image: url(@/assets/login_background.png);
  background-position: bottom;
  background-size: cover;
  background-repeat: repeat;
  padding: 0px;
  margin: 0px;
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
  background: #ffffff;
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

.error_text {
  color: white;
  font-style: unset;
  font-weight: bold;
  font-family: "Montserrat";
  font-style: "regular";
  font-weight: 700;
}
</style>
