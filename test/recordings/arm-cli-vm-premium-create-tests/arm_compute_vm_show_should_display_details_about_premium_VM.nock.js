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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bd8724b0-c648-4526-990c-06d2c4eb9035\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL2929\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli59fdb36dbca27af8-os-1461854126447\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13735.blob.core.windows.net/xplatteststoragecnt15260/cli59fdb36dbca27af8-os-1461854126447.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2383713853xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131062170979747812',
  'x-ms-request-id': '83c9da4b-e122-4dff-bba6-9eed68cdc805',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ab88ba52-5d55-4e97-9c87-9ed8d77692a8',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143919Z:ab88ba52-5d55-4e97-9c87-9ed8d77692a8',
  date: 'Thu, 28 Apr 2016 14:39:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bd8724b0-c648-4526-990c-06d2c4eb9035\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL2929\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli59fdb36dbca27af8-os-1461854126447\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13735.blob.core.windows.net/xplatteststoragecnt15260/cli59fdb36dbca27af8-os-1461854126447.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2383713853xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131062170979747812',
  'x-ms-request-id': '83c9da4b-e122-4dff-bba6-9eed68cdc805',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ab88ba52-5d55-4e97-9c87-9ed8d77692a8',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143919Z:ab88ba52-5d55-4e97-9c87-9ed8d77692a8',
  date: 'Thu, 28 Apr 2016 14:39:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bd8724b0-c648-4526-990c-06d2c4eb9035\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL2929\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli59fdb36dbca27af8-os-1461854126447\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13735.blob.core.windows.net/xplatteststoragecnt15260/cli59fdb36dbca27af8-os-1461854126447.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2383713853xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131062170979747812',
  'x-ms-request-id': '3c970db9-87cc-485e-9023-4b3370fc68f3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cc9fb883-73ef-4600-ac0b-e8f31a335e24',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143921Z:cc9fb883-73ef-4600-ac0b-e8f31a335e24',
  date: 'Thu, 28 Apr 2016 14:39:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"bd8724b0-c648-4526-990c-06d2c4eb9035\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL2929\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli59fdb36dbca27af8-os-1461854126447\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13735.blob.core.windows.net/xplatteststoragecnt15260/cli59fdb36dbca27af8-os-1461854126447.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2383713853xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131062170979747812',
  'x-ms-request-id': '3c970db9-87cc-485e-9023-4b3370fc68f3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cc9fb883-73ef-4600-ac0b-e8f31a335e24',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143921Z:cc9fb883-73ef-4600-ac0b-e8f31a335e24',
  date: 'Thu, 28 Apr 2016 14:39:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestnic\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic\",\r\n  \"etag\": \"W/\\\"df1b43d7-2963-4af4-b7d5-6b85143a785e\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e8ff3d3f-3ceb-4827-b389-2bf9d731b3ce\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1461854167888\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461854167888\",\r\n        \"etag\": \"W/\\\"df1b43d7-2963-4af4-b7d5-6b85143a785e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/virtualNetworks/xplattestvnet/subnets/xplattestsubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"0fscsds5c53urkyugtkxxthg4g.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A0-58-65\",\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1973',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"df1b43d7-2963-4af4-b7d5-6b85143a785e"',
  'x-ms-request-id': 'a2d428e7-dc9d-41b3-a175-0ac1c674c949',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c16056e2-9ff3-43e0-a37f-54478b342f24',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143922Z:c16056e2-9ff3-43e0-a37f-54478b342f24',
  date: 'Thu, 28 Apr 2016 14:39:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestnic\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic\",\r\n  \"etag\": \"W/\\\"df1b43d7-2963-4af4-b7d5-6b85143a785e\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e8ff3d3f-3ceb-4827-b389-2bf9d731b3ce\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1461854167888\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461854167888\",\r\n        \"etag\": \"W/\\\"df1b43d7-2963-4af4-b7d5-6b85143a785e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/virtualNetworks/xplattestvnet/subnets/xplattestsubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"0fscsds5c53urkyugtkxxthg4g.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A0-58-65\",\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/virtualMachines/xplatvm\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1973',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"df1b43d7-2963-4af4-b7d5-6b85143a785e"',
  'x-ms-request-id': 'a2d428e7-dc9d-41b3-a175-0ac1c674c949',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c16056e2-9ff3-43e0-a37f-54478b342f24',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143922Z:c16056e2-9ff3-43e0-a37f-54478b342f24',
  date: 'Thu, 28 Apr 2016 14:39:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/publicIPAddresses/xplattestip?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"efa81c35-e9c1-42fd-9791-75ecdf05023c\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"760c3a2b-9d65-4db0-9561-51a4c678f8ac\",\r\n    \"ipAddress\": \"104.43.8.215\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestipdns5564\",\r\n      \"fqdn\": \"xplattestipdns5564.southeastasia.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461854167888\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '985',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"efa81c35-e9c1-42fd-9791-75ecdf05023c"',
  'x-ms-request-id': 'a83d6e39-230d-4e6c-a62c-5a88125fcf1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7a55efde-65b8-453a-a191-3623d9c9133f',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143923Z:7a55efde-65b8-453a-a191-3623d9c9133f',
  date: 'Thu, 28 Apr 2016 14:39:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/publicIPAddresses/xplattestip?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"efa81c35-e9c1-42fd-9791-75ecdf05023c\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"760c3a2b-9d65-4db0-9561-51a4c678f8ac\",\r\n    \"ipAddress\": \"104.43.8.215\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestipdns5564\",\r\n      \"fqdn\": \"xplattestipdns5564.southeastasia.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461854167888\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '985',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"efa81c35-e9c1-42fd-9791-75ecdf05023c"',
  'x-ms-request-id': 'a83d6e39-230d-4e6c-a62c-5a88125fcf1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7a55efde-65b8-453a-a191-3623d9c9133f',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143923Z:7a55efde-65b8-453a-a191-3623d9c9133f',
  date: 'Thu, 28 Apr 2016 14:39:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail2929?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": [\r\n      {\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTESTZVMCREATE2543/providers/Microsoft.Compute/virtualMachines/XPLATVM\"\r\n      }\r\n    ]\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail2929\",\r\n  \"name\": \"xplatTestZVMAvail2929\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '612',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131062170979747812',
  'x-ms-request-id': '323d6e95-1b57-4770-b00e-4d5fc1a7b0e7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8e80cf5c-e876-41ff-9248-8bf5d87567db',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143925Z:8e80cf5c-e876-41ff-9248-8bf5d87567db',
  date: 'Thu, 28 Apr 2016 14:39:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail2929?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": [\r\n      {\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTESTZVMCREATE2543/providers/Microsoft.Compute/virtualMachines/XPLATVM\"\r\n      }\r\n    ]\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate2543/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail2929\",\r\n  \"name\": \"xplatTestZVMAvail2929\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '612',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131062170979747812',
  'x-ms-request-id': '323d6e95-1b57-4770-b00e-4d5fc1a7b0e7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8e80cf5c-e876-41ff-9248-8bf5d87567db',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T143925Z:8e80cf5c-e876-41ff-9248-8bf5d87567db',
  date: 'Thu, 28 Apr 2016 14:39:25 GMT',
  connection: 'close' });
 return result; }]];