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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f42ef7b5-0001-0042-0caa-3fbd13000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-id': 'f101d63b-0d3b-4575-957f-9132383ecf6b',
  date: 'Wed, 16 Nov 2016 01:40:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f42ef7b5-0001-0042-0caa-3fbd13000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-id': 'f101d63b-0d3b-4575-957f-9132383ecf6b',
  date: 'Wed, 16 Nov 2016 01:40:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname9626285541571304')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC1973F8077"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dfbd45fd-0001-004b-7baa-3fa79d000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:41:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname9626285541571304')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC1973F8077"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dfbd45fd-0001-004b-7baa-3fa79d000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:41:00 GMT',
  connection: 'close' });
 return result; }]];