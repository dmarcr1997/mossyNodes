const create = async (client, data, table) => {
    let schema;
    switch(table){
        case 'projects':
            schema = 'name, repo, img, gi'
            break
        case 'courseworks':
            schema = 'name, classname, date, file'
            console.log(data)
            break
        default:
            throw new Error(`Table: ${table}, does not exist on this db`)
    }
    
    const query = `
    INSERT into ${table} (${schema})
    VALUES (${data})
    `
    return client
    .query(query)
    .then(res => {
        console.log(`Added entry to ${table}`);
    })
    .catch(err => {
        console.error(err);
    })
}

module.exports = { create }