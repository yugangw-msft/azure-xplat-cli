// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
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
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate3605/providers/Microsoft.ContainerService/containerServices/xplatContainer7099?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/f5fd181b-be1c-420d-810f-f053b3dc5977?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/f5fd181b-be1c-420d-810f-f053b3dc5977?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': 'f5fd181b-be1c-420d-810f-f053b3dc5977',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '487e0c05-4489-4c4c-b9fe-7549a14a1550',
  'x-ms-routing-request-id': 'WESTUS:20160503T063522Z:487e0c05-4489-4c4c-b9fe-7549a14a1550',
  date: 'Tue, 03 May 2016 06:35:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate3605/providers/Microsoft.ContainerService/containerServices/xplatContainer7099?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/f5fd181b-be1c-420d-810f-f053b3dc5977?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/f5fd181b-be1c-420d-810f-f053b3dc5977?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': 'f5fd181b-be1c-420d-810f-f053b3dc5977',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '487e0c05-4489-4c4c-b9fe-7549a14a1550',
  'x-ms-routing-request-id': 'WESTUS:20160503T063522Z:487e0c05-4489-4c4c-b9fe-7549a14a1550',
  date: 'Tue, 03 May 2016 06:35:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/f5fd181b-be1c-420d-810f-f053b3dc5977?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f5fd181b-be1c-420d-810f-f053b3dc5977\",\r\n  \"startTime\": \"2016-05-03T06:35:21.9040338+00:00\",\r\n  \"endTime\": \"2016-05-03T06:35:22.0446602+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': 'eaa8cb9e-465a-4243-b439-2edcfc3ef39e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': 'abfef227-8cd7-4f2e-8204-53a9d8d43ecb',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T063553Z:abfef227-8cd7-4f2e-8204-53a9d8d43ecb',
  date: 'Tue, 03 May 2016 06:35:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/f5fd181b-be1c-420d-810f-f053b3dc5977?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f5fd181b-be1c-420d-810f-f053b3dc5977\",\r\n  \"startTime\": \"2016-05-03T06:35:21.9040338+00:00\",\r\n  \"endTime\": \"2016-05-03T06:35:22.0446602+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': 'eaa8cb9e-465a-4243-b439-2edcfc3ef39e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': 'abfef227-8cd7-4f2e-8204-53a9d8d43ecb',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T063553Z:abfef227-8cd7-4f2e-8204-53a9d8d43ecb',
  date: 'Tue, 03 May 2016 06:35:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate3605/providers/Microsoft.ContainerService/containerServices/xplatContainer29379?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/8a0e48ae-09cd-4a5b-bf26-58a3d1509da3?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/8a0e48ae-09cd-4a5b-bf26-58a3d1509da3?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': '8a0e48ae-09cd-4a5b-bf26-58a3d1509da3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6f839bd1-994f-4762-beae-d70313604660',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T063556Z:6f839bd1-994f-4762-beae-d70313604660',
  date: 'Tue, 03 May 2016 06:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate3605/providers/Microsoft.ContainerService/containerServices/xplatContainer29379?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/8a0e48ae-09cd-4a5b-bf26-58a3d1509da3?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/8a0e48ae-09cd-4a5b-bf26-58a3d1509da3?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': '8a0e48ae-09cd-4a5b-bf26-58a3d1509da3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6f839bd1-994f-4762-beae-d70313604660',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T063556Z:6f839bd1-994f-4762-beae-d70313604660',
  date: 'Tue, 03 May 2016 06:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/8a0e48ae-09cd-4a5b-bf26-58a3d1509da3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"8a0e48ae-09cd-4a5b-bf26-58a3d1509da3\",\r\n  \"startTime\": \"2016-05-03T06:35:55.6541702+00:00\",\r\n  \"endTime\": \"2016-05-03T06:35:55.8104859+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': '796219e2-ba9e-476e-bdfe-b81127022251',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '261721a7-17a1-4233-80f1-5c1ae2facd12',
  'x-ms-routing-request-id': 'WESTUS:20160503T063627Z:261721a7-17a1-4233-80f1-5c1ae2facd12',
  date: 'Tue, 03 May 2016 06:36:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/8a0e48ae-09cd-4a5b-bf26-58a3d1509da3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"8a0e48ae-09cd-4a5b-bf26-58a3d1509da3\",\r\n  \"startTime\": \"2016-05-03T06:35:55.6541702+00:00\",\r\n  \"endTime\": \"2016-05-03T06:35:55.8104859+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9626245e-74e6-4408-af5c-6fa7269107e5_131024664747443021',
  'x-ms-request-id': '796219e2-ba9e-476e-bdfe-b81127022251',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '261721a7-17a1-4233-80f1-5c1ae2facd12',
  'x-ms-routing-request-id': 'WESTUS:20160503T063627Z:261721a7-17a1-4233-80f1-5c1ae2facd12',
  date: 'Tue, 03 May 2016 06:36:26 GMT',
  connection: 'close' });
 return result; }]];