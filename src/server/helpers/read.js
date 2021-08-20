const getAll = async (client, table) => {
    
    const query = `
    SELECT * FROM ${table} 
    `
    return client
    .query(query)
    .then(res => {
        console.log(`Retrieved values from ${table}`);
        return res.rows
    })
    .catch(err => {
        console.error(err);
    })
}

module.exports = { getAll }