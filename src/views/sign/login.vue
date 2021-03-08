<template>
  <v-row justify="center">
    <v-col md="6">
      <v-card elevation="2">
        <v-card-title>로그인</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" label="email" outlined required />
            <v-text-field
              v-model="password"
              label="password"
              outlined
              required
            />
            <v-btn elevation="2" color="primary" @click="login">Login</v-btn>
          </v-form>
          <p class="pt-6">아직 회원이 아닙니까?<router-link :to="{ name: 'signUp' }">회원가입</router-link></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import * as fb from '../../../firebase'
export default {
  data () {
    return {
      show: false,
      valid: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await fb.auth.signInWithEmailAndPassword(this.email, this.password)
      const mail = await fb.auth.currentUser.email
      this.$store.commit('setUser', mail)
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
