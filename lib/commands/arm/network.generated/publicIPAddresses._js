/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var tagUtils = require('../tag/tagUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var publicIPAddresses = network.category('public-ip')
    .description($('Commands to manage public ip addresses'));

  var defaultPublicIPAllocationMethod = 'Dynamic';
  var defaultPublicIPAddressVersion = 'IPv4';
  var defaultIdleTimeoutInMinutes = '4';

  publicIPAddresses.command('create [resource-group] [name] [location]')
    .description($('Create a public ip address'))
    .usage('[options] <resource-group> <name> <location>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-l, --location <location>', $('the location'))
    .option('-k, --sku-name [sku-name]', $('name of a public IP address SKU'))
    .option('-a, --allocation-method [allocation-method]', $('the public IP allocation method.' +
      '\n     Possible values are: \'Static\' and \'Dynamic\''))
    .option('-e, --ip-version [ip-version]', $('the public IP address version. Possible' +
      '\n     values are: \'IPv4\' and \'IPv6\''))
    .option('-d, --domain-name-label [domain-name-label]', $('sets the Domain name label.The' +
      '\n     concatenation of the domain name label and the regionalized DNS zone make up' +
      '\n     the fully qualified domain name associated with the public IP address. If a' +
      '\n     domain name label is specified, an A DNS record is created for the public IP in' +
      '\n     the Microsoft Azure DNS system'))
    .option('-f, --reverse-fqdn [reverse-fqdn]', $('sets the Reverse FQDN. A user-visible,' +
      '\n     fully qualified domain name that resolves to this public IP address. If the' +
      '\n     reverseFqdn is specified, then a PTR DNS record is created pointing from the IP' +
      '\n     address in the in-addr.arpa domain to the reverse FQDN'))
    .option('-i, --idle-timeout [idle-timeout]', $('the idle timeout of the public IP' +
      '\n     address'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var publicIPAddress;
      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        publicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          publicIPAddress = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (publicIPAddress) {
        throw new Error(util.format($('public ip address with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }

      if(!parameters.sku) {
        parameters.sku = {};
      }
      if(options.skuName) {
        parameters.sku.name = validation.isIn(options.skuName, ['Basic', 'Standard'], '--sku-name');
      }

      if(options.allocationMethod) {
        parameters.publicIPAllocationMethod = validation.isIn(options.allocationMethod, ['Static', 'Dynamic'], '--allocation-method');
      } else if(useDefaults) {
        parameters.publicIPAllocationMethod = defaultPublicIPAllocationMethod;
      }

      if(options.ipVersion) {
        parameters.publicIPAddressVersion = validation.isIn(options.ipVersion, ['IPv4', 'IPv6'], '--ip-version');
      } else if(useDefaults) {
        parameters.publicIPAddressVersion = defaultPublicIPAddressVersion;
      }

      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.domainNameLabel) {
        parameters.dnsSettings.domainNameLabel = options.domainNameLabel;
      }

      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.reverseFqdn) {
        parameters.dnsSettings.reverseFqdn = options.reverseFqdn;
      }

      if(options.idleTimeout) {
        parameters.idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.idleTimeoutInMinutes = parseInt(defaultIdleTimeoutInMinutes, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating public ip address "%s"'), name));
      try {
        publicIPAddress = networkManagementClient.publicIPAddresses.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(publicIPAddress, generatorUtils.traverse);
    });

  publicIPAddresses.command('set [resource-group] [name]')
    .description($('Update a public ip address'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-k, --sku-name [sku-name]', $('name of a public IP address SKU'))
    .option('-a, --allocation-method [allocation-method]', $('the public IP allocation method.' +
      '\n     Possible values are: \'Static\' and \'Dynamic\''))
    .option('-d, --domain-name-label [domain-name-label]', $('sets the Domain name label.The' +
      '\n     concatenation of the domain name label and the regionalized DNS zone make up' +
      '\n     the fully qualified domain name associated with the public IP address. If a' +
      '\n     domain name label is specified, an A DNS record is created for the public IP in' +
      '\n     the Microsoft Azure DNS system'))
    .option('-f, --reverse-fqdn [reverse-fqdn]', $('sets the Reverse FQDN. A user-visible,' +
      '\n     fully qualified domain name that resolves to this public IP address. If the' +
      '\n     reverseFqdn is specified, then a PTR DNS record is created pointing from the IP' +
      '\n     address in the in-addr.arpa domain to the reverse FQDN'))
    .option('-i, --idle-timeout [idle-timeout]', $('the idle timeout of the public IP' +
      '\n     address'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var publicIPAddress;
      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        publicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          publicIPAddress = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!publicIPAddress) {
        throw new Error(util.format($('public ip address with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = publicIPAddress;
      if(!parameters.sku) {
        parameters.sku = {};
      }
      if(options.skuName) {
        parameters.sku.name = validation.isIn(options.skuName, ['Basic', 'Standard'], '--sku-name');
      }

      if(options.allocationMethod) {
        parameters.publicIPAllocationMethod = validation.isIn(options.allocationMethod, ['Static', 'Dynamic'], '--allocation-method');
      } else if(useDefaults) {
        parameters.publicIPAllocationMethod = defaultPublicIPAllocationMethod;
      }

      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.domainNameLabel) {
        if(!utils.argHasValue(options.domainNameLabel)) {
          delete parameters.dnsSettings;
        } else {
          parameters.dnsSettings.domainNameLabel = options.domainNameLabel;
        }
      }

      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.reverseFqdn) {
        parameters.dnsSettings.reverseFqdn = options.reverseFqdn;
      }

      if(options.idleTimeout) {
        parameters.idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.idleTimeoutInMinutes = parseInt(defaultIdleTimeoutInMinutes, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating public ip address "%s"'), name));
      try {
        publicIPAddress = networkManagementClient.publicIPAddresses.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(publicIPAddress, generatorUtils.traverse);
    });

  publicIPAddresses.command('delete [resource-group] [name]')
    .description($('Delete a public ip address'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var publicIPAddress;
      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        publicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          publicIPAddress = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!publicIPAddress) {
        throw new Error(util.format($('public ip address with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete public ip address "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('public ip address "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting public ip address "%s"'), name));
      try {
        publicIPAddress = networkManagementClient.publicIPAddresses.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('public ip address "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });
};
