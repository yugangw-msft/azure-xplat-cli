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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b38d3b1a-7e07-4609-ac6c-7df4090f9f3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'bc3143d4-5adc-409d-9308-724283c1a9af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080425Z:bc3143d4-5adc-409d-9308-724283c1a9af',
  date: 'Wed, 27 Sep 2017 08:04:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b38d3b1a-7e07-4609-ac6c-7df4090f9f3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'bc3143d4-5adc-409d-9308-724283c1a9af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080425Z:bc3143d4-5adc-409d-9308-724283c1a9af',
  date: 'Wed, 27 Sep 2017 08:04:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"d031d0fa-2aac-411b-9198-0ec6e3e7ce86\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '882ed8ea-9e32-444f-bf15-7455deee4546',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/882ed8ea-9e32-444f-bf15-7455deee4546?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e45e64e9-3292-4e6a-b0c5-0265db57f5ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080426Z:e45e64e9-3292-4e6a-b0c5-0265db57f5ba',
  date: 'Wed, 27 Sep 2017 08:04:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"d031d0fa-2aac-411b-9198-0ec6e3e7ce86\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '882ed8ea-9e32-444f-bf15-7455deee4546',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/882ed8ea-9e32-444f-bf15-7455deee4546?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e45e64e9-3292-4e6a-b0c5-0265db57f5ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080426Z:e45e64e9-3292-4e6a-b0c5-0265db57f5ba',
  date: 'Wed, 27 Sep 2017 08:04:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/882ed8ea-9e32-444f-bf15-7455deee4546?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4dbc42eb-786f-4e73-95c4-86fff3ba416e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e7462413-6793-40c2-ac19-04b7f546e549',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080457Z:e7462413-6793-40c2-ac19-04b7f546e549',
  date: 'Wed, 27 Sep 2017 08:04:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/882ed8ea-9e32-444f-bf15-7455deee4546?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4dbc42eb-786f-4e73-95c4-86fff3ba416e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e7462413-6793-40c2-ac19-04b7f546e549',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080457Z:e7462413-6793-40c2-ac19-04b7f546e549',
  date: 'Wed, 27 Sep 2017 08:04:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5"',
  'x-ms-request-id': '17800fa8-7ba0-451e-bbdc-dca63ec5f502',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '6d11aa9a-f0ed-42a4-9610-791e37f81252',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080458Z:6d11aa9a-f0ed-42a4-9610-791e37f81252',
  date: 'Wed, 27 Sep 2017 08:04:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5"',
  'x-ms-request-id': '17800fa8-7ba0-451e-bbdc-dca63ec5f502',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '6d11aa9a-f0ed-42a4-9610-791e37f81252',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080458Z:6d11aa9a-f0ed-42a4-9610-791e37f81252',
  date: 'Wed, 27 Sep 2017 08:04:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5"',
  'x-ms-request-id': 'bdb97ee3-f91f-4702-9b82-f8e08de3f252',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ff95de44-045a-4035-8cae-676e9fadfb46',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080458Z:ff95de44-045a-4035-8cae-676e9fadfb46',
  date: 'Wed, 27 Sep 2017 08:04:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6a62e6d6-39f7-4111-b4ef-2df8c3432aa5"',
  'x-ms-request-id': 'bdb97ee3-f91f-4702-9b82-f8e08de3f252',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ff95de44-045a-4035-8cae-676e9fadfb46',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080458Z:ff95de44-045a-4035-8cae-676e9fadfb46',
  date: 'Wed, 27 Sep 2017 08:04:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/f9018e6b-12c9-4d29-b07a-aecec83529f6?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'f9018e6b-12c9-4d29-b07a-aecec83529f6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/f9018e6b-12c9-4d29-b07a-aecec83529f6?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8afc4410-9a22-452a-8a62-d3c84f54c7b4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080459Z:8afc4410-9a22-452a-8a62-d3c84f54c7b4',
  date: 'Wed, 27 Sep 2017 08:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/f9018e6b-12c9-4d29-b07a-aecec83529f6?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'f9018e6b-12c9-4d29-b07a-aecec83529f6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/f9018e6b-12c9-4d29-b07a-aecec83529f6?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8afc4410-9a22-452a-8a62-d3c84f54c7b4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080459Z:8afc4410-9a22-452a-8a62-d3c84f54c7b4',
  date: 'Wed, 27 Sep 2017 08:04:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/f9018e6b-12c9-4d29-b07a-aecec83529f6?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '15f1447f-730d-4777-914f-2031789b9764',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'dbaf6383-2f7c-429a-9c7b-be3019423bb3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080530Z:dbaf6383-2f7c-429a-9c7b-be3019423bb3',
  date: 'Wed, 27 Sep 2017 08:05:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/f9018e6b-12c9-4d29-b07a-aecec83529f6?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '15f1447f-730d-4777-914f-2031789b9764',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'dbaf6383-2f7c-429a-9c7b-be3019423bb3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080530Z:dbaf6383-2f7c-429a-9c7b-be3019423bb3',
  date: 'Wed, 27 Sep 2017 08:05:30 GMT',
  connection: 'close' });
 return result; }]];