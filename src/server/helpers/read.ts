export const getAll = async (client, table) => {
    
    const query = `
    SELECT * FROM ${table} 
    `

    client.connect();
    return client
    .query(query)
    .then(res => {
        console.log(`Retrieved values from ${table}`);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
    });
}