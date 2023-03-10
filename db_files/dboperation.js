const config = require('./dbconfig'),
         sql = require('mssql');

const getClients = async(id) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(
            `SELECT * FROM Clients WHERE clientID = '${id}'`
        )
        return clients;
    } catch (error) {
        console.log(error);
    }
}

const insertClient = async(client) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(

            `INSERT INTO Clients VALUES (
                ${client.clientID}, 
                '${client.firstname}', 
                '${client.lastname}', 
                '${client.cpfid}', 
                '${client.phone}', 
                '${client.address}', 
                '${client.state}')`)

        return clients;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getClients, insertClient }