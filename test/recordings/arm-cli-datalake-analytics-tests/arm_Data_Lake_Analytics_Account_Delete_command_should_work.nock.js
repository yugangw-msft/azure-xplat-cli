// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4886.azuredatalakeanalytics.net\",\"accountId\":\"8aec72ab-f560-4c15-8f17-a6d5e39b992e\",\"creationTime\":\"2017-02-17T07:49:22.8360369Z\",\"lastModifiedTime\":\"2017-02-17T07:49:22.8360369Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4886\",\"name\":\"xplattestadla4886\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8566.azuredatalakeanalytics.net\",\"accountId\":\"8f34d147-5bbc-438f-9a51-3a5d2139058e\",\"creationTime\":\"2017-02-17T07:50:01.5405237Z\",\"lastModifiedTime\":\"2017-02-17T07:50:54.7416141Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566\",\"name\":\"xplattestadla8566\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9baa63c1-a5ec-4859-9f67-6656d8a961b7',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '25526712-4210-4556-ad22-dc3966af8dcb',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075127Z:25526712-4210-4556-ad22-dc3966af8dcb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:51:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4886.azuredatalakeanalytics.net\",\"accountId\":\"8aec72ab-f560-4c15-8f17-a6d5e39b992e\",\"creationTime\":\"2017-02-17T07:49:22.8360369Z\",\"lastModifiedTime\":\"2017-02-17T07:49:22.8360369Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4886\",\"name\":\"xplattestadla4886\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8566.azuredatalakeanalytics.net\",\"accountId\":\"8f34d147-5bbc-438f-9a51-3a5d2139058e\",\"creationTime\":\"2017-02-17T07:50:01.5405237Z\",\"lastModifiedTime\":\"2017-02-17T07:50:54.7416141Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566\",\"name\":\"xplattestadla8566\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9baa63c1-a5ec-4859-9f67-6656d8a961b7',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '25526712-4210-4556-ad22-dc3966af8dcb',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075127Z:25526712-4210-4556-ad22-dc3966af8dcb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:51:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'dd4b012a-687e-4b98-8962-c7497de9743c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'ebdbc7bb-364a-4c8f-b84f-da500d24f12a',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075133Z:ebdbc7bb-364a-4c8f-b84f-da500d24f12a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:51:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'dd4b012a-687e-4b98-8962-c7497de9743c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'ebdbc7bb-364a-4c8f-b84f-da500d24f12a',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075133Z:ebdbc7bb-364a-4c8f-b84f-da500d24f12a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:51:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4886.azuredatalakeanalytics.net\",\"accountId\":\"8aec72ab-f560-4c15-8f17-a6d5e39b992e\",\"creationTime\":\"2017-02-17T07:49:22.8360369Z\",\"lastModifiedTime\":\"2017-02-17T07:49:22.8360369Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4886\",\"name\":\"xplattestadla4886\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '543',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2a8c5699-af55-44e1-86a8-71e1f5c21b6a',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '5b35e094-86f4-4009-ac27-0ab440f97310',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075135Z:5b35e094-86f4-4009-ac27-0ab440f97310',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:51:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4886.azuredatalakeanalytics.net\",\"accountId\":\"8aec72ab-f560-4c15-8f17-a6d5e39b992e\",\"creationTime\":\"2017-02-17T07:49:22.8360369Z\",\"lastModifiedTime\":\"2017-02-17T07:49:22.8360369Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4886\",\"name\":\"xplattestadla4886\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '543',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2a8c5699-af55-44e1-86a8-71e1f5c21b6a',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '5b35e094-86f4-4009-ac27-0ab440f97310',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075135Z:5b35e094-86f4-4009-ac27-0ab440f97310',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:51:34 GMT',
  connection: 'close' });
 return result; }]];