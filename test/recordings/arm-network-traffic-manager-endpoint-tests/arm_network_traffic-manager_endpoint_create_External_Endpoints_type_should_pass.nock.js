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
    registeredProviders: [],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGTMPEndpt?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '76c98c2d-2376-4db7-b2ad-1ba6fdc49f53',
  'x-ms-correlation-request-id': '76c98c2d-2376-4db7-b2ad-1ba6fdc49f53',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121738Z:76c98c2d-2376-4db7-b2ad-1ba6fdc49f53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:38 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGTMPEndpt?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '76c98c2d-2376-4db7-b2ad-1ba6fdc49f53',
  'x-ms-correlation-request-id': '76c98c2d-2376-4db7-b2ad-1ba6fdc49f53',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121738Z:76c98c2d-2376-4db7-b2ad-1ba6fdc49f53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:38 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGTMPEndpt?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8521a04a-fcd8-4078-a906-f0f394d00c1b',
  'x-ms-correlation-request-id': '8521a04a-fcd8-4078-a906-f0f394d00c1b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121740Z:8521a04a-fcd8-4078-a906-f0f394d00c1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGTMPEndpt?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8521a04a-fcd8-4078-a906-f0f394d00c1b',
  'x-ms-correlation-request-id': '8521a04a-fcd8-4078-a906-f0f394d00c1b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121740Z:8521a04a-fcd8-4078-a906-f0f394d00c1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE' under resource group 'xplatTestGTMPEndpt' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b3f0237d-7737-4b24-aecc-95049deddca0',
  'x-ms-correlation-request-id': 'b3f0237d-7737-4b24-aecc-95049deddca0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121740Z:b3f0237d-7737-4b24-aecc-95049deddca0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:40 GMT',
  connection: 'close',
  'content-length': '176' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE' under resource group 'xplatTestGTMPEndpt' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b3f0237d-7737-4b24-aecc-95049deddca0',
  'x-ms-correlation-request-id': 'b3f0237d-7737-4b24-aecc-95049deddca0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121740Z:b3f0237d-7737-4b24-aecc-95049deddca0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:40 GMT',
  connection: 'close',
  'content-length': '176' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns2078\",\"fqdn\":\"xplattmpendptdns2078.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '564',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '970c7ce7-3c20-47ee-98fb-0781f02b40ed',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': 'd7ec6182-7221-4b68-8ad5-a5a15b42e369',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121744Z:d7ec6182-7221-4b68-8ad5-a5a15b42e369',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns2078\",\"fqdn\":\"xplattmpendptdns2078.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '564',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '970c7ce7-3c20-47ee-98fb-0781f02b40ed',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': 'd7ec6182-7221-4b68-8ad5-a5a15b42e369',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121744Z:d7ec6182-7221-4b68-8ad5-a5a15b42e369',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-11-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'xplattesttmpendpoint' of type 'externalendpoints' does not exist in the profile 'xplatTestTMPE'.\"}", { 'cache-control': 'private',
  'content-length': '142',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0f93678b-960c-4526-97b8-39019b5185c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b3507bb4-9cbc-490f-a07e-9da26acaa7e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121745Z:b3507bb4-9cbc-490f-a07e-9da26acaa7e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-11-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'xplattesttmpendpoint' of type 'externalendpoints' does not exist in the profile 'xplatTestTMPE'.\"}", { 'cache-control': 'private',
  'content-length': '142',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0f93678b-960c-4526-97b8-39019b5185c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b3507bb4-9cbc-490f-a07e-9da26acaa7e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121745Z:b3507bb4-9cbc-490f-a07e-9da26acaa7e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"xplattmpendptdns2078.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f2d29535-8fda-48ac-97e5-11ceece8da07',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '7bfde309-3022-45a0-9645-db73bdea2f74',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121748Z:7bfde309-3022-45a0-9645-db73bdea2f74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"xplattmpendptdns2078.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f2d29535-8fda-48ac-97e5-11ceece8da07',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '7bfde309-3022-45a0-9645-db73bdea2f74',
  'x-ms-routing-request-id': 'WESTEUROPE:20160113T121748Z:7bfde309-3022-45a0-9645-db73bdea2f74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Jan 2016 12:17:47 GMT',
  connection: 'close' });
 return result; }]];