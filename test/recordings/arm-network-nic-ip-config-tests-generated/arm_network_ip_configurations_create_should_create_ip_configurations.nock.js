// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"444b1d1a-b558-4f42-986d-03d99eed4852\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"444b1d1a-b558-4f42-986d-03d99eed4852\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1551',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"444b1d1a-b558-4f42-986d-03d99eed4852"',
  'x-ms-request-id': '27209def-ec16-42ac-b8c7-05be6c9af085',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c0a70048-cb2d-4fe3-9d8c-4d3c6409d399',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090820Z:c0a70048-cb2d-4fe3-9d8c-4d3c6409d399',
  date: 'Wed, 27 Sep 2017 09:08:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"444b1d1a-b558-4f42-986d-03d99eed4852\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"444b1d1a-b558-4f42-986d-03d99eed4852\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1551',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"444b1d1a-b558-4f42-986d-03d99eed4852"',
  'x-ms-request-id': '27209def-ec16-42ac-b8c7-05be6c9af085',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c0a70048-cb2d-4fe3-9d8c-4d3c6409d399',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090820Z:c0a70048-cb2d-4fe3-9d8c-4d3c6409d399',
  date: 'Wed, 27 Sep 2017 09:08:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2360',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f74cd722-d564-4d9a-95d6-9d5c3ac15e0a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/f74cd722-d564-4d9a-95d6-9d5c3ac15e0a?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6c53c37a-31fc-403a-b33c-84aa7d9009fc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090821Z:6c53c37a-31fc-403a-b33c-84aa7d9009fc',
  date: 'Wed, 27 Sep 2017 09:08:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2360',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f74cd722-d564-4d9a-95d6-9d5c3ac15e0a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/f74cd722-d564-4d9a-95d6-9d5c3ac15e0a?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6c53c37a-31fc-403a-b33c-84aa7d9009fc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090821Z:6c53c37a-31fc-403a-b33c-84aa7d9009fc',
  date: 'Wed, 27 Sep 2017 09:08:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2360',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"78d142c5-6df6-4c5e-aa61-f3760d34d162"',
  'x-ms-request-id': '47928323-e08e-4da8-a6bd-4a53c8b59e68',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '392f4a42-749d-4f75-8551-bb216354182e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090822Z:392f4a42-749d-4f75-8551-bb216354182e',
  date: 'Wed, 27 Sep 2017 09:08:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"396bd50b-4998-4fe8-aafd-bcbfdb2a20af\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"78d142c5-6df6-4c5e-aa61-f3760d34d162\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ing1blfrhweexb2njqfzxbvqlh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2360',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"78d142c5-6df6-4c5e-aa61-f3760d34d162"',
  'x-ms-request-id': '47928323-e08e-4da8-a6bd-4a53c8b59e68',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '392f4a42-749d-4f75-8551-bb216354182e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T090822Z:392f4a42-749d-4f75-8551-bb216354182e',
  date: 'Wed, 27 Sep 2017 09:08:22 GMT',
  connection: 'close' });
 return result; }]];