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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '832',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4997',
  'x-ms-request-id': '42344c5a-ca62-4be7-b65b-38a4431ef7ce',
  'x-ms-correlation-request-id': '42344c5a-ca62-4be7-b65b-38a4431ef7ce',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090622Z:42344c5a-ca62-4be7-b65b-38a4431ef7ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:06:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '59748916-d88a-4dcf-83c5-1f9ad83f9b1f',
  'x-ms-correlation-request-id': '59748916-d88a-4dcf-83c5-1f9ad83f9b1f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090653Z:59748916-d88a-4dcf-83c5-1f9ad83f9b1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:06:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14876',
  'x-ms-request-id': 'bf3b40b0-68c6-483a-b854-5bf6b60781f1',
  'x-ms-correlation-request-id': 'bf3b40b0-68c6-483a-b854-5bf6b60781f1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090724Z:bf3b40b0-68c6-483a-b854-5bf6b60781f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:07:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'c6d11093-5288-4824-899a-9fa302a25a82',
  'x-ms-correlation-request-id': 'c6d11093-5288-4824-899a-9fa302a25a82',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090755Z:c6d11093-5288-4824-899a-9fa302a25a82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:07:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': '7c6d3cc1-a3f5-400c-b67e-5fb7e2a318ad',
  'x-ms-correlation-request-id': '7c6d3cc1-a3f5-400c-b67e-5fb7e2a318ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090826Z:7c6d3cc1-a3f5-400c-b67e-5fb7e2a318ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:08:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '2ba7f614-e513-47fb-9838-a569f91699ab',
  'x-ms-correlation-request-id': '2ba7f614-e513-47fb-9838-a569f91699ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090857Z:2ba7f614-e513-47fb-9838-a569f91699ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:08:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '5baf84db-cf96-42c1-a2dd-2bf104eefe91',
  'x-ms-correlation-request-id': '5baf84db-cf96-42c1-a2dd-2bf104eefe91',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090928Z:5baf84db-cf96-42c1-a2dd-2bf104eefe91',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:09:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': 'db3b0dba-e030-4a11-a9aa-16b63a009475',
  'x-ms-correlation-request-id': 'db3b0dba-e030-4a11-a9aa-16b63a009475',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T090959Z:db3b0dba-e030-4a11-a9aa-16b63a009475',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:09:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14880',
  'x-ms-request-id': '8ceb27a3-9c8a-4894-a083-6ccd8277b7bd',
  'x-ms-correlation-request-id': '8ceb27a3-9c8a-4894-a083-6ccd8277b7bd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091030Z:8ceb27a3-9c8a-4894-a083-6ccd8277b7bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:10:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/NGYyM2U5YzAtODlhNC00ZjY2LWE1MDAtMDZmY2UwZWNlYjU0?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14927',
  'x-ms-request-id': 'e45e0357-c780-42e9-b4e9-aa71885a761e',
  'x-ms-correlation-request-id': 'e45e0357-c780-42e9-b4e9-aa71885a761e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091100Z:e45e0357-c780-42e9-b4e9-aa71885a761e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:11:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGZI=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '4615b85d-e422-4402-9890-2dc476cfb834',
  'x-ms-correlation-request-id': '4615b85d-e422-4402-9890-2dc476cfb834',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091101Z:4615b85d-e422-4402-9890-2dc476cfb834',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:11:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGZI=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '1a874014-7711-4e43-aa21-60485508fb03',
  'x-ms-correlation-request-id': '1a874014-7711-4e43-aa21-60485508fb03',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091103Z:1a874014-7711-4e43-aa21-60485508fb03',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:11:02 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplattestiothub74'];};