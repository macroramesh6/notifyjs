Package.describe({
  name: 'rameshmurukesan:notifyjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple, yet fully customizable notification library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/macroramesh6/notifyjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.mainModule('@notifyjs/dist/notify.js', 'client');
});

/*Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rameshmurukesan:notifyjs');
  api.mainModule('notifyjs-tests.js');
});*/
