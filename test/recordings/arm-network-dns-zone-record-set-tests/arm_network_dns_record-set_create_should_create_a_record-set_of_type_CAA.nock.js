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
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/CAA/set-caa?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CAA\\/set-caa\",\"name\":\"set-caa\",\"type\":\"Microsoft.Network\\/dnszones\\/CAA\",\"etag\":\"9f0d4522-1b3f-4627-9df7-5afa19c59fd5\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-caa.exampledns.com.\",\"TTL\":3600,\"caaRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '9f0d4522-1b3f-4627-9df7-5afa19c59fd5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '31d85489-2e7f-4592-a521-013d9da940b8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '126bb307-5166-4983-b18b-89ab15e37e8c',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092208Z:126bb307-5166-4983-b18b-89ab15e37e8c',
  date: 'Wed, 01 Nov 2017 09:22:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/CAA/set-caa?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CAA\\/set-caa\",\"name\":\"set-caa\",\"type\":\"Microsoft.Network\\/dnszones\\/CAA\",\"etag\":\"9f0d4522-1b3f-4627-9df7-5afa19c59fd5\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-caa.exampledns.com.\",\"TTL\":3600,\"caaRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '9f0d4522-1b3f-4627-9df7-5afa19c59fd5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '31d85489-2e7f-4592-a521-013d9da940b8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '126bb307-5166-4983-b18b-89ab15e37e8c',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092208Z:126bb307-5166-4983-b18b-89ab15e37e8c',
  date: 'Wed, 01 Nov 2017 09:22:08 GMT',
  connection: 'close' });
 return result; }]];