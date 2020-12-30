import { listFacilitys } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { createFacility } from '../graphql/mutations'

export const fetchFacilities = () => {
  return API.graphql(graphqlOperation(listFacilitys))
}

export const createNewFacility = (name, location) => {
  let facility = {
    name: name,
    location: location
  }
  API.graphql(graphqlOperation(createFacility, { input: facility }))
}
