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
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '638',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '93930321-13aa-4968-8740-7540c5c4ff5e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '6568f707-1be7-41f5-b752-59dd7e3749ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133735Z:6568f707-1be7-41f5-b752-59dd7e3749ab',
  date: 'Mon, 17 Jul 2017 13:37:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '638',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '93930321-13aa-4968-8740-7540c5c4ff5e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '6568f707-1be7-41f5-b752-59dd7e3749ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133735Z:6568f707-1be7-41f5-b752-59dd7e3749ab',
  date: 'Mon, 17 Jul 2017 13:37:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dc4e02a2-3287-492b-910f-8756db892639',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '10c21028-9770-41c4-a70b-7bc0d0226393',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133739Z:10c21028-9770-41c4-a70b-7bc0d0226393',
  date: 'Mon, 17 Jul 2017 13:37:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dc4e02a2-3287-492b-910f-8756db892639',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '10c21028-9770-41c4-a70b-7bc0d0226393',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133739Z:10c21028-9770-41c4-a70b-7bc0d0226393',
  date: 'Mon, 17 Jul 2017 13:37:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/profileName' under resource group 'xplat-test-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e2372653-1406-4328-b099-45b7858fd4a8',
  'x-ms-correlation-request-id': 'e2372653-1406-4328-b099-45b7858fd4a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133740Z:e2372653-1406-4328-b099-45b7858fd4a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 17 Jul 2017 13:37:40 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/profileName' under resource group 'xplat-test-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e2372653-1406-4328-b099-45b7858fd4a8',
  'x-ms-correlation-request-id': 'e2372653-1406-4328-b099-45b7858fd4a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133740Z:e2372653-1406-4328-b099-45b7858fd4a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 17 Jul 2017 13:37:40 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; }]];