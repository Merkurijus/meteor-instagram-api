Package.describe({
  name: 'tapfuse:instagram-api',
  version: '1.0.0',
  summary: 'Instagram API wrapper for Meteor',
  git: 'https://github.com/TapFuse/meteor-instagram-api.git',
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use(['templating','ecmascript','http','service-configuration',]);

  // Files
  api.addFiles('lib/tp-meteor-instagram-api-server.js', CS);

  // Export
  api.export('InstagramApi');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:meteor-instagram-api');
  api.addFiles('tests/package-tests.js');
});
