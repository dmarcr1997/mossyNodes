const { client } = require('./db');
const { create } = require('./helpers/create.js');
const { getAll } = require('./helpers/read.js');
const { edit } = require('./helpers/edit.js');

const crud = () => {
    //replace with functions created in other crud files
    client.connect();
    return {
        create: (data, table) => create(client, data, table),
        getAll: (table) => getAll(client, table),
        edit: (data, table, id) => edit(client, data, table, id)
    }
}

module.exports = { crud }