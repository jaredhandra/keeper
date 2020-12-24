<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container mx-auto">
      <div class="flex items-center justify-center h-screen">
        <div v-if="authState !== 'signedin'">You are signed out.</div>
        <amplify-authenticator>
          <div v-if="authState === 'signedin' && user">
            <div>Hello</div>
          </div>
          <amplify-sign-out></amplify-sign-out>
        </amplify-authenticator>
      </div>
    </div>
    <!-- <router-view/> -->

  </div>
</template>
<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { mapActions, mapState } from 'vuex'

export default {
  created () {
    onAuthUIStateChange((authState, authData) => {
      this.setAuthState(authState)
      this.setUserInfo(authData)
    })
  },
  computed: {
    ...mapState({
      user: state => state.user.userInfo,
      authState: state => state.user.authState
    })
  },
  data () {
    return {
    }
  },
  beforeDestroy () {
    return onAuthUIStateChange
  },
  methods: {
    ...mapActions(['setAuthState', 'setUserInfo'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
