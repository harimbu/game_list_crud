<template>
  <v-row justify="center">
    <v-col md="6">
      <v-card elevation="2">
        <v-card-title>회원가입</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" label="email" outlined required />
            <v-text-field
              v-model="password"
              label="password"
              outlined
              required
            />
            <v-btn elevation="2" color="primary" @click="signUp">회원가입</v-btn>
          </v-form>
          <p class="pt-6">이미 계정이 있나요? <router-link :to="{ name: 'login' }">로그인</router-link></p>
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
    async signUp () {
      const { user } = await fb.auth.createUserWithEmailAndPassword(this.email, this.password)
      fb.db.collection('users').doc(user.uid).set({
        email: user.email
      })
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
