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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94398f5c-52de-43a8-8008-28549ef1dd30"',
  'x-ms-request-id': '1da36f25-e84b-44c1-9fde-3972f22f299e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1197e6c0-3e59-48e2-a2d4-09ee74d72c24',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071802Z:1197e6c0-3e59-48e2-a2d4-09ee74d72c24',
  date: 'Wed, 27 Sep 2017 07:18:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94398f5c-52de-43a8-8008-28549ef1dd30"',
  'x-ms-request-id': '1da36f25-e84b-44c1-9fde-3972f22f299e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1197e6c0-3e59-48e2-a2d4-09ee74d72c24',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071802Z:1197e6c0-3e59-48e2-a2d4-09ee74d72c24',
  date: 'Wed, 27 Sep 2017 07:18:02 GMT',
  connection: 'close' });
 return result; }]];