// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRtTblRoutes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14904',
  'x-ms-request-id': 'da9378a0-081c-4920-9849-90286c565e15',
  'x-ms-correlation-request-id': 'da9378a0-081c-4920-9849-90286c565e15',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113116Z:da9378a0-081c-4920-9849-90286c565e15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:31:15 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRtTblRoutes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14904',
  'x-ms-request-id': 'da9378a0-081c-4920-9849-90286c565e15',
  'x-ms-correlation-request-id': 'da9378a0-081c-4920-9849-90286c565e15',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113116Z:da9378a0-081c-4920-9849-90286c565e15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:31:15 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes\",\"name\":\"xplatTestRtTblRoutes\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1168',
  'x-ms-request-id': '782d2fb2-92ef-415c-b1fe-85d70dbf3300',
  'x-ms-correlation-request-id': '782d2fb2-92ef-415c-b1fe-85d70dbf3300',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113118Z:782d2fb2-92ef-415c-b1fe-85d70dbf3300',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:31:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes\",\"name\":\"xplatTestRtTblRoutes\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1168',
  'x-ms-request-id': '782d2fb2-92ef-415c-b1fe-85d70dbf3300',
  'x-ms-correlation-request-id': '782d2fb2-92ef-415c-b1fe-85d70dbf3300',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113118Z:782d2fb2-92ef-415c-b1fe-85d70dbf3300',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:31:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRtTblRoute' under resource group 'xplatTestRtTblRoutes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4893ac16-5dbd-47d6-b68e-09a231200f6b',
  'x-ms-correlation-request-id': '4893ac16-5dbd-47d6-b68e-09a231200f6b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113119Z:4893ac16-5dbd-47d6-b68e-09a231200f6b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:31:18 GMT',
  connection: 'close',
  'content-length': '167' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRtTblRoute' under resource group 'xplatTestRtTblRoutes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4893ac16-5dbd-47d6-b68e-09a231200f6b',
  'x-ms-correlation-request-id': '4893ac16-5dbd-47d6-b68e-09a231200f6b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113119Z:4893ac16-5dbd-47d6-b68e-09a231200f6b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:31:18 GMT',
  connection: 'close',
  'content-length': '167' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"24965be4-851e-443d-98f8-12bc0dc13651\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '4503277d-b93f-4cea-a1b9-9c5eede5090a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/4503277d-b93f-4cea-a1b9-9c5eede5090a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': '92f4f5de-c4e7-468a-b426-49648955e891',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113125Z:92f4f5de-c4e7-468a-b426-49648955e891',
  date: 'Tue, 29 Dec 2015 11:31:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"24965be4-851e-443d-98f8-12bc0dc13651\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '4503277d-b93f-4cea-a1b9-9c5eede5090a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/4503277d-b93f-4cea-a1b9-9c5eede5090a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': '92f4f5de-c4e7-468a-b426-49648955e891',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113125Z:92f4f5de-c4e7-468a-b426-49648955e891',
  date: 'Tue, 29 Dec 2015 11:31:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/4503277d-b93f-4cea-a1b9-9c5eede5090a?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '229b6220-da02-4d0f-bb3a-7c2c921b502f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': '640a4c22-330e-4031-b509-16c05b06bea3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113137Z:640a4c22-330e-4031-b509-16c05b06bea3',
  date: 'Tue, 29 Dec 2015 11:31:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/4503277d-b93f-4cea-a1b9-9c5eede5090a?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '229b6220-da02-4d0f-bb3a-7c2c921b502f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': '640a4c22-330e-4031-b509-16c05b06bea3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113137Z:640a4c22-330e-4031-b509-16c05b06bea3',
  date: 'Tue, 29 Dec 2015 11:31:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"0ec08102-fe7e-4d7b-842a-c5e84d9d345c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '454',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0ec08102-fe7e-4d7b-842a-c5e84d9d345c"',
  'x-ms-request-id': 'bcad6b64-e5e8-4029-9aaa-81ca433969ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': 'adfbaacd-72c2-4494-9f54-5dd9885a8f02',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113138Z:adfbaacd-72c2-4494-9f54-5dd9885a8f02',
  date: 'Tue, 29 Dec 2015 11:31:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"0ec08102-fe7e-4d7b-842a-c5e84d9d345c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '454',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0ec08102-fe7e-4d7b-842a-c5e84d9d345c"',
  'x-ms-request-id': 'bcad6b64-e5e8-4029-9aaa-81ca433969ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': 'adfbaacd-72c2-4494-9f54-5dd9885a8f02',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113138Z:adfbaacd-72c2-4494-9f54-5dd9885a8f02',
  date: 'Tue, 29 Dec 2015 11:31:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"0ec08102-fe7e-4d7b-842a-c5e84d9d345c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '454',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0ec08102-fe7e-4d7b-842a-c5e84d9d345c"',
  'x-ms-request-id': 'e53ede43-d4e1-4808-a4a5-eeb9555b3b36',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14909',
  'x-ms-correlation-request-id': '0c017f89-a6b6-4779-8ff1-fc2c3983245f',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113140Z:0c017f89-a6b6-4779-8ff1-fc2c3983245f',
  date: 'Tue, 29 Dec 2015 11:31:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"0ec08102-fe7e-4d7b-842a-c5e84d9d345c\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '454',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0ec08102-fe7e-4d7b-842a-c5e84d9d345c"',
  'x-ms-request-id': 'e53ede43-d4e1-4808-a4a5-eeb9555b3b36',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14909',
  'x-ms-correlation-request-id': '0c017f89-a6b6-4779-8ff1-fc2c3983245f',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113140Z:0c017f89-a6b6-4779-8ff1-fc2c3983245f',
  date: 'Tue, 29 Dec 2015 11:31:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '904df4a3-0721-44ec-80ca-795a4032a364',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '2f24a1d2-31e1-42e1-834c-2d5f1767a0be',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113142Z:2f24a1d2-31e1-42e1-834c-2d5f1767a0be',
  date: 'Tue, 29 Dec 2015 11:31:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '904df4a3-0721-44ec-80ca-795a4032a364',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '2f24a1d2-31e1-42e1-834c-2d5f1767a0be',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113142Z:2f24a1d2-31e1-42e1-834c-2d5f1767a0be',
  date: 'Tue, 29 Dec 2015 11:31:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"71c6448a-1d56-4b81-8aa2-7ceb34323889\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'c6c3910a-270b-46fe-9603-2e0caae4dd03',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/c6c3910a-270b-46fe-9603-2e0caae4dd03?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1165',
  'x-ms-correlation-request-id': '28ee9c90-0b14-4a35-9397-8df8856e9d8c',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113144Z:28ee9c90-0b14-4a35-9397-8df8856e9d8c',
  date: 'Tue, 29 Dec 2015 11:31:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"71c6448a-1d56-4b81-8aa2-7ceb34323889\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'c6c3910a-270b-46fe-9603-2e0caae4dd03',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/c6c3910a-270b-46fe-9603-2e0caae4dd03?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1165',
  'x-ms-correlation-request-id': '28ee9c90-0b14-4a35-9397-8df8856e9d8c',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113144Z:28ee9c90-0b14-4a35-9397-8df8856e9d8c',
  date: 'Tue, 29 Dec 2015 11:31:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/c6c3910a-270b-46fe-9603-2e0caae4dd03?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61b03e37-0f58-4234-9f7e-fbe5eca9e8d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14908',
  'x-ms-correlation-request-id': 'c56c8c9c-dead-48d3-8873-b03df43ff26f',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113155Z:c56c8c9c-dead-48d3-8873-b03df43ff26f',
  date: 'Tue, 29 Dec 2015 11:31:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/c6c3910a-270b-46fe-9603-2e0caae4dd03?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61b03e37-0f58-4234-9f7e-fbe5eca9e8d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14908',
  'x-ms-correlation-request-id': 'c56c8c9c-dead-48d3-8873-b03df43ff26f',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113155Z:c56c8c9c-dead-48d3-8873-b03df43ff26f',
  date: 'Tue, 29 Dec 2015 11:31:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"38680c57-d712-48b8-8c68-f0105346081e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"38680c57-d712-48b8-8c68-f0105346081e"',
  'x-ms-request-id': 'b9b17d94-090a-471f-a2e2-226bc4f1bebe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14901',
  'x-ms-correlation-request-id': '54cb018d-8993-496a-809d-810d63721147',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113157Z:54cb018d-8993-496a-809d-810d63721147',
  date: 'Tue, 29 Dec 2015 11:31:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"38680c57-d712-48b8-8c68-f0105346081e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"38680c57-d712-48b8-8c68-f0105346081e"',
  'x-ms-request-id': 'b9b17d94-090a-471f-a2e2-226bc4f1bebe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14901',
  'x-ms-correlation-request-id': '54cb018d-8993-496a-809d-810d63721147',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113157Z:54cb018d-8993-496a-809d-810d63721147',
  date: 'Tue, 29 Dec 2015 11:31:57 GMT',
  connection: 'close' });
 return result; }]];
