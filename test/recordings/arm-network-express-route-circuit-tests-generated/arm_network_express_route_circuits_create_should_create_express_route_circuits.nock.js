// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/expressRouteCircuitName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'af405dad-4338-4726-b1af-5fdb186e3f9a',
  'x-ms-correlation-request-id': 'af405dad-4338-4726-b1af-5fdb186e3f9a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113622Z:af405dad-4338-4726-b1af-5fdb186e3f9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:36:21 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/expressRouteCircuitName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'af405dad-4338-4726-b1af-5fdb186e3f9a',
  'x-ms-correlation-request-id': 'af405dad-4338-4726-b1af-5fdb186e3f9a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113622Z:af405dad-4338-4726-b1af-5fdb186e3f9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:36:21 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"expressRouteCircuitName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n  \"etag\": \"W/\\\"658911d9-759b-4ddb-b08f-42cd7c7f3f4c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b9476be9-efda-4a85-af45-de48b3655d7d\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f9170342-317b-43b8-883b-a539a65b80cf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/f9170342-317b-43b8-883b-a539a65b80cf?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e9d4b682-a29a-4517-be5c-488fbfd4e5ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113627Z:e9d4b682-a29a-4517-be5c-488fbfd4e5ab',
  date: 'Wed, 27 Sep 2017 11:36:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"expressRouteCircuitName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n  \"etag\": \"W/\\\"658911d9-759b-4ddb-b08f-42cd7c7f3f4c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b9476be9-efda-4a85-af45-de48b3655d7d\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f9170342-317b-43b8-883b-a539a65b80cf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/f9170342-317b-43b8-883b-a539a65b80cf?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e9d4b682-a29a-4517-be5c-488fbfd4e5ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113627Z:e9d4b682-a29a-4517-be5c-488fbfd4e5ab',
  date: 'Wed, 27 Sep 2017 11:36:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/f9170342-317b-43b8-883b-a539a65b80cf?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f432a4d2-1671-4e1d-bbd0-8b06b3b20af7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7ef6405f-d276-41e6-b883-a0d610996c5b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113658Z:7ef6405f-d276-41e6-b883-a0d610996c5b',
  date: 'Wed, 27 Sep 2017 11:36:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/f9170342-317b-43b8-883b-a539a65b80cf?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f432a4d2-1671-4e1d-bbd0-8b06b3b20af7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7ef6405f-d276-41e6-b883-a0d610996c5b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113658Z:7ef6405f-d276-41e6-b883-a0d610996c5b',
  date: 'Wed, 27 Sep 2017 11:36:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/f9170342-317b-43b8-883b-a539a65b80cf?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f94b8d75-0480-475c-a4c4-d00182d2179b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cfcb18ea-91e2-4a85-b2bf-cd47f4f26f46',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113729Z:cfcb18ea-91e2-4a85-b2bf-cd47f4f26f46',
  date: 'Wed, 27 Sep 2017 11:37:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/f9170342-317b-43b8-883b-a539a65b80cf?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f94b8d75-0480-475c-a4c4-d00182d2179b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cfcb18ea-91e2-4a85-b2bf-cd47f4f26f46',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113729Z:cfcb18ea-91e2-4a85-b2bf-cd47f4f26f46',
  date: 'Wed, 27 Sep 2017 11:37:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n  \"etag\": \"W/\\\"7babb2cc-31d1-4f24-b20c-eb51d4f9a686\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b9476be9-efda-4a85-af45-de48b3655d7d\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"2181422a-8d08-45c2-942e-15f8658d1d09\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a77bf4da-447f-487d-a0eb-c88b995aecad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8fc55c79-aabd-4efb-8a43-3403caf09d2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113730Z:8fc55c79-aabd-4efb-8a43-3403caf09d2d',
  date: 'Wed, 27 Sep 2017 11:37:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n  \"etag\": \"W/\\\"7babb2cc-31d1-4f24-b20c-eb51d4f9a686\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b9476be9-efda-4a85-af45-de48b3655d7d\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"2181422a-8d08-45c2-942e-15f8658d1d09\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a77bf4da-447f-487d-a0eb-c88b995aecad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8fc55c79-aabd-4efb-8a43-3403caf09d2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113730Z:8fc55c79-aabd-4efb-8a43-3403caf09d2d',
  date: 'Wed, 27 Sep 2017 11:37:30 GMT',
  connection: 'close' });
 return result; }]];
