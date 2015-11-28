Package.describe({
  name: 'tapfuse:instagram-api',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use([
    'templating',
    'ecmascript',
    'http',
    'service-configuration',
    ]);
  // 3rd party
  // api.use([
  //   ]);

  api.addFiles('lib/tp-meteor-instagram-api-server.js', CS);

  api.export('InstagramApi');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:meteor-instagram-api');
  api.addFiles('tests/package-tests.js');
});
