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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"0baafbd8-d9d6-49f9-99be-328e80e39c4a\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"96d15f57-d62d-4a1a-94eb-31af327ddbe7\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 500\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"8b840e88-e295-4310-833a-d80c08b6fa65\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Premium_UnlimitedData\",\r\n    \"tier\": \"Premium\",\r\n    \"family\": \"UnlimitedData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1054',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73296256-6ba7-4d51-901d-5f232a02bbf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': 'cfb14f2d-e2c0-4495-8edb-0d093530b667',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T173343Z:cfb14f2d-e2c0-4495-8edb-0d093530b667',
  date: 'Mon, 15 Aug 2016 17:33:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/3eb08fc5-ccda-4af5-b8d2-039ba198a668?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '3eb08fc5-ccda-4af5-b8d2-039ba198a668',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/3eb08fc5-ccda-4af5-b8d2-039ba198a668?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '5908694f-b4ea-4657-8451-d4ffc31647e8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T173344Z:5908694f-b4ea-4657-8451-d4ffc31647e8',
  date: 'Mon, 15 Aug 2016 17:33:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/3eb08fc5-ccda-4af5-b8d2-039ba198a668?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'caae7082-a990-4d45-99e9-ca5dddd49078',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'e7f201e4-d226-4698-bbc1-38a97edcc21f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T173415Z:e7f201e4-d226-4698-bbc1-38a97edcc21f',
  date: 'Mon, 15 Aug 2016 17:34:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/test-circuit' under resource group 'xplat-test-express-route-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1eeda77d-5508-4eee-aa6b-85fd2f57d5f1',
  'x-ms-correlation-request-id': '1eeda77d-5508-4eee-aa6b-85fd2f57d5f1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T173416Z:1eeda77d-5508-4eee-aa6b-85fd2f57d5f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 17:34:15 GMT',
  'content-length': '187' });
 return result; }]];
