﻿/**
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

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-public-ip-tests-generated',
  groupName = 'xplat-test-public-ip',
  location;
var index = 0;

var publicIPAddresses = {
  publicIPAllocationMethod: 'Static',
  publicIPAllocationMethodNew: 'Dynamic',
  publicIPAddressVersion: 'IPv4',
  domainNameLabel: 'labelcreate',
  domainNameLabelNew: 'labelset',
  idleTimeoutInMinutes: '15',
  idleTimeoutInMinutesNew: '14',
  skuname: 'Basic',
  zones: '1',
  location: 'eastus2',
  name: 'publicIPAddressName'
};

var publicIPAddressesDefault = {
  location: 'eastus2',
  publicIPAllocationMethod: 'Dynamic',
  publicIPAddressVersion: 'IPv4',
  idleTimeoutInMinutes: '4',
  name: 'publicIPAddressesDefaultName',
  group: groupName
};

var ipAllocationMethodOutOfRange = {
  publicIPAllocationMethod: 'Any',
  location: 'eastus2',
  name: 'IPAllocationMethodOutOfRangeName'
};

var ipVersionOutOfRange = {
  publicIPAddressVersion: 'IPv8',
  location: 'eastus2',
  name: 'IPVersionOutOfRangeName'
};

var invalidSymbolsInLable = {
  domainNameLabel: 'l-a_b-1-e',
  location: 'eastus2',
  name: 'invalidSymbolsInLableName'
};

var idleTimeoutUnderRange = {
  idleTimeoutInMinutes: '3',
  location: 'eastus2',
  name: 'idleTimeoutUnderRangeName'
};

var idleTimeoutOverRange = {
  idleTimeoutInMinutes: '31',
  location: 'eastus2',
  name: 'idleTimeoutOverRangeName'
};

var deleteOfDomainNameLabel = {
  domainNameLabel: 'xplattestlbl',
  location: 'eastus2',
  name: 'deleteOfDomainNameLabelName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'eastus2'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = publicIPAddresses.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        publicIPAddresses.location = location;
        publicIPAddresses.name = suite.isMocked ? publicIPAddresses.name : suite.generateId(publicIPAddresses.name, null);

        publicIPAddresses.group = groupName;
        ipAllocationMethodOutOfRange.group = groupName;
        ipVersionOutOfRange.group = groupName;
        invalidSymbolsInLable.group = groupName;
        idleTimeoutUnderRange.group = groupName;
        idleTimeoutOverRange.group = groupName;
        deleteOfDomainNameLabel.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            done();
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('public ip addresses', function () {
      this.timeout(testTimeout);
      it('create should create public ip addresses', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --allocation-method {publicIPAllocationMethod} --ip-version {publicIPAddressVersion} --domain-name-label {domainNameLabel} --idle-timeout {idleTimeoutInMinutes} --sku-name {skuname} --zones {zones} --location {location}'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display public ip addresses details', function (done) {
        var cmd = 'network public-ip show -g {group} -n {name}'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update public ip addresses', function (done) {
        var cmd = 'network public-ip set -g {group} -n {name} --allocation-method {publicIPAllocationMethodNew} --domain-name-label {domainNameLabelNew} --idle-timeout {idleTimeoutInMinutesNew}'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all public ip addresses in resource group', function (done) {
        var cmd = 'network public-ip list -g {group}'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete public ip addresses', function (done) {
        var cmd = 'network public-ip delete -g {group} -n {name} --quiet'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network public-ip show -g {group} -n {name}'.formatArgs(publicIPAddresses);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);

            cmd = 'network public-ip list -g {group}'.formatArgs(publicIPAddresses);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
      it('create with defaults should create public ip addresses with default values', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --location {location}'.formatArgs(publicIPAddressesDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network public-ip delete -g {group} -n {name} --quiet'.formatArgs(publicIPAddressesDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for ip allocation method out of range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --allocation-method {publicIPAllocationMethod} --location {location} --json'.formatArgs(ipAllocationMethodOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for ip version out of range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --ip-version {publicIPAddressVersion} --location {location} --json'.formatArgs(ipVersionOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid symbols in lable', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --domain-name-label {domainNameLabel} --location {location} --json'.formatArgs(invalidSymbolsInLable);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout under range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --location {location} --json'.formatArgs(idleTimeoutUnderRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout over range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --location {location} --json'.formatArgs(idleTimeoutOverRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for delete of domain name label', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --domain-name-label {domainNameLabel} --location {location} --json'.formatArgs(deleteOfDomainNameLabel);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(deleteOfDomainNameLabel.name);
          output.dnsSettings.domainNameLabel.toLowerCase().should.equal(deleteOfDomainNameLabel.domainNameLabel.toLowerCase());

          cmd = 'network public-ip set -g {group} -n {name} --json'.formatArgs(deleteOfDomainNameLabel);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(deleteOfDomainNameLabel.name);

            cmd = 'network public-ip delete -g {group} -n {name} --quiet --json'.formatArgs(deleteOfDomainNameLabel);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});
