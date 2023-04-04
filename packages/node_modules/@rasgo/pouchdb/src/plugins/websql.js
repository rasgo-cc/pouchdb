// this code only runs in the browser, as its own dist/ script

import WebsqlPouchPlugin from '@rasgo/pouchdb-adapter-websql';
import { guardedConsole } from '@rasgo/pouchdb-utils';

if (typeof PouchDB === 'undefined') {
  guardedConsole('error', 'websql adapter plugin error: ' +
    'Cannot find global "PouchDB" object! ' +
    'Did you remember to include pouchdb.js?');
} else {
  PouchDB.plugin(WebsqlPouchPlugin);
}