<template>
  <div id="app">
    <!-- <Navbar/>
    <div class="container mx-auto">
      <div class="flex items-center justify-center">
        <div v-if="authState !== 'signedin'">You are signed out.</div>
        <amplify-authenticator>
          <div v-if="authState === 'signedin' && user">
            <router-view/>
          </div>
        </amplify-authenticator>
      </div>
    </div> -->
    <!-- component -->

  <section class="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden" v-if="authState === 'signedin' && user">
    <Navbar/>
    <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
      <nav class="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
        <h1 class="font-semibold text-lg"></h1>
        <span class="flex-1"></span>
        <span class="mr-2">
          <input type="text" placeholder="Search"
            class="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
        </span>
        <button
          class="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
          <i class="fas fa-user fill-current"></i>
        </button>
      </nav>
      <section class="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0 bg-main">
        <router-view/>
        </section>
      </main>
    </section>
    <section v-if="authState !== 'signedin'">
      <div>You are signed out.</div>
      <amplify-authenticator />
    </section>
  </div>
</template>
<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { mapActions, mapState } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
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
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

body {
  font-family: "Nunito", sans-serif;
}

main {
  font-size: clamp(0.9rem, 3vw, 1rem);
}

#page-icon img {
  -webkit-animation: cssfilter 3s infinite;
}

@-webkit-keyframes cssfilter {
  0%, 100%  {
    filter: invert(75%) drop-shadow(0px 0px 2px blue)
  }

  50% {
    filter: invert(0%) drop-shadow(0px 0px 1px teal);
  }
}
</style>
