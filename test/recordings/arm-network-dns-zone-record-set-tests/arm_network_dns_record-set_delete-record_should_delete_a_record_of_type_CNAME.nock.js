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
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3d8c-33b6f252d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3d8c-33b6f252d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '11e17e20-e5e5-4100-9f39-97e83cf0f9a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6ef9a098-25cb-4b81-995b-a0623e93c61e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092129Z:6ef9a098-25cb-4b81-995b-a0623e93c61e',
  date: 'Wed, 01 Nov 2017 09:21:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-3d8c-33b6f252d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-3d8c-33b6f252d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '11e17e20-e5e5-4100-9f39-97e83cf0f9a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6ef9a098-25cb-4b81-995b-a0623e93c61e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092129Z:6ef9a098-25cb-4b81-995b-a0623e93c61e',
  date: 'Wed, 01 Nov 2017 09:21:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"7c9b667b-5806-4e6f-bc2e-aed56cb7f4cd\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: '7c9b667b-5806-4e6f-bc2e-aed56cb7f4cd',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b92e300e-e22f-437d-8cdf-6c598d607412',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '94c188b5-25ae-4261-9d2f-419a49640161',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092130Z:94c188b5-25ae-4261-9d2f-419a49640161',
  date: 'Wed, 01 Nov 2017 09:21:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"7c9b667b-5806-4e6f-bc2e-aed56cb7f4cd\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: '7c9b667b-5806-4e6f-bc2e-aed56cb7f4cd',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b92e300e-e22f-437d-8cdf-6c598d607412',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '94c188b5-25ae-4261-9d2f-419a49640161',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092130Z:94c188b5-25ae-4261-9d2f-419a49640161',
  date: 'Wed, 01 Nov 2017 09:21:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"bc9af61a-9430-4ef7-82b3-61e14e78fb1c\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  etag: 'bc9af61a-9430-4ef7-82b3-61e14e78fb1c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fb0cdb46-75fd-4063-bb23-a9e79f22adc0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4bc459e7-8853-4e7b-a2be-8b2ea4102df0',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092131Z:4bc459e7-8853-4e7b-a2be-8b2ea4102df0',
  date: 'Wed, 01 Nov 2017 09:21:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set9939/providers/Microsoft.Network/dnsZones/exampledns.com/CNAME/set-cname?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set9939\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"bc9af61a-9430-4ef7-82b3-61e14e78fb1c\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  etag: 'bc9af61a-9430-4ef7-82b3-61e14e78fb1c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fb0cdb46-75fd-4063-bb23-a9e79f22adc0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4bc459e7-8853-4e7b-a2be-8b2ea4102df0',
  'x-ms-routing-request-id': 'WESTEUROPE:20171101T092131Z:4bc459e7-8853-4e7b-a2be-8b2ea4102df0',
  date: 'Wed, 01 Nov 2017 09:21:30 GMT',
  connection: 'close' });
 return result; }]];