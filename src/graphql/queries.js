/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncFacilities = /* GraphQL */ `
  query SyncFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFacilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        location
        employees
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
      id
      name
      location
      employees
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFacilitys = /* GraphQL */ `
  query ListFacilitys(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        employees
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
