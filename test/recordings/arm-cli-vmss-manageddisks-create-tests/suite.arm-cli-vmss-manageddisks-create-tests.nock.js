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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [];

 exports.randomTestIdsGenerated = function() { return ['xplatTstVmssGCreate8927','xplattestnic6309','xplatteststorage17406','xplatteststorage22021','xplatteststorage36649','xplatteststoragecnt13343','xplatteststoragecnt29737','xplatteststoragecnt31676','xplattestvnet4168','xplattestsubnet8387','xplattestipdns6891'];};