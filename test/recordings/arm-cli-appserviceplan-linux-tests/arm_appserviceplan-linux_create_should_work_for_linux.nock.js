// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/providers/Microsoft.Web/geoRegions?linuxWorkersEnabled=true&api-version=2015-08-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/providers/Microsoft.Web/geoRegions/West US\",\"name\":\"West US\",\"type\":\"Microsoft.Web/geoRegions\",\"location\":null,\"tags\":null,\"properties\":{\"name\":\"West US\",\"description\":null,\"sortOrder\":5,\"displayName\":\"West US\"}}],\"nextLink\":null,\"id\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '309',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '086b7f06-6ba7-4de0-ab5d-060c589a0293',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd7be7031-b9b7-46b6-97ff-bd0bffb3007f',
  'x-ms-routing-request-id': 'WESTUS2:20161005T224240Z:d7be7031-b9b7-46b6-97ff-bd0bffb3007f',
  date: 'Wed, 05 Oct 2016 22:42:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/providers/Microsoft.Web/geoRegions?linuxWorkersEnabled=true&api-version=2015-08-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/providers/Microsoft.Web/geoRegions/West US\",\"name\":\"West US\",\"type\":\"Microsoft.Web/geoRegions\",\"location\":null,\"tags\":null,\"properties\":{\"name\":\"West US\",\"description\":null,\"sortOrder\":5,\"displayName\":\"West US\"}}],\"nextLink\":null,\"id\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '309',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '086b7f06-6ba7-4de0-ab5d-060c589a0293',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd7be7031-b9b7-46b6-97ff-bd0bffb3007f',
  'x-ms-routing-request-id': 'WESTUS2:20161005T224240Z:d7be7031-b9b7-46b6-97ff-bd0bffb3007f',
  date: 'Wed, 05 Oct 2016 22:42:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg14049/providers/Microsoft.Web/serverfarms/armappserviceplanlinuxtests3884?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg14049/providers/Microsoft.Web/serverfarms/armappserviceplanlinuxtests3884\",\"name\":\"armappserviceplanlinuxtests3884\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplanlinuxtests3884\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg14049-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg14049\",\"reserved\":true,\"mdmId\":\"waws-prod-bay-063_248\"},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1056',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '884ec58c-2c75-49db-b83c-44cfee907d7c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '875e1f59-e950-4d23-bd6e-4896d6e8ec40',
  'x-ms-routing-request-id': 'WESTUS2:20161005T224247Z:875e1f59-e950-4d23-bd6e-4896d6e8ec40',
  date: 'Wed, 05 Oct 2016 22:42:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg14049/providers/Microsoft.Web/serverfarms/armappserviceplanlinuxtests3884?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg14049/providers/Microsoft.Web/serverfarms/armappserviceplanlinuxtests3884\",\"name\":\"armappserviceplanlinuxtests3884\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplanlinuxtests3884\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg14049-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg14049\",\"reserved\":true,\"mdmId\":\"waws-prod-bay-063_248\"},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1056',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '884ec58c-2c75-49db-b83c-44cfee907d7c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '875e1f59-e950-4d23-bd6e-4896d6e8ec40',
  'x-ms-routing-request-id': 'WESTUS2:20161005T224247Z:875e1f59-e950-4d23-bd6e-4896d6e8ec40',
  date: 'Wed, 05 Oct 2016 22:42:47 GMT',
  connection: 'close' });
 return result; }]];