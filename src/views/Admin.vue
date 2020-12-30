<template>
  <div>
    Super Admin
    <Form/>
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
