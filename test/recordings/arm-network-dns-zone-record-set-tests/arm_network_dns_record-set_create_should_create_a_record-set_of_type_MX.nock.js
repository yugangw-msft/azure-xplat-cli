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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6232/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6232\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"403d553c-46e5-466d-8e33-69d4744e625c\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '403d553c-46e5-466d-8e33-69d4744e625c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1ca89c67-9c4b-40d1-b5e5-28808bebdd60',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '46351066-089c-4f49-87bf-39f1fb7eeb40',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T140648Z:46351066-089c-4f49-87bf-39f1fb7eeb40',
  date: 'Tue, 07 Nov 2017 14:06:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6232/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6232\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"403d553c-46e5-466d-8e33-69d4744e625c\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '403d553c-46e5-466d-8e33-69d4744e625c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1ca89c67-9c4b-40d1-b5e5-28808bebdd60',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '46351066-089c-4f49-87bf-39f1fb7eeb40',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T140648Z:46351066-089c-4f49-87bf-39f1fb7eeb40',
  date: 'Tue, 07 Nov 2017 14:06:47 GMT',
  connection: 'close' });
 return result; }]];