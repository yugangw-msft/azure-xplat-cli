// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
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
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /><DefaultServiceVersion>2015-04-05</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd4c8f27f-0001-0026-0bd2-bf0db3000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /><DefaultServiceVersion>2015-04-05</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd4c8f27f-0001-0026-0bd2-bf0db3000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:37 GMT',
  connection: 'close' });
 return result; }]];