// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb-fip?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-lb-fip' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-request-id': '51b0a8ab-45f1-49e7-83d4-e2fec98ed4c6',
  'x-ms-correlation-request-id': '51b0a8ab-45f1-49e7-83d4-e2fec98ed4c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161145Z:51b0a8ab-45f1-49e7-83d4-e2fec98ed4c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:11:44 GMT',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb-fip?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip\",\"name\":\"xplat-test-lb-fip\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '1b7363bd-1099-4271-a28c-4423b35078ce',
  'x-ms-correlation-request-id': '1b7363bd-1099-4271-a28c-4423b35078ce',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161148Z:1b7363bd-1099-4271-a28c-4423b35078ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:11:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e8f22577-fc0a-419d-91a8-6b07ba058b6d',
  'x-ms-correlation-request-id': 'e8f22577-fc0a-419d-91a8-6b07ba058b6d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161148Z:e8f22577-fc0a-419d-91a8-6b07ba058b6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:11:48 GMT',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"7fa0f7bc-8442-4792-b334-7289182708e2\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e149f56f-f388-425f-8371-ce3ffb9b275a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '69124b9b-878f-41a4-b32f-6faae4056e48',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/69124b9b-878f-41a4-b32f-6faae4056e48?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '930188f9-284d-4145-8efe-4a0426b45d87',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161151Z:930188f9-284d-4145-8efe-4a0426b45d87',
  date: 'Mon, 15 Aug 2016 16:11:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"7fa0f7bc-8442-4792-b334-7289182708e2\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e149f56f-f388-425f-8371-ce3ffb9b275a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7fa0f7bc-8442-4792-b334-7289182708e2"',
  'x-ms-request-id': 'd07bb65d-e9ce-4a70-8774-2bff6ab0cc81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14832',
  'x-ms-correlation-request-id': '2383178b-1012-447c-9810-3dbfc8750aba',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161152Z:2383178b-1012-447c-9810-3dbfc8750aba',
  date: 'Mon, 15 Aug 2016 16:11:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/test-ip' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9dafa302-f435-4002-95e8-7dbf99a8e803',
  'x-ms-correlation-request-id': '9dafa302-f435-4002-95e8-7dbf99a8e803',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161153Z:9dafa302-f435-4002-95e8-7dbf99a8e803',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:11:52 GMT',
  'content-length': '164' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"3057f641-aecc-41f5-b1a0-0022de8155f7\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"fad444c5-845c-460a-b4df-0ae81a70393d\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '546',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd56bc754-b6b6-4ac3-8f58-0c62b932bf72',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/d56bc754-b6b6-4ac3-8f58-0c62b932bf72?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '14ef60d2-1af0-479d-937d-6c1ac4045649',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161156Z:14ef60d2-1af0-479d-937d-6c1ac4045649',
  date: 'Mon, 15 Aug 2016 16:11:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/d56bc754-b6b6-4ac3-8f58-0c62b932bf72?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0d7ab5f3-5826-48d5-a224-2944f7867490',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '158d4604-aef8-4421-b48a-676b507d6c61',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161227Z:158d4604-aef8-4421-b48a-676b507d6c61',
  date: 'Mon, 15 Aug 2016 16:12:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"6393ed14-c17f-4c3e-a6f9-700027b29841\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fad444c5-845c-460a-b4df-0ae81a70393d\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6393ed14-c17f-4c3e-a6f9-700027b29841"',
  'x-ms-request-id': '22c17ad6-a48a-400f-aa70-50cee4828ee6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'f99d647f-57e9-4274-8057-1f7506d10196',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161228Z:f99d647f-57e9-4274-8057-1f7506d10196',
  date: 'Mon, 15 Aug 2016 16:12:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"7fa0f7bc-8442-4792-b334-7289182708e2\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e149f56f-f388-425f-8371-ce3ffb9b275a\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7fa0f7bc-8442-4792-b334-7289182708e2"',
  'x-ms-request-id': 'ea1ebf57-33f2-454a-8084-be071a324d06',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '53fb0736-6650-451c-9ea4-71ff2a0c65af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161230Z:53fb0736-6650-451c-9ea4-71ff2a0c65af',
  date: 'Mon, 15 Aug 2016 16:12:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"9915c326-ff49-4006-81cc-46a6cc8fc25c\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e149f56f-f388-425f-8371-ce3ffb9b275a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"9915c326-ff49-4006-81cc-46a6cc8fc25c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66b78c65-f8f9-4301-9925-0282b39b9e53',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/66b78c65-f8f9-4301-9925-0282b39b9e53?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '8407ba07-5cfb-4ee0-bcf4-1cbe8ac9681a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161231Z:8407ba07-5cfb-4ee0-bcf4-1cbe8ac9681a',
  date: 'Mon, 15 Aug 2016 16:12:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"9915c326-ff49-4006-81cc-46a6cc8fc25c\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e149f56f-f388-425f-8371-ce3ffb9b275a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"9915c326-ff49-4006-81cc-46a6cc8fc25c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9915c326-ff49-4006-81cc-46a6cc8fc25c"',
  'x-ms-request-id': '585df8a8-dc02-431a-a169-0fafbfbac035',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14772',
  'x-ms-correlation-request-id': '61159e22-30f0-4278-a819-d4a4f0740371',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161232Z:61159e22-30f0-4278-a819-d4a4f0740371',
  date: 'Mon, 15 Aug 2016 16:12:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"9915c326-ff49-4006-81cc-46a6cc8fc25c\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e149f56f-f388-425f-8371-ce3ffb9b275a\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"9915c326-ff49-4006-81cc-46a6cc8fc25c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9915c326-ff49-4006-81cc-46a6cc8fc25c"',
  'x-ms-request-id': '3b0b8f21-665f-4697-8f7d-c373c37fe700',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'ac1014cc-7191-4d02-b40d-e1a36cc8f082',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161233Z:ac1014cc-7191-4d02-b40d-e1a36cc8f082',
  date: 'Mon, 15 Aug 2016 16:12:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/4fc6b014-38b0-4ea0-b647-36577ae2455e?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '4fc6b014-38b0-4ea0-b647-36577ae2455e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/4fc6b014-38b0-4ea0-b647-36577ae2455e?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '8b6aa91b-7f6d-4fe2-8722-a6e6113f51ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161235Z:8b6aa91b-7f6d-4fe2-8722-a6e6113f51ff',
  date: 'Mon, 15 Aug 2016 16:12:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/4fc6b014-38b0-4ea0-b647-36577ae2455e?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '41773efe-0fa5-413c-a037-6a935f9eb167',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '85654bcb-4185-4cce-838e-7df166c0f0f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161306Z:85654bcb-4185-4cce-838e-7df166c0f0f8',
  date: 'Mon, 15 Aug 2016 16:13:05 GMT' });
 return result; }]];
