// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate7879?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate7879' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'ec631890-aeeb-4df6-bb06-45db05cf9b48',
  'x-ms-correlation-request-id': 'ec631890-aeeb-4df6-bb06-45db05cf9b48',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070619Z:ec631890-aeeb-4df6-bb06-45db05cf9b48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 07:06:18 GMT',
  connection: 'close',
  'content-length': '117' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate7879?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate7879' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'ec631890-aeeb-4df6-bb06-45db05cf9b48',
  'x-ms-correlation-request-id': 'ec631890-aeeb-4df6-bb06-45db05cf9b48',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070619Z:ec631890-aeeb-4df6-bb06-45db05cf9b48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 07:06:18 GMT',
  connection: 'close',
  'content-length': '117' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate7879?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879\",\"name\":\"xplatTestGAvailCreate7879\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2017-01-29T07:06:18.687Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '0a662248-a151-4c93-8e04-3f123ce3ca21',
  'x-ms-correlation-request-id': '0a662248-a151-4c93-8e04-3f123ce3ca21',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070620Z:0a662248-a151-4c93-8e04-3f123ce3ca21',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 07:06:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate7879?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879\",\"name\":\"xplatTestGAvailCreate7879\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2017-01-29T07:06:18.687Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '0a662248-a151-4c93-8e04-3f123ce3ca21',
  'x-ms-correlation-request-id': '0a662248-a151-4c93-8e04-3f123ce3ca21',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070620Z:0a662248-a151-4c93-8e04-3f123ce3ca21',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 07:06:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail506' under resource group 'xplatTestGAvailCreate7879' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd8ca5d26-9762-43b2-9326-0605d939c7aa',
  'x-ms-correlation-request-id': 'd8ca5d26-9762-43b2-9326-0605d939c7aa',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070621Z:d8ca5d26-9762-43b2-9326-0605d939c7aa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 07:06:20 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail506' under resource group 'xplatTestGAvailCreate7879' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd8ca5d26-9762-43b2-9326-0605d939c7aa',
  'x-ms-correlation-request-id': 'd8ca5d26-9762-43b2-9326-0605d939c7aa',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070621Z:d8ca5d26-9762-43b2-9326-0605d939c7aa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 Jan 2017 07:06:20 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506\",\r\n  \"name\": \"xplatTestaAvail506\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '432',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'f07caff9-09dc-4717-854a-1dc9b3bea050',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ad2872f4-77a0-4d14-a4f1-988586460264',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070622Z:ad2872f4-77a0-4d14-a4f1-988586460264',
  date: 'Sun, 29 Jan 2017 07:06:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506\",\r\n  \"name\": \"xplatTestaAvail506\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '432',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'f07caff9-09dc-4717-854a-1dc9b3bea050',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ad2872f4-77a0-4d14-a4f1-988586460264',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070622Z:ad2872f4-77a0-4d14-a4f1-988586460264',
  date: 'Sun, 29 Jan 2017 07:06:21 GMT',
  connection: 'close' });
 return result; }]];