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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"applicationSecurityGroupName\",\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n      \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n      \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n      \"location\": \"westcentralus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '521',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f38a9ee1-c603-45a4-b24a-fe316fab69b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '67cc3de1-ded9-4f69-85f0-267ddef49e41',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071806Z:67cc3de1-ded9-4f69-85f0-267ddef49e41',
  date: 'Wed, 27 Sep 2017 07:18:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"applicationSecurityGroupName\",\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n      \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n      \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n      \"location\": \"westcentralus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '521',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f38a9ee1-c603-45a4-b24a-fe316fab69b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '67cc3de1-ded9-4f69-85f0-267ddef49e41',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071806Z:67cc3de1-ded9-4f69-85f0-267ddef49e41',
  date: 'Wed, 27 Sep 2017 07:18:06 GMT',
  connection: 'close' });
 return result; }]];