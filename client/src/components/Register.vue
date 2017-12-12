<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>

        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email" placeholder="Email" required/><br>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="password" placeholder="Password" required/><br>
          </div>
          <div class="error" v-html="error">

          </div>
          <button class="btn btn-primary" @click="register">Register</button>
        </div>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import VToolbar from "vuetify/es5/components/VToolbar/VToolbar";
  export default {

    components: {VToolbar},
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password,
            error: null
          })
        } catch (err) {
          this.error = err.response.data.error
        }
      }
    }
  }
</script>

<style scoped="true">
  h1{
    text-align: center;
  }

  .error{
    color: red;
  }
</style>

