// Pull from src because pouchdb-node/pouchdb-browser themselves
// are aggressively optimized and jsnext:main would normally give us this
// aggressive bundle.
import PouchDB from '@rasgo/pouchdb-browser/src/index';
export default PouchDB;