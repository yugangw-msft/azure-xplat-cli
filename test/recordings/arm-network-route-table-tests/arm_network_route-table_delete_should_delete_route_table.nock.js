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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"443a4a5b-d85b-4912-9559-496239e4b68f\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"18d0676c-dd42-4215-be9d-182c588070b4\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"443a4a5b-d85b-4912-9559-496239e4b68f"',
  'x-ms-request-id': '78b3e3ae-7a5f-4706-bdc1-bb8428d7c4ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '68004c6b-ebb3-4092-882c-e36cf2c5caf0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122844Z:68004c6b-ebb3-4092-882c-e36cf2c5caf0',
  date: 'Fri, 25 Mar 2016 12:28:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"443a4a5b-d85b-4912-9559-496239e4b68f\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"18d0676c-dd42-4215-be9d-182c588070b4\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"443a4a5b-d85b-4912-9559-496239e4b68f"',
  'x-ms-request-id': '78b3e3ae-7a5f-4706-bdc1-bb8428d7c4ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '68004c6b-ebb3-4092-882c-e36cf2c5caf0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122844Z:68004c6b-ebb3-4092-882c-e36cf2c5caf0',
  date: 'Fri, 25 Mar 2016 12:28:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/add28bd2-a3f7-4e84-986a-15f7c68e8fe7?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': 'add28bd2-a3f7-4e84-986a-15f7c68e8fe7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/add28bd2-a3f7-4e84-986a-15f7c68e8fe7?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'f8ae4e1b-2bb0-4339-847e-b3b53d70c584',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122848Z:f8ae4e1b-2bb0-4339-847e-b3b53d70c584',
  date: 'Fri, 25 Mar 2016 12:28:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/add28bd2-a3f7-4e84-986a-15f7c68e8fe7?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': 'add28bd2-a3f7-4e84-986a-15f7c68e8fe7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/add28bd2-a3f7-4e84-986a-15f7c68e8fe7?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'f8ae4e1b-2bb0-4339-847e-b3b53d70c584',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122848Z:f8ae4e1b-2bb0-4339-847e-b3b53d70c584',
  date: 'Fri, 25 Mar 2016 12:28:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/add28bd2-a3f7-4e84-986a-15f7c68e8fe7?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8d84a42b-61a8-4000-b263-6a2324cae8de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'd0258b1a-d6b9-4163-b802-0b2c5458aff6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122919Z:d0258b1a-d6b9-4163-b802-0b2c5458aff6',
  date: 'Fri, 25 Mar 2016 12:29:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/add28bd2-a3f7-4e84-986a-15f7c68e8fe7?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8d84a42b-61a8-4000-b263-6a2324cae8de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'd0258b1a-d6b9-4163-b802-0b2c5458aff6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122919Z:d0258b1a-d6b9-4163-b802-0b2c5458aff6',
  date: 'Fri, 25 Mar 2016 12:29:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '80a14424-e0dc-4e68-bed7-4fa94ddee450',
  'x-ms-correlation-request-id': '80a14424-e0dc-4e68-bed7-4fa94ddee450',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122920Z:80a14424-e0dc-4e68-bed7-4fa94ddee450',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:29:19 GMT',
  connection: 'close',
  'content-length': '172' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '80a14424-e0dc-4e68-bed7-4fa94ddee450',
  'x-ms-correlation-request-id': '80a14424-e0dc-4e68-bed7-4fa94ddee450',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122920Z:80a14424-e0dc-4e68-bed7-4fa94ddee450',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:29:19 GMT',
  connection: 'close',
  'content-length': '172' });
 return result; }]];