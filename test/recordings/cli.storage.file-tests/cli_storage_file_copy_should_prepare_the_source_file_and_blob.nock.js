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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testfilecopysourceshare?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '30237934-001a-003e-708b-862026000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testfilecopysourceshare?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '30237934-001a-003e-708b-862026000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:54 GMT',
  etag: '"0x8D454A2308DDCD6"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0f326153-001a-0046-608b-864891000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:54 GMT',
  etag: '"0x8D454A2308DDCD6"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0f326153-001a-0046-608b-864891000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testfilecopydestshare?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2019db55-001a-003c-3b8b-8622dc000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testfilecopydestshare?restype=share')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2019db55-001a-003c-3b8b-8622dc000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopydestshare?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:55 GMT',
  etag: '"0x8D454A2312F0CAE"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2e671cc1-001a-0030-668b-86cc2d000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopydestshare?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:55 GMT',
  etag: '"0x8D454A2312F0CAE"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2e671cc1-001a-0030-668b-86cc2d000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testfilecopysourceshare/testfilecopysourcedir?restype=directory')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'abed1d4d-001a-0011-708b-86a11c000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testfilecopysourceshare/testfilecopysourcedir?restype=directory')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'abed1d4d-001a-0011-708b-86a11c000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare/testfilecopysourcedir?restype=directory')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:55 GMT',
  etag: '"0x8D454A2318764E3"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f833e9d3-001a-002e-568b-8616c0000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare/testfilecopysourcedir?restype=directory')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:55 GMT',
  etag: '"0x8D454A2318764E3"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f833e9d3-001a-002e-568b-8616c0000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .head('/testfilecopydestshare/testfilecopydestdir?restype=directory')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '65486694-001a-0037-118b-863aa8000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .head('/testfilecopydestshare/testfilecopydestdir?restype=directory')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '65486694-001a-0037-118b-863aa8000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopydestshare/testfilecopydestdir?restype=directory')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:56 GMT',
  etag: '"0x8D454A2320E22D5"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '567becb0-001a-0040-7f8b-86bfe9000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopydestshare/testfilecopydestdir?restype=directory')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:56 GMT',
  etag: '"0x8D454A2320E22D5"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '567becb0-001a-0040-7f8b-86bfe9000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare/testfilecopysourcedir/toCopy')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:57 GMT',
  etag: '"0x8D454A23252F505"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a5523756-001a-0016-1a8b-865799000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare/testfilecopysourcedir/toCopy')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:57 GMT',
  etag: '"0x8D454A23252F505"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a5523756-001a-0016-1a8b-865799000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testfilecopysourceshare/testfilecopysourcedir/toCopy?comp=range', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:24:57 GMT',
  etag: '"0x8D454A2329BBEB7"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fb4800d7-001a-0028-368b-86e1b8000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testfilecopysourceshare/testfilecopysourcedir/toCopy?comp=range', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:24:57 GMT',
  etag: '"0x8D454A2329BBEB7"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fb4800d7-001a-0028-368b-86e1b8000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare/testfilecopysourcedir/toCopy?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:58 GMT',
  etag: '"0x8D454A232DFF48D"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '887300d9-001a-0012-198b-86a21b000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopysourceshare/testfilecopysourcedir/toCopy?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:58 GMT',
  etag: '"0x8D454A232DFF48D"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '887300d9-001a-0012-198b-86a21b000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/testfilecopysourcecontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bb3af057-0001-001b-208b-86b895000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/testfilecopysourcecontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bb3af057-0001-001b-208b-86b895000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testfilecopysourcecontainer?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:59 GMT',
  etag: '"0x8D454A23375E3DB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c7cc1da0-0001-004c-5b8b-865118000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testfilecopysourcecontainer?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:24:59 GMT',
  etag: '"0x8D454A23375E3DB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c7cc1da0-0001-004c-5b8b-865118000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:24:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testfilecopysourcecontainer/testfilecopysourceblob', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:24:59 GMT',
  etag: '"0x8D454A233E0FE08"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd555482f-0001-002d-248b-8615c7000000',
  'x-ms-version': '2016-05-31',
  'x-ms-request-server-encrypted': 'false',
  date: 'Tue, 14 Feb 2017 06:24:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testfilecopysourcecontainer/testfilecopysourceblob', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:24:59 GMT',
  etag: '"0x8D454A233E0FE08"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd555482f-0001-002d-248b-8615c7000000',
  'x-ms-version': '2016-05-31',
  'x-ms-request-server-encrypted': 'false',
  date: 'Tue, 14 Feb 2017 06:24:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testfilecopysourcecontainer/testfilecopydestdir/testfilecopysourceblob', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:25:00 GMT',
  etag: '"0x8D454A234266EC7"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0373aeb9-0001-0036-598b-863b55000000',
  'x-ms-version': '2016-05-31',
  'x-ms-request-server-encrypted': 'false',
  date: 'Tue, 14 Feb 2017 06:24:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/testfilecopysourcecontainer/testfilecopydestdir/testfilecopysourceblob', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Tue, 14 Feb 2017 06:25:00 GMT',
  etag: '"0x8D454A234266EC7"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0373aeb9-0001-0036-598b-863b55000000',
  'x-ms-version': '2016-05-31',
  'x-ms-request-server-encrypted': 'false',
  date: 'Tue, 14 Feb 2017 06:24:59 GMT',
  connection: 'close' });
 return result; }]];