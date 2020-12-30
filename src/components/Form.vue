<template>
  <div class="max-w-4xl p-6 mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md">
        <h2 class="text-lg text-gray-700 dark:text-white font-semibold capitalize">Add Facility</h2>
        <form>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Name</label>
                    <input id="username" v-model="facilityName" type="text" class="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Location</label>
                    <input id="emailAddress" v-model="facilityLocation" type="text" class="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>
            </div>
            <div class="flex justify-end mt-6">
                <button class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600" v-on:click="createFacility">Add Facility</button>
            </div>
        </form>
    </div>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'

export default {
  name: 'Form',
  data: function () {
    return {
      facilityName: '',
      facilityLocation: ''
    }
  },
  methods: {
    createFacility: function (name, location) {
      API.graphql(graphqlOperation(createFacility, { input: {
        name: this.facilityName,
        location: this.facilityLocation
      }
      }))
    }
  }
}
</script>

<style>

</style>
