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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3d8c-33b6f252d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3d8c-33b6f252d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3f5c6e31-939e-43c0-aa29-2fc3425ccf82',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': '37300c99-f498-418b-be16-ecdd3c5c2e54',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092145Z:37300c99-f498-418b-be16-ecdd3c5c2e54',
  date: 'Wed, 01 Nov 2017 09:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3d8c-33b6f252d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":4}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3d8c-33b6f252d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3f5c6e31-939e-43c0-aa29-2fc3425ccf82',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': '37300c99-f498-418b-be16-ecdd3c5c2e54',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092145Z:37300c99-f498-418b-be16-ecdd3c5c2e54',
  date: 'Wed, 01 Nov 2017 09:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"5df43754-b891-4444-b008-5c3da398fd81\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-ns.exampledns.com.\",\"TTL\":3600,\"NSRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '5df43754-b891-4444-b008-5c3da398fd81',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fdf18cd2-362e-4b2e-b344-9d05b1b1f65a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd6dc1f97-bc3e-4550-905b-328af86e0f2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092146Z:d6dc1f97-bc3e-4550-905b-328af86e0f2c',
  date: 'Wed, 01 Nov 2017 09:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"5df43754-b891-4444-b008-5c3da398fd81\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-ns.exampledns.com.\",\"TTL\":3600,\"NSRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '5df43754-b891-4444-b008-5c3da398fd81',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fdf18cd2-362e-4b2e-b344-9d05b1b1f65a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd6dc1f97-bc3e-4550-905b-328af86e0f2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092146Z:d6dc1f97-bc3e-4550-905b-328af86e0f2c',
  date: 'Wed, 01 Nov 2017 09:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"fbc13ae6-fc29-4ada-a287-9c8a61f3a9f2\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-ns.exampledns.com.\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1.com.\"}]}}", { 'cache-control': 'private',
  'content-length': '419',
  'content-type': 'application/json; charset=utf-8',
  etag: 'fbc13ae6-fc29-4ada-a287-9c8a61f3a9f2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8c76656b-5b05-47fc-9187-1fd4af0a58eb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0d8483b2-1bff-46d2-8e06-f902f6f3f743',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092147Z:0d8483b2-1bff-46d2-8e06-f902f6f3f743',
  date: 'Wed, 01 Nov 2017 09:21:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"fbc13ae6-fc29-4ada-a287-9c8a61f3a9f2\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-ns.exampledns.com.\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1.com.\"}]}}", { 'cache-control': 'private',
  'content-length': '419',
  'content-type': 'application/json; charset=utf-8',
  etag: 'fbc13ae6-fc29-4ada-a287-9c8a61f3a9f2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8c76656b-5b05-47fc-9187-1fd4af0a58eb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0d8483b2-1bff-46d2-8e06-f902f6f3f743',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092147Z:0d8483b2-1bff-46d2-8e06-f902f6f3f743',
  date: 'Wed, 01 Nov 2017 09:21:47 GMT',
  connection: 'close' });
 return result; }]];