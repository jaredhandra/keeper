<template>
  <div class="home">
    <div v-if="!signedIn">
      <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out class="signout"></amplify-sign-out>
      <h1>Hello World</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default {
  name: "Home",
  async beforeCreate () {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log(user)
      this.signedIn = true
    } catch (err) {
      this.signedIn = false
    }
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
      } else {
        this.signedIn = false
      }
    });
  },
  data () {
    return {
      authConfig: {
        usernameAttributes: 'Email',
        signUpConfig: {
          header: 'Sign Up for Keeper',
          hideAllDefaults: true,
          defaultCountryCode: '1',
          signUpFields: [
            {
              label: 'Email',
              key: 'email',
              required: true,
              displayOrder: 1,
              type: 'string',
              signUpWith: true
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 2,
              type: 'password'
            }
          ]
        }
      },
      signedIn: false
    }
  }
};
</script>
