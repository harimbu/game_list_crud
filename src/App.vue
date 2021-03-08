<template>
  <v-app>
   <v-app-bar app color="grey lighten-3" flat>
      <v-btn icon :to="{ name: 'Home'}"><v-icon>mdi-home</v-icon></v-btn>
      <v-spacer />
      <div v-if="!$store.state.fireUser">
        <v-btn text depressed :to="{ name: 'login'}">로그인</v-btn>
        <v-btn text depressed :to="{ name: 'signUp'}">회원가입</v-btn>
      </div>
      <div v-else>
        <v-btn text depressed @click="logOut">로그아웃</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import * as fb from '../firebase'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    logOut () {
      fb.auth.signOut()
      this.$store.commit('setUser', '')
      this.$router.push('/')
    }
  }

}
</script>
