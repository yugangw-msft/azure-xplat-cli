// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
    username: 'user@domain.example',
    registeredProviders: ['sqlserver', 'visualstudio.account', 'website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_LOCATION'] = 'East US';
}

exports.scopes = [[function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames?api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag/\",\"tagName\":\"ygtag\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag/tagValues/ygtagValue\",\"tagValue\":\"ygtagValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag2/\",\"tagName\":\"ygtag2\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag2/tagValues/ygtag2Value\",\"tagValue\":\"ygtag2Value\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31997',
      'x-ms-request-id': 'a4701682-1132-4729-b053-1402015c7b69',
      'x-ms-correlation-request-id': 'a4701682-1132-4729-b053-1402015c7b69',
      'x-ms-routing-request-id': 'WESTUS:20140626T221554Z:a4701682-1132-4729-b053-1402015c7b69',
      date: 'Thu, 26 Jun 2014 22:15:54 GMT',
      'content-length': '610'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag1?api-version=2014-04-01-preview')
    .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-writes': '1198',
      'x-ms-request-id': 'd9d5482e-e31a-4eea-9540-0f81148b44f2',
      'x-ms-correlation-request-id': 'd9d5482e-e31a-4eea-9540-0f81148b44f2',
      'x-ms-routing-request-id': 'WESTUS:20140626T221555Z:d9d5482e-e31a-4eea-9540-0f81148b44f2',
      date: 'Thu, 26 Jun 2014 22:15:55 GMT',
      'content-length': '165'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag1/tagValues/fooValue?api-version=2014-04-01-preview')
    .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-writes': '1198',
      'x-ms-request-id': 'b3ced826-284a-4f4a-8c52-293e3e22321e',
      'x-ms-correlation-request-id': 'b3ced826-284a-4f4a-8c52-293e3e22321e',
      'x-ms-routing-request-id': 'WESTUS:20140626T221556Z:b3ced826-284a-4f4a-8c52-293e3e22321e',
      date: 'Thu, 26 Jun 2014 22:15:56 GMT',
      'content-length': '163'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp1?api-version=2014-04-01-preview')
    .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatResourceTagGrp1' could not be found.\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31996',
      'x-ms-request-id': '05553ca5-a929-4692-a58c-ff789e7878c4',
      'x-ms-correlation-request-id': '05553ca5-a929-4692-a58c-ff789e7878c4',
      'x-ms-routing-request-id': 'WESTUS:20140626T221556Z:05553ca5-a929-4692-a58c-ff789e7878c4',
      date: 'Thu, 26 Jun 2014 22:15:56 GMT',
      'content-length': '112'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .filteringRequestBody(function (path) { return '*'; })
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp1?api-version=2014-04-01-preview', '*')
    .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1\",\"name\":\"xplatResourceTagGrp1\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-writes': '1197',
      'x-ms-request-id': '37c22840-b77f-4792-b6fe-089e49c5c11d',
      'x-ms-correlation-request-id': '37c22840-b77f-4792-b6fe-089e49c5c11d',
      'x-ms-routing-request-id': 'WESTUS:20140626T221556Z:37c22840-b77f-4792-b6fe-089e49c5c11d',
      date: 'Thu, 26 Jun 2014 22:15:56 GMT',
      'content-length': '203'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp1?api-version=2014-04-01-preview')
    .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1\",\"name\":\"xplatResourceTagGrp1\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31991',
      'x-ms-request-id': 'ce3eb815-6ed7-4323-94cf-187ec6f05368',
      'x-ms-correlation-request-id': 'ce3eb815-6ed7-4323-94cf-187ec6f05368',
      'x-ms-routing-request-id': 'WESTUS:20140626T221557Z:ce3eb815-6ed7-4323-94cf-187ec6f05368',
      date: 'Thu, 26 Jun 2014 22:15:56 GMT',
      'content-length': '203'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp1/providers/Microsoft.Web//sites/xplatResourceTagRes1?api-version=2014-04-01')
    .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-request-id': '69efd0bf-f274-4275-94e1-1ce13e23c5fb',
      'x-ms-correlation-request-id': '69efd0bf-f274-4275-94e1-1ce13e23c5fb',
      'x-ms-routing-request-id': 'WESTUS:20140626T221557Z:69efd0bf-f274-4275-94e1-1ce13e23c5fb',
      date: 'Thu, 26 Jun 2014 22:15:57 GMT',
      'content-length': '69'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .filteringRequestBody(function (path) { return '*'; })
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp1/providers/Microsoft.Web//sites/xplatResourceTagRes1?api-version=2014-04-01', '*')
    .reply(200, "{\"id\":null,\"name\":\"xplatResourceTagRes1\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{\"xplatResourceTag1\":\"fooValue\"},\"properties\":{\"name\":\"xplatResourceTagRes1\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres1.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp1-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-009.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xplatResourceTagGrp1-EastUSwebspace/sites/xplatResourceTagRes1\",\"repositorySiteName\":\"xplatResourceTagRes1\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres1.azurewebsites.net\",\"xplatresourcetagres1.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres1.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0},{\"name\":\"xplatresourcetagres1.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2014-06-26T22:15:59.247\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes1\",\"trafficManagerHostNames\":null,\"sku\":\"Free\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-length': '1573',
      'content-type': 'application/json',
      expires: '-1',
      'x-ms-request-id': 'ba1e5749-706f-42a2-9b3f-9d25f3354720',
      server: 'Microsoft-IIS/8.0',
      'x-aspnet-version': '4.0.30319',
      'x-powered-by': 'ASP.NET',
      'x-ms-ratelimit-remaining-subscription-writes': '1197',
      'x-ms-correlation-request-id': 'b3890bb8-093b-4353-8009-d15e418a4779',
      'x-ms-routing-request-id': 'WESTUS:20140626T221601Z:b3890bb8-093b-4353-8009-d15e418a4779',
      date: 'Thu, 26 Jun 2014 22:16:01 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1/resources?$filter=tagname%20eq%20%27xplatResourceTag1%27&api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1/providers/Microsoft.Web/sites/xplatResourceTagRes1\",\"name\":\"xplatResourceTagRes1\",\"type\":\"Microsoft.Web/sites\",\"location\":\"eastus\"}]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31995',
      'x-ms-request-id': '861aa4b1-5739-46bc-a35c-971dbd19fd07',
      'x-ms-correlation-request-id': '861aa4b1-5739-46bc-a35c-971dbd19fd07',
      'x-ms-routing-request-id': 'WESTUS:20140626T221602Z:861aa4b1-5739-46bc-a35c-971dbd19fd07',
      date: 'Thu, 26 Jun 2014 22:16:01 GMT',
      'content-length': '238'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1/resources?$filter=tagname%20eq%20%27xplatResourceTag1%27%20and%20tagvalue%20eq%20%27fooValue%27&api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1/providers/Microsoft.Web/sites/xplatResourceTagRes1\",\"name\":\"xplatResourceTagRes1\",\"type\":\"Microsoft.Web/sites\",\"location\":\"eastus\"}]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31996',
      'x-ms-request-id': '6b531b30-0b4b-4fad-93cc-81106a3a318a',
      'x-ms-correlation-request-id': '6b531b30-0b4b-4fad-93cc-81106a3a318a',
      'x-ms-routing-request-id': 'WESTUS:20140626T221602Z:6b531b30-0b4b-4fad-93cc-81106a3a318a',
      date: 'Thu, 26 Jun 2014 22:16:02 GMT',
      'content-length': '238'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp1/resources?$filter=tagname%20eq%20%27xplatResourceTag1%27%20and%20tagvalue%20eq%20%27foo2%27&api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31990',
      'x-ms-request-id': '685b49e0-ff3f-4b40-b422-fd43d0baaed0',
      'x-ms-correlation-request-id': '685b49e0-ff3f-4b40-b422-fd43d0baaed0',
      'x-ms-routing-request-id': 'WESTUS:20140626T221602Z:685b49e0-ff3f-4b40-b422-fd43d0baaed0',
      date: 'Thu, 26 Jun 2014 22:16:02 GMT',
      'content-length': '12'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp1?api-version=2014-04-01-preview')
    .reply(202, "", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      expires: '-1',
      location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQMS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
      'retry-after': '15',
      'x-ms-ratelimit-remaining-subscription-writes': '1195',
      'x-ms-request-id': 'ed8f9c4e-b838-42e1-ac78-674311b8d6ac',
      'x-ms-correlation-request-id': 'ed8f9c4e-b838-42e1-ac78-674311b8d6ac',
      'x-ms-routing-request-id': 'WESTUS:20140626T221602Z:ed8f9c4e-b838-42e1-ac78-674311b8d6ac',
      date: 'Thu, 26 Jun 2014 22:16:02 GMT',
      'content-length': '0'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQMS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
    .reply(202, "", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      expires: '-1',
      location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQMS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
      'retry-after': '15',
      'x-ms-ratelimit-remaining-subscription-reads': '31993',
      'x-ms-request-id': '3782a441-2420-46f3-8317-b3f548410ff1',
      'x-ms-correlation-request-id': '3782a441-2420-46f3-8317-b3f548410ff1',
      'x-ms-routing-request-id': 'WESTUS:20140626T221617Z:3782a441-2420-46f3-8317-b3f548410ff1',
      date: 'Thu, 26 Jun 2014 22:16:17 GMT',
      'content-length': '0'
    });
  return result;
}],
[function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames?api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag/\",\"tagName\":\"ygtag\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag/tagValues/ygtagValue\",\"tagValue\":\"ygtagValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag2/\",\"tagName\":\"ygtag2\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag2/tagValues/ygtag2Value\",\"tagValue\":\"ygtag2Value\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31994',
      'x-ms-request-id': 'bb64e72b-5680-4227-8746-60b38edc7910',
      'x-ms-correlation-request-id': 'bb64e72b-5680-4227-8746-60b38edc7910',
      'x-ms-routing-request-id': 'WESTUS:20140626T221617Z:bb64e72b-5680-4227-8746-60b38edc7910',
      date: 'Thu, 26 Jun 2014 22:16:17 GMT',
      'content-length': '939'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag2?api-version=2014-04-01-preview')
    .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatResourceTag2/\",\"tagName\":\"xplatResourceTag2\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-writes': '1196',
      'x-ms-request-id': '77b26033-ad5b-4313-84a0-021637b91c7b',
      'x-ms-correlation-request-id': '77b26033-ad5b-4313-84a0-021637b91c7b',
      'x-ms-routing-request-id': 'WESTUS:20140626T221618Z:77b26033-ad5b-4313-84a0-021637b91c7b',
      date: 'Thu, 26 Jun 2014 22:16:18 GMT',
      'content-length': '165'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2?api-version=2014-04-01-preview')
    .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatResourceTagGrp2' could not be found.\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31989',
      'x-ms-request-id': '0c2ddae9-5d26-4029-be30-8b5582637173',
      'x-ms-correlation-request-id': '0c2ddae9-5d26-4029-be30-8b5582637173',
      'x-ms-routing-request-id': 'WESTUS:20140626T221618Z:0c2ddae9-5d26-4029-be30-8b5582637173',
      date: 'Thu, 26 Jun 2014 22:16:18 GMT',
      'content-length': '112'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .filteringRequestBody(function (path) { return '*'; })
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2?api-version=2014-04-01-preview', '*')
    .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2\",\"name\":\"xplatResourceTagGrp2\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-writes': '1194',
      'x-ms-request-id': '524d5aeb-6b42-4655-bb18-b799c4826456',
      'x-ms-correlation-request-id': '524d5aeb-6b42-4655-bb18-b799c4826456',
      'x-ms-routing-request-id': 'WESTUS:20140626T221618Z:524d5aeb-6b42-4655-bb18-b799c4826456',
      date: 'Thu, 26 Jun 2014 22:16:18 GMT',
      'content-length': '203'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2?api-version=2014-04-01-preview')
    .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2\",\"name\":\"xplatResourceTagGrp2\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31993',
      'x-ms-request-id': '315d9506-3491-4bcb-83c9-aae8ed221c14',
      'x-ms-correlation-request-id': '315d9506-3491-4bcb-83c9-aae8ed221c14',
      'x-ms-routing-request-id': 'WESTUS:20140626T221619Z:315d9506-3491-4bcb-83c9-aae8ed221c14',
      date: 'Thu, 26 Jun 2014 22:16:18 GMT',
      'content-length': '203'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2/providers/Microsoft.Web//sites/xplatResourceTagRes2?api-version=2014-04-01')
    .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-request-id': 'e97150b5-5c85-49de-bf67-0ffb034195c7',
      'x-ms-correlation-request-id': 'e97150b5-5c85-49de-bf67-0ffb034195c7',
      'x-ms-routing-request-id': 'WESTUS:20140626T221619Z:e97150b5-5c85-49de-bf67-0ffb034195c7',
      date: 'Thu, 26 Jun 2014 22:16:18 GMT',
      'content-length': '69'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .filteringRequestBody(function (path) { return '*'; })
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2/providers/Microsoft.Web//sites/xplatResourceTagRes2?api-version=2014-04-01', '*')
    .reply(200, "{\"id\":null,\"name\":\"xplatResourceTagRes2\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes2\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres2.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp2-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-013.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xplatResourceTagGrp2-EastUSwebspace/sites/xplatResourceTagRes2\",\"repositorySiteName\":\"xplatResourceTagRes2\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres2.azurewebsites.net\",\"xplatresourcetagres2.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres2.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0},{\"name\":\"xplatresourcetagres2.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2014-06-26T22:16:22.503\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes2\",\"trafficManagerHostNames\":null,\"sku\":\"Free\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-length': '1543',
      'content-type': 'application/json',
      expires: '-1',
      'x-ms-request-id': '74450618-cd43-46db-a9c8-09da284358d9',
      server: 'Microsoft-IIS/8.0',
      'x-aspnet-version': '4.0.30319',
      'x-powered-by': 'ASP.NET',
      'x-ms-ratelimit-remaining-subscription-writes': '1197',
      'x-ms-correlation-request-id': 'b10851b5-111d-4cd6-a457-812b9fbd407d',
      'x-ms-routing-request-id': 'WESTUS:20140626T221624Z:b10851b5-111d-4cd6-a457-812b9fbd407d',
      date: 'Thu, 26 Jun 2014 22:16:24 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2/providers/Microsoft.Web//sites/xplatResourceTagRes2?api-version=2014-04-01')
    .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2/providers/Microsoft.Web/sites/xplatResourceTagRes2\",\"name\":\"xplatResourceTagRes2\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes2\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres2.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp2-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-013.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xplatResourceTagGrp2-EastUSwebspace/sites/xplatResourceTagRes2\",\"repositorySiteName\":\"xplatResourceTagRes2\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres2.azurewebsites.net\",\"xplatresourcetagres2.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres2.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0},{\"name\":\"xplatresourcetagres2.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2014-06-26T22:16:22.503\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes2\",\"trafficManagerHostNames\":null,\"sku\":\"Free\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-length': '1679',
      'content-type': 'application/json',
      expires: '-1',
      etag: '"1CF918C4325BF70"',
      'x-ms-request-id': '22f6d5b6-f49f-470f-a3cd-5e72afb49ed6',
      server: 'Microsoft-IIS/8.0',
      'x-aspnet-version': '4.0.30319',
      'x-powered-by': 'ASP.NET',
      'x-ms-ratelimit-remaining-subscription-reads': '31994',
      'x-ms-correlation-request-id': '666036f3-96b5-4bd6-b25c-637b3dc5e815',
      'x-ms-routing-request-id': 'WESTUS:20140626T221625Z:666036f3-96b5-4bd6-b25c-637b3dc5e815',
      date: 'Thu, 26 Jun 2014 22:16:25 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .filteringRequestBody(function (path) { return '*'; })
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2/providers/Microsoft.Web//sites/xplatResourceTagRes2?api-version=2014-04-01', '*')
    .reply(200, "{\"id\":null,\"name\":\"xplatResourceTagRes2\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{\"xplatResourceTag2\":\"\"},\"properties\":{\"name\":\"xplatResourceTagRes2\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres2.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp2-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-013.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xplatResourceTagGrp2-EastUSwebspace/sites/xplatResourceTagRes2\",\"repositorySiteName\":\"xplatResourceTagRes2\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres2.azurewebsites.net\",\"xplatresourcetagres2.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres2.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0},{\"name\":\"xplatresourcetagres2.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2014-06-26T22:16:22.503\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes2\",\"trafficManagerHostNames\":null,\"sku\":\"Free\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-length': '1565',
      'content-type': 'application/json',
      expires: '-1',
      etag: '"1CF918C4325BF70"',
      'x-ms-request-id': 'aa4f2eea-2ddc-483d-8725-49bb43debda0',
      server: 'Microsoft-IIS/8.0',
      'x-aspnet-version': '4.0.30319',
      'x-powered-by': 'ASP.NET',
      'x-ms-ratelimit-remaining-subscription-writes': '1196',
      'x-ms-correlation-request-id': '8fc52bfe-9d75-4440-ae1d-7a303793a239',
      'x-ms-routing-request-id': 'WESTUS:20140626T221626Z:8fc52bfe-9d75-4440-ae1d-7a303793a239',
      date: 'Thu, 26 Jun 2014 22:16:26 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2/resources?$filter=tagname%20eq%20%27xplatResourceTag2%27&api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2/providers/Microsoft.Web/sites/xplatResourceTagRes2\",\"name\":\"xplatResourceTagRes2\",\"type\":\"Microsoft.Web/sites\",\"location\":\"eastus\"}]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31992',
      'x-ms-request-id': '97a3ddf6-580c-464f-8878-1099f7cbe9c8',
      'x-ms-correlation-request-id': '97a3ddf6-580c-464f-8878-1099f7cbe9c8',
      'x-ms-routing-request-id': 'WESTUS:20140626T221626Z:97a3ddf6-580c-464f-8878-1099f7cbe9c8',
      date: 'Thu, 26 Jun 2014 22:16:26 GMT',
      'content-length': '238'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2/providers/Microsoft.Web//sites/xplatResourceTagRes2?api-version=2014-04-01')
    .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2/providers/Microsoft.Web/sites/xplatResourceTagRes2\",\"name\":\"xplatResourceTagRes2\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{\"xplatResourceTag2\":\"\"},\"properties\":{\"name\":\"xplatResourceTagRes2\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres2.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp2-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-013.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xplatResourceTagGrp2-EastUSwebspace/sites/xplatResourceTagRes2\",\"repositorySiteName\":\"xplatResourceTagRes2\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres2.azurewebsites.net\",\"xplatresourcetagres2.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres2.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0},{\"name\":\"xplatresourcetagres2.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2014-06-26T22:16:22.503\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes2\",\"trafficManagerHostNames\":null,\"sku\":\"Free\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-length': '1701',
      'content-type': 'application/json',
      expires: '-1',
      etag: '"1CF918C4325BF70"',
      'x-ms-request-id': '973ff652-ab35-4c74-a743-6d419f4dc546',
      server: 'Microsoft-IIS/8.0',
      'x-aspnet-version': '4.0.30319',
      'x-powered-by': 'ASP.NET',
      'x-ms-ratelimit-remaining-subscription-reads': '31992',
      'x-ms-correlation-request-id': '5a22d957-341a-42a8-8fcb-d8b804ba555a',
      'x-ms-routing-request-id': 'WESTUS:20140626T221627Z:5a22d957-341a-42a8-8fcb-d8b804ba555a',
      date: 'Thu, 26 Jun 2014 22:16:27 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .filteringRequestBody(function (path) { return '*'; })
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2/providers/Microsoft.Web//sites/xplatResourceTagRes2?api-version=2014-04-01', '*')
    .reply(200, "{\"id\":null,\"name\":\"xplatResourceTagRes2\",\"type\":\"Microsoft.Web/sites\",\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes2\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres2.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp2-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-013.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xplatResourceTagGrp2-EastUSwebspace/sites/xplatResourceTagRes2\",\"repositorySiteName\":\"xplatResourceTagRes2\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres2.azurewebsites.net\",\"xplatresourcetagres2.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres2.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0},{\"name\":\"xplatresourcetagres2.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2014-06-26T22:16:22.503\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes2\",\"trafficManagerHostNames\":null,\"sku\":\"Free\"}}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-length': '1543',
      'content-type': 'application/json',
      expires: '-1',
      etag: '"1CF918C4325BF70"',
      'x-ms-request-id': '47abd3a5-4ecc-499f-96cb-989e1a22b617',
      server: 'Microsoft-IIS/8.0',
      'x-aspnet-version': '4.0.30319',
      'x-powered-by': 'ASP.NET',
      'x-ms-ratelimit-remaining-subscription-writes': '1195',
      'x-ms-correlation-request-id': 'fe027d0e-31c2-452a-add0-100cba88de5a',
      'x-ms-routing-request-id': 'WESTUS:20140626T221628Z:fe027d0e-31c2-452a-add0-100cba88de5a',
      date: 'Thu, 26 Jun 2014 22:16:27 GMT'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatResourceTagGrp2/resources?$filter=tagname%20eq%20%27xplatResourceTag2%27&api-version=2014-04-01-preview')
    .reply(200, "{\"value\":[]}", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      expires: '-1',
      'x-ms-ratelimit-remaining-subscription-reads': '31991',
      'x-ms-request-id': 'f6bce612-3a96-4bf2-a3bf-2918dfb5275c',
      'x-ms-correlation-request-id': 'f6bce612-3a96-4bf2-a3bf-2918dfb5275c',
      'x-ms-routing-request-id': 'WESTUS:20140626T221628Z:f6bce612-3a96-4bf2-a3bf-2918dfb5275c',
      date: 'Thu, 26 Jun 2014 22:16:28 GMT',
      'content-length': '12'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xplatResourceTagGrp2?api-version=2014-04-01-preview')
    .reply(202, "", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      expires: '-1',
      location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
      'retry-after': '15',
      'x-ms-ratelimit-remaining-subscription-writes': '1196',
      'x-ms-request-id': 'c4464bbc-34a0-462a-bcea-d7002b785996',
      'x-ms-correlation-request-id': 'c4464bbc-34a0-462a-bcea-d7002b785996',
      'x-ms-routing-request-id': 'WESTUS:20140626T221628Z:c4464bbc-34a0-462a-bcea-d7002b785996',
      date: 'Thu, 26 Jun 2014 22:16:28 GMT',
      'content-length': '0'
    });
  return result;
},
function (nock) {
  var result =
  nock('https://management.azure.com:443')
    .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
    .reply(202, "", {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      expires: '-1',
      location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
      'retry-after': '15',
      'x-ms-ratelimit-remaining-subscription-reads': '31988',
      'x-ms-request-id': '5a85dc4a-51ec-45be-9f83-ba1816cd4e69',
      'x-ms-correlation-request-id': '5a85dc4a-51ec-45be-9f83-ba1816cd4e69',
      'x-ms-routing-request-id': 'WESTUS:20140626T221644Z:5a85dc4a-51ec-45be-9f83-ba1816cd4e69',
      date: 'Thu, 26 Jun 2014 22:16:43 GMT',
      'content-length': '0'
    });
  return result;
}]];