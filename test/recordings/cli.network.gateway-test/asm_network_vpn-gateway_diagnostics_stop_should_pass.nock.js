// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/CliGtTestVnet3384/gateway/publicdiagnostics', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>00000000-0000-0000-0000-000000000000</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2eda47f717789f60b34cff7e060e5bad',
  date: 'Fri, 22 Apr 2016 10:28:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/CliGtTestVnet3384/gateway/publicdiagnostics', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>00000000-0000-0000-0000-000000000000</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2eda47f717789f60b34cff7e060e5bad',
  date: 'Fri, 22 Apr 2016 10:28:49 GMT',
  connection: 'close' });
 return result; }]];