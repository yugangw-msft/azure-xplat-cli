// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup7371' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'ab1afd2c-ee87-459a-b23d-6c551f77c1da',
  'x-ms-correlation-request-id': 'ab1afd2c-ee87-459a-b23d-6c551f77c1da',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191903Z:ab1afd2c-ee87-459a-b23d-6c551f77c1da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:03 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371\",\"name\":\"xDeploymentTestGroup7371\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'befa2dc7-68f6-4a28-b832-bd4451d95b4e',
  'x-ms-correlation-request-id': 'befa2dc7-68f6-4a28-b832-bd4451d95b4e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191904Z:befa2dc7-68f6-4a28-b832-bd4451d95b4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371/providers/Microsoft.Resources/deployments/Deploy16861/validate?api-version=2016-02-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Resources/deployments/Deploy16861\",\"name\":\"Deploy16861\",\"properties\":{\"templateLink\":{\"uri\":\"http://azuresdkcitest.blob.core.windows.net/azure-cli-test/arm-deployment-template.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite13178\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost24016\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-25T19:19:07.3351372Z\",\"duration\":\"PT0S\",\"correlationId\":\"369a81d0-daee-49d7-82ef-c5480f4d096e\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/Sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite13178/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost24016-xDeploymentTestGroup7371\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost24016-xDeploymentTestGroup7371\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite13178\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite13178\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite13178\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite13178\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost24016\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost24016\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost24016\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost24016\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/components/xDeploymentTestSite13178\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"validatedResources\":[{\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"name\":\"xDeploymentTestHost24016\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"properties\":{\"name\":\"xDeploymentTestHost24016\",\"sku\":\"Standard\",\"workerSize\":\"0\",\"numberOfWorkers\":1}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\"],\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"name\":\"xDeploymentTestSite13178\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":{\"hidden-related:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\":\"Resource\"},\"properties\":{\"name\":\"xDeploymentTestSite13178\",\"serverFarmId\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\"}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/Sites/xDeploymentTestSite13178\"],\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178/Extensions/MSDeploy\",\"name\":\"xDeploymentTestSite13178/MSDeploy\",\"type\":\"Microsoft.Web/sites/Extensions\",\"properties\":{\"packageUri\":\"https://auxmktplceprod.blob.core.windows.net/packages/StarterSite-modified.zip\",\"dbType\":\"None\",\"connectionString\":\"\",\"setParameters\":{\"Application Path\":\"xDeploymentTestSite13178\"}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost24016-xDeploymentTestGroup7371\",\"name\":\"xDeploymentTestHost24016-xDeploymentTestGroup7371\",\"type\":\"microsoft.insights/autoscalesettings\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\":\"Resource\"},\"properties\":{\"profiles\":[{\"name\":\"Default\",\"capacity\":{\"minimum\":\"1\",\"maximum\":\"2\",\"default\":\"1\"},\"rules\":[{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT10M\",\"timeAggregation\":\"Average\",\"operator\":\"GreaterThan\",\"threshold\":80.0},\"scaleAction\":{\"direction\":\"Increase\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT10M\"}},{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT1H\",\"timeAggregation\":\"Average\",\"operator\":\"LessThan\",\"threshold\":60.0},\"scaleAction\":{\"direction\":\"Decrease\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT1H\"}}]}],\"enabled\":false,\"name\":\"xDeploymentTestHost24016-xDeploymentTestGroup7371\",\"targetResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\"}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite13178\",\"name\":\"ServerErrors xDeploymentTestSite13178\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\":\"Resource\"},\"properties\":{\"name\":\"ServerErrors xDeploymentTestSite13178\",\"description\":\"xDeploymentTestSite13178 has some server errors, status code 5xx.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"metricName\":\"Http5xx\"},\"operator\":\"GreaterThan\",\"threshold\":0.0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite13178\",\"name\":\"ForbiddenRequests xDeploymentTestSite13178\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\":\"Resource\"},\"properties\":{\"name\":\"ForbiddenRequests xDeploymentTestSite13178\",\"description\":\"xDeploymentTestSite13178 has some requests that are forbidden, status code 403.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"metricName\":\"Http403\"},\"operator\":\"GreaterThan\",\"threshold\":0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost24016\",\"name\":\"CPUHigh xDeploymentTestHost24016\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\":\"Resource\"},\"properties\":{\"name\":\"CPUHigh xDeploymentTestHost24016\",\"description\":\"The average CPU is high across all the instances of xDeploymentTestHost24016\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"metricName\":\"CpuPercentage\"},\"operator\":\"GreaterThan\",\"threshold\":90,\"windowSize\":\"PT15M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost24016\",\"name\":\"LongHttpQueue xDeploymentTestHost24016\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\":\"Resource\"},\"properties\":{\"name\":\"LongHttpQueue xDeploymentTestHost24016\",\"description\":\"The HTTP queue for the instances of xDeploymentTestHost24016 has a large number of pending requests.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"metricName\":\"HttpQueueLength\"},\"operator\":\"GreaterThan\",\"threshold\":100.0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/components/xDeploymentTestSite13178\",\"name\":\"xDeploymentTestSite13178\",\"type\":\"microsoft.insights/components\",\"location\":\"Central US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\":\"Resource\"},\"properties\":{\"applicationId\":\"xDeploymentTestSite13178\"}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '369a81d0-daee-49d7-82ef-c5480f4d096e',
  'x-ms-correlation-request-id': '369a81d0-daee-49d7-82ef-c5480f4d096e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191907Z:369a81d0-daee-49d7-82ef-c5480f4d096e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:07 GMT',
  'content-length': '15889' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371/providers/Microsoft.Resources/deployments/Deploy16861?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Resources/deployments/Deploy16861\",\"name\":\"Deploy16861\",\"properties\":{\"templateLink\":{\"uri\":\"http://azuresdkcitest.blob.core.windows.net/azure-cli-test/arm-deployment-template.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite13178\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost24016\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-25T19:19:11.2342068Z\",\"duration\":\"PT1.2658893S\",\"correlationId\":\"4ab3118f-57dd-4d9c-96be-7fbcb5fffc85\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/Sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite13178/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost24016-xDeploymentTestGroup7371\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost24016-xDeploymentTestGroup7371\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite13178\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite13178\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite13178\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite13178\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost24016\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost24016\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24016\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24016\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost24016\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost24016\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/Microsoft.Web/sites/xDeploymentTestSite13178\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite13178\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup7371/providers/microsoft.insights/components/xDeploymentTestSite13178\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite13178\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371/providers/Microsoft.Resources/deployments/Deploy16861/operationStatuses/08587426733355093509?api-version=2016-02-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '4ab3118f-57dd-4d9c-96be-7fbcb5fffc85',
  'x-ms-correlation-request-id': '4ab3118f-57dd-4d9c-96be-7fbcb5fffc85',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191911Z:4ab3118f-57dd-4d9c-96be-7fbcb5fffc85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:11 GMT',
  'content-length': '5501' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371/providers/Microsoft.Resources/deployments/Deploy16861/cancel?api-version=2016-02-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'e0ec91e4-ecee-4402-9a17-4fb6b21c2819',
  'x-ms-correlation-request-id': 'e0ec91e4-ecee-4402-9a17-4fb6b21c2819',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191913Z:e0ec91e4-ecee-4402-9a17-4fb6b21c2819',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup7371?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDczNzEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '40c26ba4-4631-4767-9817-d3d03c57d4a6',
  'x-ms-correlation-request-id': '40c26ba4-4631-4767-9817-d3d03c57d4a6',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191915Z:40c26ba4-4631-4767-9817-d3d03c57d4a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:15 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDczNzEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDczNzEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '15f25d7e-bb95-43e7-805a-c63e8ddb6efe',
  'x-ms-correlation-request-id': '15f25d7e-bb95-43e7-805a-c63e8ddb6efe',
  'x-ms-routing-request-id': 'WESTUS:20160325T191946Z:15f25d7e-bb95-43e7-805a-c63e8ddb6efe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:19:46 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDczNzEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'aba8c0dd-9c60-423a-98cd-d49142302f99',
  'x-ms-correlation-request-id': 'aba8c0dd-9c60-423a-98cd-d49142302f99',
  'x-ms-routing-request-id': 'WESTUS:20160325T192016Z:aba8c0dd-9c60-423a-98cd-d49142302f99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:20:16 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite13178','xDeploymentTestHost24016','xDeploymentTestGroup7371','Deploy16861'];};