<template>
  <div class="flex flex-col lg:flex-row h-full w-full">
    <div class="pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
      <!-- control content left -->
      <div class="w-full h-24 min-h-0 min-w-0" @click="currentTab = tab.id" v-for="tab in tabs" :key="tab.id">
        <div class="widget w-full p-4 rounded-lg border-2" :class="currentTab === tab.id ? 'bg-background border-gray-300' : 'bg-white'">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col">
              <div class="text-xs uppercase font-light text-gray-500">
                {{ tab.label }}
              </div>
              <div class="text-xl font-bold">
                {{ facilities.length }}
              </div>
            </div>
            <div id="building" v-if="tab.id === 'facilities'">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                </path>
              </svg>
            </div>
            <div id="person" v-if="tab.id === 'users'">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                </path>
              </svg>
            </div>
            <div id="group" v-if="tab.id === 'teams'">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
      <!-- overflow content right -->
      <div class="w-full h-full min-h-0 min-w-0 overflow-auto">
      </div>
    </div>
  </div>
</template>

<script>
import Form from '../components/Form'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Admin',
  components: {
    Form
  },
  data () {
    return {
      currentTab: 'facilities',
      tabs: [
        {
          label: 'Facilities',
          id: 'facilities',
          icon: 'building'
        },
        {
          label: 'Users',
          id: 'users',
          icon: 'person'
        },
        {
          label: 'Teams',
          id: 'teams',
          icon: 'group'
        }
      ]
    }
  },
  created () {
    this.fetchFacilities()
  },
  computed: {
    ...mapState({
      facilities: state => state.superAdmin.facilities,
      users: state => state.superAdmin.users
    })
  },
  methods: {
    ...mapActions(['fetchFacilities'])
  }
}
</script>
<style scoped>

</style>
