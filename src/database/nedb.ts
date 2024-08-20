import Datastore from '@seald-io/nedb'

export default new Datastore({ filename: 'temp/db.json', autoload: true })