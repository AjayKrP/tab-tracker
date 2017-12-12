<template>
  <div>
    <h1>Register</h1>
    <div class="register">
      <input type="email" name="email" v-model="email" placeholder="Email" required/><br>
      <input type="password" name="password" v-model="password" placeholder="Password" required/><br>
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {

    data () {
      return {
        email: '',
        password: ''
      }
    },
    watch: {
      email (value) {
        console.log('email has changed ', value)
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    },
    mounted () {
      setTimeout(() => {
        this.email = 'Hello World!!!'
      }, 2000)
    }
  }
</script>

<style scoped="true">
  h1{
    text-align: center;
  }

  .register{
    margin-left: 50%;
  }
</style>

