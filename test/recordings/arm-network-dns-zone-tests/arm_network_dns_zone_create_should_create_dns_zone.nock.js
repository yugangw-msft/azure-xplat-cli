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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourcegroups/xplat-test-dns-zone?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-dns-zone' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '0918e59b-9f1f-4f51-914b-ca097e1dca89',
  'x-ms-correlation-request-id': '0918e59b-9f1f-4f51-914b-ca097e1dca89',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T144635Z:0918e59b-9f1f-4f51-914b-ca097e1dca89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Nov 2017 14:46:35 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourcegroups/xplat-test-dns-zone?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-dns-zone' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '0918e59b-9f1f-4f51-914b-ca097e1dca89',
  'x-ms-correlation-request-id': '0918e59b-9f1f-4f51-914b-ca097e1dca89',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T144635Z:0918e59b-9f1f-4f51-914b-ca097e1dca89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Nov 2017 14:46:35 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourcegroups/xplat-test-dns-zone?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone\",\"name\":\"xplat-test-dns-zone\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'b08d1b03-eb14-4496-8d0a-aa259f9d6f8f',
  'x-ms-correlation-request-id': 'b08d1b03-eb14-4496-8d0a-aa259f9d6f8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T144638Z:b08d1b03-eb14-4496-8d0a-aa259f9d6f8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Nov 2017 14:46:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourcegroups/xplat-test-dns-zone?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone\",\"name\":\"xplat-test-dns-zone\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'b08d1b03-eb14-4496-8d0a-aa259f9d6f8f',
  'x-ms-correlation-request-id': 'b08d1b03-eb14-4496-8d0a-aa259f9d6f8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T144638Z:b08d1b03-eb14-4496-8d0a-aa259f9d6f8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Nov 2017 14:46:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-cba3-613ad757d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.ppe.azure-dns.com.\",\"ns2-04.ppe.azure-dns.net.\",\"ns3-04.ppe.azure-dns.org.\",\"ns4-04.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2,\"zoneType\":\"Public\"}}", { 'cache-control': 'private',
  'content-length': '533',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-cba3-613ad757d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0b2e227a-3218-4fae-8d42-9f14e0d24edb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '96e467ac-d3dd-4f10-9c5a-3d8ce2b14d6a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T144645Z:96e467ac-d3dd-4f10-9c5a-3d8ce2b14d6a',
  date: 'Tue, 07 Nov 2017 14:46:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-cba3-613ad757d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.ppe.azure-dns.com.\",\"ns2-04.ppe.azure-dns.net.\",\"ns3-04.ppe.azure-dns.org.\",\"ns4-04.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2,\"zoneType\":\"Public\"}}", { 'cache-control': 'private',
  'content-length': '533',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-cba3-613ad757d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0b2e227a-3218-4fae-8d42-9f14e0d24edb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '96e467ac-d3dd-4f10-9c5a-3d8ce2b14d6a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171107T144645Z:96e467ac-d3dd-4f10-9c5a-3d8ce2b14d6a',
  date: 'Tue, 07 Nov 2017 14:46:45 GMT',
  connection: 'close' });
 return result; }]];