// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_LOCATION'] = 'East US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceTag6634?api-version=2016-02-01')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceTag6634\",\"tagName\":\"xplatResourceTag6634\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'aced9624-b150-4853-baa0-78503baafa10',
  'x-ms-correlation-request-id': 'aced9624-b150-4853-baa0-78503baafa10',
  'x-ms-routing-request-id': 'WESTUS:20160318T020714Z:aced9624-b150-4853-baa0-78503baafa10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:13 GMT',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames?api-version=2016-02-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/Name\",\"tagName\":\"Name\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/Name/tagValues/Test1\",\"tagValue\":\"Test1\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/blah\",\"tagName\":\"blah\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/blah/tagValues/sdfds\",\"tagValue\":\"sdfds\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/blah/tagValues/sdfdssda\",\"tagValue\":\"sdfdssda\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/dsfsdf\",\"tagName\":\"dsfsdf\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/dsfsdf/tagValues/sdaxfasd\",\"tagValue\":\"sdaxfasd\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceGroupTag2976\",\"tagName\":\"xplatResourceGroupTag2976\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceGroupTag2976/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceTag6005\",\"tagName\":\"xplatResourceTag6005\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceTag6005/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceGroupTag5214\",\"tagName\":\"xplatResourceGroupTag5214\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceTag4004\",\"tagName\":\"xplatResourceTag4004\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/tagNames/xplatResourceTag6634\",\"tagName\":\"xplatResourceTag6634\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '485d5b59-e3a8-4d06-9ee2-c6022ed37ab1',
  'x-ms-correlation-request-id': '485d5b59-e3a8-4d06-9ee2-c6022ed37ab1',
  'x-ms-routing-request-id': 'WESTUS:20160318T020714Z:485d5b59-e3a8-4d06-9ee2-c6022ed37ab1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:13 GMT',
  'content-length': '2235' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatResourceTagGrp9154' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-request-id': 'e8a5c735-32ec-4b9e-b5a5-527b3bfa93ae',
  'x-ms-correlation-request-id': 'e8a5c735-32ec-4b9e-b5a5-527b3bfa93ae',
  'x-ms-routing-request-id': 'WESTUS:20160318T020715Z:e8a5c735-32ec-4b9e-b5a5-527b3bfa93ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:14 GMT',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154\",\"name\":\"xplatResourceTagGrp9154\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '209',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'b192a8e1-96f4-4bbe-90f6-1341d6fa3aad',
  'x-ms-correlation-request-id': 'b192a8e1-96f4-4bbe-90f6-1341d6fa3aad',
  'x-ms-routing-request-id': 'WESTUS:20160318T020716Z:b192a8e1-96f4-4bbe-90f6-1341d6fa3aad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xplatResourceTagRes973' under resource group 'xplatResourceTagGrp9154' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5b478d39-52b7-4f0d-8f1a-ae2cf560ce5c',
  'x-ms-correlation-request-id': '5b478d39-52b7-4f0d-8f1a-ae2cf560ce5c',
  'x-ms-routing-request-id': 'WESTUS:20160318T020716Z:5b478d39-52b7-4f0d-8f1a-ae2cf560ce5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:15 GMT',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973\",\"name\":\"xplatResourceTagRes973\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes973\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres973.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp9154-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-041.api.azurewebsites.windows.net:454/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/webspaces/xplatResourceTagGrp9154-EastUSwebspace/sites/xplatResourceTagRes973\",\"repositorySiteName\":\"xplatResourceTagRes973\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres973.azurewebsites.net\",\"xplatresourcetagres973.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres973.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres973.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-03-18T02:07:24.24\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes973\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.76.215.220,40.76.210.146,40.76.212.195,40.76.214.130\",\"containerSize\":null,\"maxNumberOfWorkers\":null,\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xplatResourceTagGrp9154\",\"defaultHostName\":\"xplatresourcetagres973.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2327',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5f09a834-836c-4913-9296-311163d22643',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a51e3383-08f1-42ab-9d81-e6462704932e',
  'x-ms-routing-request-id': 'WESTUS:20160318T020725Z:a51e3383-08f1-42ab-9d81-e6462704932e',
  date: 'Fri, 18 Mar 2016 02:07:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973\",\"name\":\"xplatResourceTagRes973\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes973\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres973.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp9154-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-041.api.azurewebsites.windows.net:454/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/webspaces/xplatResourceTagGrp9154-EastUSwebspace/sites/xplatResourceTagRes973\",\"repositorySiteName\":\"xplatResourceTagRes973\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres973.azurewebsites.net\",\"xplatresourcetagres973.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres973.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres973.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-03-18T02:07:24.38\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes973\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.76.215.220,40.76.210.146,40.76.212.195,40.76.214.130\",\"containerSize\":null,\"maxNumberOfWorkers\":null,\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xplatResourceTagGrp9154\",\"defaultHostName\":\"xplatresourcetagres973.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2327',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D180BAE9B6D1C0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bb4fab4d-eb43-4897-a84d-d8d56f377665',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'dfdf4de5-1f13-4544-ba03-5d938cd932bd',
  'x-ms-routing-request-id': 'WESTUS:20160318T020726Z:dfdf4de5-1f13-4544-ba03-5d938cd932bd',
  date: 'Fri, 18 Mar 2016 02:07:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973\",\"name\":\"xplatResourceTagRes973\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{\"xplatResourceTag6634\":\"\"},\"properties\":{\"name\":\"xplatResourceTagRes973\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres973.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp9154-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-041.api.azurewebsites.windows.net:454/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/webspaces/xplatResourceTagGrp9154-EastUSwebspace/sites/xplatResourceTagRes973\",\"repositorySiteName\":\"xplatResourceTagRes973\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres973.azurewebsites.net\",\"xplatresourcetagres973.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres973.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres973.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-03-18T02:07:28.477\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes973\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.76.215.220,40.76.210.146,40.76.212.195,40.76.214.130\",\"containerSize\":null,\"maxNumberOfWorkers\":null,\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{\"xplatResourceTag6634\":\"\"},\"resourceGroup\":\"xplatResourceTagGrp9154\",\"defaultHostName\":\"xplatresourcetagres973.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2378',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D180BAEC27F8D0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '72bc75ce-b3a6-4636-9658-57e1180050b3',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e98b28e9-41cc-41e9-b3d2-423f40842444',
  'x-ms-routing-request-id': 'WESTUS:20160318T020728Z:e98b28e9-41cc-41e9-b3d2-423f40842444',
  date: 'Fri, 18 Mar 2016 02:07:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/resources?$filter=tagname%20eq%20%27xplatResourceTag6634%27&api-version=2016-02-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973\",\"name\":\"xplatResourceTagRes973\",\"type\":\"Microsoft.Web/sites\",\"location\":\"eastus\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '19815368-bb9e-4a56-b46e-61e7722751de',
  'x-ms-correlation-request-id': '19815368-bb9e-4a56-b46e-61e7722751de',
  'x-ms-routing-request-id': 'WESTUS:20160318T020729Z:19815368-bb9e-4a56-b46e-61e7722751de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:29 GMT',
  'content-length': '245' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973\",\"name\":\"xplatResourceTagRes973\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{\"xplatResourceTag6634\":\"\"},\"properties\":{\"name\":\"xplatResourceTagRes973\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres973.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp9154-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-041.api.azurewebsites.windows.net:454/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/webspaces/xplatResourceTagGrp9154-EastUSwebspace/sites/xplatResourceTagRes973\",\"repositorySiteName\":\"xplatResourceTagRes973\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres973.azurewebsites.net\",\"xplatresourcetagres973.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres973.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres973.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-03-18T02:07:28.477\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes973\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.76.215.220,40.76.210.146,40.76.212.195,40.76.214.130\",\"containerSize\":null,\"maxNumberOfWorkers\":null,\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{\"xplatResourceTag6634\":\"\"},\"resourceGroup\":\"xplatResourceTagGrp9154\",\"defaultHostName\":\"xplatresourcetagres973.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2378',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D180BAEC27F8D0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'eeeb0dfb-3c04-4a07-92db-f0fb69f48255',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a8c175f0-6322-4dd4-8822-e5d0a00522ea',
  'x-ms-routing-request-id': 'WESTUS:20160318T020731Z:a8c175f0-6322-4dd4-8822-e5d0a00522ea',
  date: 'Fri, 18 Mar 2016 02:07:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/providers/Microsoft.Web/sites/xplatResourceTagRes973\",\"name\":\"xplatResourceTagRes973\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes973\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres973.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp9154-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-041.api.azurewebsites.windows.net:454/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/webspaces/xplatResourceTagGrp9154-EastUSwebspace/sites/xplatResourceTagRes973\",\"repositorySiteName\":\"xplatResourceTagRes973\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres973.azurewebsites.net\",\"xplatresourcetagres973.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres973.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres973.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-03-18T02:07:33.61\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes973\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.76.215.220,40.76.210.146,40.76.212.195,40.76.214.130\",\"containerSize\":null,\"maxNumberOfWorkers\":null,\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xplatResourceTagGrp9154\",\"defaultHostName\":\"xplatresourcetagres973.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2327',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D180BAEF3734A0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1551ab3b-1d6e-47ea-853c-dafd981dec52',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '70f272b5-a23f-44a2-8a8f-557bee3d0500',
  'x-ms-routing-request-id': 'WESTUS:20160318T020734Z:70f272b5-a23f-44a2-8a8f-557bee3d0500',
  date: 'Fri, 18 Mar 2016 02:07:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatResourceTagGrp9154/resources?$filter=tagname%20eq%20%27xplatResourceTag6634%27&api-version=2016-02-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '1785b585-f898-4655-81cd-632d21d47cbf',
  'x-ms-correlation-request-id': '1785b585-f898-4655-81cd-632d21d47cbf',
  'x-ms-routing-request-id': 'WESTUS:20160318T020735Z:1785b585-f898-4655-81cd-632d21d47cbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:34 GMT',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatResourceTagGrp9154?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQOTE1NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3a4a8ea4-c159-4b3e-9163-fd7cd745fcb5',
  'x-ms-correlation-request-id': '3a4a8ea4-c159-4b3e-9163-fd7cd745fcb5',
  'x-ms-routing-request-id': 'WESTUS:20160318T020735Z:3a4a8ea4-c159-4b3e-9163-fd7cd745fcb5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:07:35 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQOTE1NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQOTE1NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'ddae4ac6-6c4e-40a3-8a23-acfaedb08cad',
  'x-ms-correlation-request-id': 'ddae4ac6-6c4e-40a3-8a23-acfaedb08cad',
  'x-ms-routing-request-id': 'WESTUS:20160318T020805Z:ddae4ac6-6c4e-40a3-8a23-acfaedb08cad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:08:04 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQOTE1NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQOTE1NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '3417b334-c2e0-40d9-a75c-41a6f357045f',
  'x-ms-correlation-request-id': '3417b334-c2e0-40d9-a75c-41a6f357045f',
  'x-ms-routing-request-id': 'WESTUS:20160318T020836Z:3417b334-c2e0-40d9-a75c-41a6f357045f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:08:35 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQOTE1NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '2c212c8d-0503-41a3-84b9-730127e42ac6',
  'x-ms-correlation-request-id': '2c212c8d-0503-41a3-84b9-730127e42ac6',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160318T020906Z:2c212c8d-0503-41a3-84b9-730127e42ac6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 02:09:06 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatResourceTagGrp9154','xplatResourceTagRes973','xplatResourceTag6634'];};