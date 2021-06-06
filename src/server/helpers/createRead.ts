import { client } from '../db';
import { create } from './create';
import { getAll } from './read';

export const crud = (table) => {
    //replace with functions created in other crud files
    return {
        create: (data, table) => create(client, data, table),
        getAll: (table) => getAll(client, table)
    }
}