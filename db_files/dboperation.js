const config = require('./dbconfig'),
         sql = require('mssql');

<<<<<<< Updated upstream
const getClients = async( firstname ) => {
    try {
        let pool = await sql.connect(config);
        let clients = pool.request().query(
            `SELECT * FROM Clients WHERE firtsname = '${firstname}'`
=======
const getClients = async(id) => {
    try {
        let pool = await sql.connect(config);
        let clients = pool.request().query(
            `SELECT * FROM Clients WHERE clientID = '${id}'`
>>>>>>> Stashed changes
        )
        console.log(clients);
        return clients;
    } catch (error) {
        console.log(error);
    }
}

const insertClient = async(client) => {
    try {
        let pool = await sql.connect(config);
        let clients = pool.request().query(

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