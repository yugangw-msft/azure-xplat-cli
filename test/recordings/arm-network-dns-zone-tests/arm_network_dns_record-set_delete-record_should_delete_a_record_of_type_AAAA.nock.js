// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '58c1c2f0-d1ff-400c-871e-6984e5adfb1a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4c83d71d-9cb3-4b36-878b-71fe46fa76f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082717Z:4c83d71d-9cb3-4b36-878b-71fe46fa76f9',
  date: 'Wed, 28 Sep 2016 08:27:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '58c1c2f0-d1ff-400c-871e-6984e5adfb1a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4c83d71d-9cb3-4b36-878b-71fe46fa76f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082717Z:4c83d71d-9cb3-4b36-878b-71fe46fa76f9',
  date: 'Wed, 28 Sep 2016 08:27:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"74fb9d59-45d2-416d-a03b-e324b6c01c52\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '441',
  'content-type': 'application/json; charset=utf-8',
  etag: '74fb9d59-45d2-416d-a03b-e324b6c01c52',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7b9e5236-5ba2-4475-a696-76d9ef716b8e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '43d6a2a6-0831-4965-b3ae-79e1ea5c4b93',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082717Z:43d6a2a6-0831-4965-b3ae-79e1ea5c4b93',
  date: 'Wed, 28 Sep 2016 08:27:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"74fb9d59-45d2-416d-a03b-e324b6c01c52\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '441',
  'content-type': 'application/json; charset=utf-8',
  etag: '74fb9d59-45d2-416d-a03b-e324b6c01c52',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7b9e5236-5ba2-4475-a696-76d9ef716b8e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '43d6a2a6-0831-4965-b3ae-79e1ea5c4b93',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082717Z:43d6a2a6-0831-4965-b3ae-79e1ea5c4b93',
  date: 'Wed, 28 Sep 2016 08:27:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"64aa23d1-2d75-4669-b201-c5e0b812b805\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '405',
  'content-type': 'application/json; charset=utf-8',
  etag: '64aa23d1-2d75-4669-b201-c5e0b812b805',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '258e1af9-3ef2-4cc5-aab2-b26ecbe1d827',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7cf6193a-bd12-448f-b06e-95ebb1d7e453',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082719Z:7cf6193a-bd12-448f-b06e-95ebb1d7e453',
  date: 'Wed, 28 Sep 2016 08:27:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"64aa23d1-2d75-4669-b201-c5e0b812b805\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '405',
  'content-type': 'application/json; charset=utf-8',
  etag: '64aa23d1-2d75-4669-b201-c5e0b812b805',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '258e1af9-3ef2-4cc5-aab2-b26ecbe1d827',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7cf6193a-bd12-448f-b06e-95ebb1d7e453',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082719Z:7cf6193a-bd12-448f-b06e-95ebb1d7e453',
  date: 'Wed, 28 Sep 2016 08:27:18 GMT',
  connection: 'close' });
 return result; }]];