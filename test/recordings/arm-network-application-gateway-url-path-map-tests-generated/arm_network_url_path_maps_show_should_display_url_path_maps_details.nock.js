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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4cd6fe0a-0b02-40e7-9849-bf002a186368\",\r\n    \"sku\": {\r\n      \"name\": \"WAF_Medium\",\r\n      \"tier\": \"WAF\",\r\n      \"capacity\": 2\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"12.13.14.15\"\r\n            }\r\n          ],\r\n          \"urlPathMaps\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName\"\r\n            }\r\n          ],\r\n          \"pathRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName/pathRules/urlMapRuleName01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"backendHttpSettingsCollectionName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/backendHttpSettingsCollectionName\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 1313,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"urlPathMaps\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName\"\r\n            }\r\n          ],\r\n          \"pathRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName/pathRules/urlMapRuleName01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [\r\n      {\r\n        \"name\": \"urlPathMapName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"defaultBackendAddressPool\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/backendAddressPoolName\"\r\n          },\r\n          \"defaultBackendHttpSettings\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/backendHttpSettingsCollectionName\"\r\n          },\r\n          \"pathRules\": [\r\n            {\r\n              \"name\": \"urlMapRuleName01\",\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName/pathRules/urlMapRuleName01\",\r\n              \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n              \"properties\": {\r\n                \"provisioningState\": \"Succeeded\",\r\n                \"paths\": [\r\n                  \"/test\"\r\n                ],\r\n                \"backendAddressPool\": {\r\n                  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/backendAddressPoolName\"\r\n                },\r\n                \"backendHttpSettings\": {\r\n                  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/backendHttpSettingsCollectionName\"\r\n                }\r\n              }\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"34d10bb3-cea9-448b-b692-0b01c2b0d38a"',
  'x-ms-request-id': '5f1dd8d9-f80b-440b-935b-aac571269d1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'eea30e48-8059-4308-a278-556772baf33f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T131821Z:eea30e48-8059-4308-a278-556772baf33f',
  date: 'Wed, 04 Oct 2017 13:18:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4cd6fe0a-0b02-40e7-9849-bf002a186368\",\r\n    \"sku\": {\r\n      \"name\": \"WAF_Medium\",\r\n      \"tier\": \"WAF\",\r\n      \"capacity\": 2\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"12.13.14.15\"\r\n            }\r\n          ],\r\n          \"urlPathMaps\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName\"\r\n            }\r\n          ],\r\n          \"pathRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName/pathRules/urlMapRuleName01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"backendHttpSettingsCollectionName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/backendHttpSettingsCollectionName\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 1313,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"urlPathMaps\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName\"\r\n            }\r\n          ],\r\n          \"pathRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName/pathRules/urlMapRuleName01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [\r\n      {\r\n        \"name\": \"urlPathMapName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"defaultBackendAddressPool\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/backendAddressPoolName\"\r\n          },\r\n          \"defaultBackendHttpSettings\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/backendHttpSettingsCollectionName\"\r\n          },\r\n          \"pathRules\": [\r\n            {\r\n              \"name\": \"urlMapRuleName01\",\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/urlPathMaps/urlPathMapName/pathRules/urlMapRuleName01\",\r\n              \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n              \"properties\": {\r\n                \"provisioningState\": \"Succeeded\",\r\n                \"paths\": [\r\n                  \"/test\"\r\n                ],\r\n                \"backendAddressPool\": {\r\n                  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/backendAddressPoolName\"\r\n                },\r\n                \"backendHttpSettings\": {\r\n                  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/backendHttpSettingsCollectionName\"\r\n                }\r\n              }\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"34d10bb3-cea9-448b-b692-0b01c2b0d38a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-url-path-map/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"34d10bb3-cea9-448b-b692-0b01c2b0d38a"',
  'x-ms-request-id': '5f1dd8d9-f80b-440b-935b-aac571269d1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'eea30e48-8059-4308-a278-556772baf33f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T131821Z:eea30e48-8059-4308-a278-556772baf33f',
  date: 'Wed, 04 Oct 2017 13:18:20 GMT',
  connection: 'close' });
 return result; }]];