// this code only runs in the browser, as its own dist/ script

import LocalStoragePouchPlugin from '@rasgo/pouchdb-adapter-localstorage';
import { guardedConsole } from '@rasgo/pouchdb-utils';

if (typeof PouchDB === 'undefined') {
  guardedConsole('error', 'localstorage adapter plugin error: ' +
    'Cannot find global "PouchDB" object! ' +
    'Did you remember to include pouchdb.js?');
} else {
  PouchDB.plugin(LocalStoragePouchPlugin);
}