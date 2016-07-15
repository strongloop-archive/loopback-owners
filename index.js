'use strict';

module.exports = [
  {
    name: 'API definition',
    owner: 'Gunjan',
    backup: 'Richard',
    repos: [
      'strongloop/loopback-api-definition',
      'strongloop/loopback-component-explorer',
      'strongloop/loopback-swagger',
    ],
  },
  {
    name: 'Boot',
    owner: 'David',
    backup: ['Candy', 'Gunjan', 'Richard'],
    repos: [
      'strongloop/loopback-boot',
      'strongloop/loopback-example-app-logic',
      'strongloop/loopback-example-middleware',
    ],
  },
  {
    name: 'Components',
    subgroups: [
      {
        name: 'Passport',
        owner: 'Loay',
        backup: 'Janny',
        repos: [
          'strongloop/loopback-component-passport',
          'strongloop/loopback-example-passport',
        ],
      },
      {
        name: 'Push notifications',
        label: 'component-push',
        owner: 'Simon',
        backup: ['Amir', 'Gunjan'],
        repos: [
          'strongloop/loopback-component-push',
          'strongloop/loopback-example-push',
        ],
      },
      {
        name: 'Storage',
        owner: 'Richard',
        backup: 'Loay',
        repos: [
          'strongloop/loopback-component-storage',
          'strongloop/loopback-example-storage',
        ],
      },
    ],
  },
  {
    name: 'Connectors',
    subgroups: [
      {
        name: 'Email',
        owner: 'Janny',
        backup: 'David',
        repos: 'strongloop/loopback-component-email',
      },
      {
        name: 'HTTP',
        owner: 'Gunjan',
        backup: 'Richard',
        repos: [
          'strongloop/loopback-connector-jsonrpc',
          'strongloop/loopback-connector-remote',
          'strongloop/loopback-connector-rest',
          'strongloop/loopback-connector-soap',
          'strongloop/loopback-connector-swagger',
          'strongloop/loopback-example-connector',
        ],
      },
      {
        name: 'IBM',
        owner: 'Quentin',
        backup: undefined,
        repos: [
          'strongloop/loopback-connector-dashdb',
          'strongloop/loopback-connector-db2',
          'strongloop/loopback-connector-db2z',
          'strongloop/loopback-connector-informix',
          'strongloop/loopback-connector-mqlight',
          'strongloop/loopback-ibmdb',
        ],
      },
      {
        name: 'NoSQL',
        owner: ['Candy', 'Janny', 'Simon'],
        backup: ['Loay', 'Amir'],
        repos: [
          'strongloop/loopback-datasource-juggler/blob/master/lib/connectors/' +
            'memory.js',
          'strongloop/loopback-datasource-juggler/blob/master/lib/connectors/' +
            'transient.js',
          'strongloop/loopback-connector-cloudant',
          'strongloop/loopback-connector-mongodb',
          'strongloop/loopback-connector-redis',
        ],
      },
      {
        name: 'SQL',
        owner: ['Candy', 'Loay', 'Simon'],
        backup: ['Amir', 'Janny'],
        repos: [
          'strongloop/loopback-connector',
          'strongloop/loopback-connector-mssql',
          'strongloop/loopback-connector-mysql',
          'strongloop/loopback-connector-oracle',
          'strongloop/loopback-connector-postgres',
          'strongloop/loopback-connector-sqlite3',
          'strongloop/loopback-example-database',
          'strongloop/loopback-oracle-builder',
          'strongloop/loopback-oracle-installer',
        ],
      },
    ],
  },
  {
    name: 'Juggler',
    subgroups: [
      {
        name: 'Composition',
        owner: 'Richard',
        backup: 'Simon',
        repos: [
          'strongloop/loopback-datasource-juggler/blob/master/lib/mixins.js',
          'strongloop/loopback-example-mixins',
        ],
      },
      {
        name: 'Model definition',
        owner: ['Gunjan', 'Simon'],
        backup: ['Candy', 'Simon']
        repos: [
          'strongloop/loopback-model',
          'strongloop/loopback-datasource-juggler/blob/master/lib/' +
            'model-definition.js',
        ],
      },
      {
        name: 'Persisted model (DAO) + loopback-filter',
        owner: ['Amir', 'Simon'],
        backup: ['Loay', 'Simon'],
        repos: [
          'strongloop/loopback-datasource-juggler/blob/master/lib/' +
            'dao.js',
          'strongloop/loopback-filters',
          'strongloop/loopback-model-persistence',
        ],
      },
      {
        name: 'Relations',
        owner: 'Janny',
        backup: ['Amir', 'Simon'],
        repos: [
          'strongloop/loopback-datasource-juggler/blob/master/lib/relation.js',
          'strongloop/loopback-datasource-juggler/blob/master/lib/' +
            'relation-definition.js',
          'strongloop/loopback-example-relations',
        ],
      },
      {
        name: 'Validation',
        owner: 'Amir',
        backup: ['David', 'Simon'],
        repos: [
          'strongloop/loopback-datasource-juggler/blob/master/lib/' +
            'validation.js',
        ],
      },
    ],
  },
  {
    name: 'Logging',
    owner: 'David',
    backup: undefined,
    repos: [
      'strongloop/loopback-logger',
    ],
  },
  {
    name: 'LoopBack',
    subgroups: [
      {
        name: 'Auth',
        owner: 'Loay',
        backup: 'Richard',
        repos: [
          'strongloop/loopback-acl-route',
          'strongloop/loopback-component-oauth2',
          'strongloop/loopback-example-access-control',
          'strongloop/loopback-example-ssl',
          'strongloop/loopback-example-user-management',
          'strongloop/loopback-policy',
        ],
      },
      {
        name: 'Multitenancy',
        owner: 'Simon',
        backup: ['Richard'],
        repos: [
          'strongloop/loopback-multitenancy',
          'strongloop/loopback-multitenant-poc',
          'strongloop/poc-loopback-multitenancy ',
        ],
      },
      {
        name: 'Registries',
        owner: 'David',
        backup: ['Gunjan', 'Richard'],
        repos: [
          'strongloop/loopback/blob/master/lib/loopback.js',
          'strongloop/loopback-getting-started',
          'strongloop/loopback-getting-started-intermediate',
        ],
      },
      {
        name: 'Remoting',
        owner: ['Gunjan, Richard'],
        backup: ['Candy', 'David'],
        repos: [
          'strongloop/loopback/blob/master/lib/server-app.js',
          'strongloop/loopback-example-isomorphic',
          'strongloop/loopback-example-offline-sync',
          'strongloop/loopback-phase',
          'strongloop/strong-remoting',
        ],
      },
    ],
  },
  {
    name: 'SDKs',
    subgroups: [
      {
        name: 'Android',
        owner: 'Loay',
        backup: 'Simon',
        repos: [
          'strongloop/loopback-android-getting-started',
          'strongloop/loopback-sdk-android',
        ],
      },
      {
        name: 'Angular 1.x',
        owner: 'David',
        backup: 'Candy',
        repos: [
          'strongloop/angular-live-set',
          'strongloop/grunt-loopback-sdk-angular',
          'strongloop/gulp-loopback-sdk-angular',
          'strongloop/loopback-sdk-angular',
          'strongloop/loopback-sdk-angular-cli',
          'strongloop/loopback-example-angular',
          'strongloop/loopback-example-angular-live-set',
          'strongloop/loopback-example-pubsub',
        ],
      },
      {
        name: 'iOS',
        owner: 'Gunjan',
        backup: 'Janny',
        repos: [
          'strongloop/loopback-sdk-ios',
          'strongloop/loopback-sdk-ios-codegen',
          'strongloop/loopback-sdk-ios-getting-started',
        ],
      },
      {
        name: 'Xamarin',
        owner: 'Loay',
        backup: 'Richard',
        repos: [
          'strongloop/loopback-example-xamarin',
          'strongloop/loopback-sdk-xamarin',
        ],
      },
    ],
  },
  {
    name: 'Workspace + generators',
    owner: ['Candy', 'Janny'],
    backup: 'Richard',
    repos: [
      'strongloop/generator-loopback',
      'strongloop/loopback-workspace',
    ],
  },
  {
    name: 'Other',
    subgroups: [
      {
        name: 'Administration',
        owner: 'Simon',
        backup: ['Candy', 'Miroslav', 'Raymond'],
        repos: [
          'strongloop/loopback-admin-tools',
          'strongloop/loopback-internal-knowledge-base',
          'strongloop/loopback-knowledge-base',
          'strongloop/loopback-owner',
        ],
      },
      {
        name: 'Coding conventions',
        owner: 'Miroslav',
        backup: 'Simon',
        repos: [
          'strongloop/eslint-config-loopback',
        ],
      },
      {
        name: 'Triage',
        owner: 'Simon',
        backup: ['Candy', 'Miroslav'],
        repos: [
          'strongloop/loopback-example',
          'strongloop/loopback-sandbox',
          'strongloop/loopback-triage',
        ],
      },
    ],
  },
  {
    name: 'To deprecate or archive',
    owner: 'Miroslav',
    backup: ['Raymond', 'Simon'],
    repos: [
      'amenadiel/loopback-example-login',
      'strongloop/loopback-benchmarks',
      'strongloop/loopback-benchmark-mongodb',
      'strongloop/loopback-connector-atg',
      'strongloop/loopback-connector-salesforce',
      'strongloop/loopback-editor',
      'strongloop/loopback-faq-model-hooks',
      'strongloop/loopback-example-composite',
      'strongloop/loopback-example-java',
      'strongloop/loopback-example-fitness',
      'strongloop/loopback-example-icars-mockup',
      'strongloop/loopback-example-ishop',
      'strongloop/loopback-example-login',
      'strongloop/loopback-example-next',
      'strongloop/loopback-ldl',
      'strongloop/loopback-testing',
    ],
  },
];
