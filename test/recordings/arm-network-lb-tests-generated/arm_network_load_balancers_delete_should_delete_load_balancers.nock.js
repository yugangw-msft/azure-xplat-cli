// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"4395b2e7-44dd-441d-97cc-1ac1b3a8cd83\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"80a5ab40-3488-4a82-90f3-d75918bbd5e5\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4395b2e7-44dd-441d-97cc-1ac1b3a8cd83"',
  'x-ms-request-id': 'abcaf4c5-de0d-442a-a108-ae18992d2279',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '4bf0cab5-35bb-42b2-a16d-268263bf926d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111623Z:4bf0cab5-35bb-42b2-a16d-268263bf926d',
  date: 'Wed, 27 Sep 2017 11:16:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"4395b2e7-44dd-441d-97cc-1ac1b3a8cd83\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"80a5ab40-3488-4a82-90f3-d75918bbd5e5\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4395b2e7-44dd-441d-97cc-1ac1b3a8cd83"',
  'x-ms-request-id': 'abcaf4c5-de0d-442a-a108-ae18992d2279',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '4bf0cab5-35bb-42b2-a16d-268263bf926d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111623Z:4bf0cab5-35bb-42b2-a16d-268263bf926d',
  date: 'Wed, 27 Sep 2017 11:16:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/bc932652-2d78-4ac4-92f0-bb8561a72ef2?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'bc932652-2d78-4ac4-92f0-bb8561a72ef2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/bc932652-2d78-4ac4-92f0-bb8561a72ef2?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '0b0e7d39-87e7-413a-b873-7f9e67221fc4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111624Z:0b0e7d39-87e7-413a-b873-7f9e67221fc4',
  date: 'Wed, 27 Sep 2017 11:16:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/bc932652-2d78-4ac4-92f0-bb8561a72ef2?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'bc932652-2d78-4ac4-92f0-bb8561a72ef2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/bc932652-2d78-4ac4-92f0-bb8561a72ef2?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '0b0e7d39-87e7-413a-b873-7f9e67221fc4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111624Z:0b0e7d39-87e7-413a-b873-7f9e67221fc4',
  date: 'Wed, 27 Sep 2017 11:16:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/bc932652-2d78-4ac4-92f0-bb8561a72ef2?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a93254b5-973b-4edc-ba4f-79c24ccb9513',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '2167514e-f49d-42aa-8829-ba51b3ac6e58',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111655Z:2167514e-f49d-42aa-8829-ba51b3ac6e58',
  date: 'Wed, 27 Sep 2017 11:16:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/bc932652-2d78-4ac4-92f0-bb8561a72ef2?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a93254b5-973b-4edc-ba4f-79c24ccb9513',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '2167514e-f49d-42aa-8829-ba51b3ac6e58',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111655Z:2167514e-f49d-42aa-8829-ba51b3ac6e58',
  date: 'Wed, 27 Sep 2017 11:16:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '962fcf75-19b6-422e-a493-5d96607ada27',
  'x-ms-correlation-request-id': '962fcf75-19b6-422e-a493-5d96607ada27',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111656Z:962fcf75-19b6-422e-a493-5d96607ada27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:16:56 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '962fcf75-19b6-422e-a493-5d96607ada27',
  'x-ms-correlation-request-id': '962fcf75-19b6-422e-a493-5d96607ada27',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111656Z:962fcf75-19b6-422e-a493-5d96607ada27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:16:56 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-09-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'e8be048b-103f-4676-9785-1d977945ec29',
  'x-ms-correlation-request-id': 'e8be048b-103f-4676-9785-1d977945ec29',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111657Z:e8be048b-103f-4676-9785-1d977945ec29',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:16:57 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-09-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'e8be048b-103f-4676-9785-1d977945ec29',
  'x-ms-correlation-request-id': 'e8be048b-103f-4676-9785-1d977945ec29',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111657Z:e8be048b-103f-4676-9785-1d977945ec29',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:16:57 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];