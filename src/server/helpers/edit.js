const edit = async (client, data, table, name) => {
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
    UPDATE ${table}
    TO (${data})
    WHERE name = ${name}
    `
    return client
    .query(query)
    .then(res => {
        console.log(`Update entry in ${table}\n NAME=${name}`);
    })
    .catch(err => {
        console.error(err);
    })
}

module.exports = { edit }